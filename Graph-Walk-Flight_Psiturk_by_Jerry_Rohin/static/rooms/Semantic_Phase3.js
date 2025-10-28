// ==== globals ====
let semanticHTML;
let semanticImagePositions = {};
let unknownImages = new Set();
let unknowncity = [];

// ----- logging (semantic phase) -----
let p3SemStartMs = null;            // absolute ms when semantic task starts
let action_semantic = [];           // per-trial action log (relative times)
window.action_semantic = action_semantic;

function logSemantic(type, details) {
  try {
    const now = Date.now();
    const t = (p3SemStartMs == null) ? 0 : (now - p3SemStartMs);
    action_semantic.push(Object.assign({ t, t_abs: now, type }, details || {}));
  } catch (e) {}
}

// Make phase3stim an array of { label, stimulus } objects.
// Assumes generated_stimuli items look like: { filename, label, stimulus }
phase3stim = imageFiles.map((filename) => {
  const match = generated_stimuli.find((item) => item.filename === filename);
  if (match) {
    return {
      label: match.label || filename.replace(/\.\w+$/, ""),
      stimulus: match.stimulus, // base64 data URL
    };
  }
  // fallback if not found
  return {
    label: filename.replace(/\.\w+$/, ""),
    stimulus: "", // or a 1x1 transparent data url if you prefer
  };
});

function initiatesemanticMap() {
  // init per-trial timer + log
  p3SemStartMs = Date.now();
  action_semantic = [];
  window.action_semantic = action_semantic;
  semanticImagePositions = {};
  unknownImages = new Set();
  unknowncity = [];
  logSemantic('semantic_init');

  semanticHTML =
    "<button id='confirmsemantic' style='display: none; margin: 30px auto; padding: 10px 20px; background-color: #4CAF50; color: black; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease;'>Submit</button>" +
    "<div id='semanticWrapper'>" +
    "<div id='semanticInstructions' style='display: none; margin: 20px auto; max-width: 900px; text-align: center;'>" +
    "<p>Drag the city object towards what you think it belonged to on this US map. When finished, the submit button will appear at the bottom.</p>" +
    "</div>" +
    "<div id='cityMapWrapper' style='display: none;'>" +
    "<div id='semanticMain' style='display: flex; flex-direction: column; align-items: center;'>" +
    "<div id='cityList' style='width: 1000px; display: flex; flex-wrap: wrap; border: 1px solid #aaaaaa; padding: 10px; gap: 10px; margin-bottom: 20px;'></div>" +
    "<div id='semanticZone' style='width: 1300px; height: 650px; margin: 0 auto; position: relative; border: 1px solid #aaaaaa; background: url(\"../static/images/blankUSmap.png\") no-repeat center center; background-size: contain;' ondrop='dropSemanticEvent(event)' ondragover='allowSemanticDrop(event)'>" +
    "<div id='cityOverlay' style='width: 1300px; height: 650px; margin: 0 auto; position: relative;'></div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div id='unknownZone' style='width: 1000px; display: flex; flex-wrap: wrap; border: 1px dashed #aaa; background-color: #f9f9f9; padding: 10px; gap: 10px; margin: 20px auto 10px auto;'>" +
    "<div style='width: 100%; text-align: center; font-weight: bold; font-size: 14px;'>No Idea <br>Drop Here</div>" +
    "</div>" +
    "</div>";

  // derive city names from phase3stim objects
  const cityNames = phase3stim.map((s) => s.label);

  // new wrapper (clear any old)
  let wrapper = document.getElementById("semanticWrapper");
  if (wrapper) wrapper.remove();

  wrapper = document.createElement("div");
  wrapper.id = "semanticWrapper";
  wrapper.innerHTML = semanticHTML;
  document.body.appendChild(wrapper);

  const droppedImages = new Set();

  // Unknown zone handlers (single drop handler)
  const unknownZone = document.getElementById("unknownZone");
  unknownZone.addEventListener("dragover", (ev) => ev.preventDefault());
  unknownZone.addEventListener("drop", function (ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text/plain");
    const city = ev.dataTransfer.getData("text/city");
    const imgOrDot = document.getElementById(id);
    if (!imgOrDot) return;

    // Remove the draggable (either the source thumbnail or a dot-wrapper)
    imgOrDot.remove();

    // Render a text tag in unknown zone
    const label = document.createElement("div");
    label.textContent = city || "Unknown";
    label.style.fontSize = "12px";
    label.style.padding = "4px 8px";
    label.style.border = "1px solid #ccc";
    label.style.borderRadius = "4px";
    label.style.background = "#f1f1f1";
    unknownZone.appendChild(label);

    droppedImages.add(id);
    if (city) unknownImages.add(city);

    logSemantic('drop_to_unknown', { id, city: city || null });

    if (droppedImages.size === 13) {
      activateSemanticSubmitButton();
    }
  });

  // Show UI
  document.getElementById("semanticInstructions").style.display = "block";
  const startBtn = document.getElementById("launchMap");
  if (startBtn) startBtn.style.display = "none";
  document.getElementById("cityMapWrapper").style.display = "block";

  // Populate thumbnails
  const cityListContainer = document.getElementById("cityList");
  cityListContainer.innerHTML = "";

  cityNames.forEach((city, i) => {
    const id = i + 1 < 10 ? `semantic0${i + 1}` : `semantic${i + 1}`;

    const img = document.createElement("img");
    img.id = id;
    img.src = phase3stim[i].stimulus;      // base64 data URL
    img.alt = city;
    img.draggable = true;
    img.style.width = "80px";
    img.style.height = "100px";
    img.style.margin = "8px";

    img.addEventListener("dragstart", function (ev) {
      ev.dataTransfer.setData("text/plain", id);
      ev.dataTransfer.setData("text/city", city);
      logSemantic('thumb_drag_start', { id, city });
    });

    // When the thumbnail is dropped *somewhere* (map or unknown), we’ll log in those handlers.
    // If you also want a pure drag_end for thumbs (mouse up anywhere), you could bind on document mouseup,
    // but that risks noise. We keep it minimal here.

    cityListContainer.appendChild(img);
  });

  // DnD helpers for map
  window.allowSemanticDrop = function (ev) {
    ev.preventDefault();
  };

  window.dropSemanticEvent = function (ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text/plain");
    let city = ev.dataTransfer.getData("text/city");
    const original = document.getElementById(id);
    const dropZone = document.getElementById("semanticZone");
    if (!dropZone) return;

    if (!city && original) {
      city = original.dataset.city;
    }
    if (original) {
      // Remove original node (thumbnail or previous dot)
      original.remove();
    }

    // Create / re-create a draggable dot-wrapper (reuse SAME id to keep continuity)
    const dotWrapper = document.createElement("div");
    dotWrapper.dataset.city = city;
    dotWrapper.id = id;
    dotWrapper.style.width = "80px";
    dotWrapper.style.height = "80px";
    dotWrapper.style.position = "absolute";
    dotWrapper.style.cursor = "grab";

    const label = document.createElement("div");
    label.textContent = city;
    label.style.textAlign = "center";
    label.style.fontWeight = "bold";
    label.style.fontSize = "12px";

    const dot = document.createElement("div");
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.backgroundColor = "black";
    dot.style.borderRadius = "50%";
    dot.style.margin = "0 auto";

    // Find matching stimulus for preview
    const matchObj = phase3stim.find((o) => o.label === city);
    const preview = document.createElement("img");
    preview.src = matchObj?.stimulus || "";
    preview.alt = city;
    preview.style.position = "absolute";
    preview.style.width = "80px";
    preview.style.height = "100px";
    preview.style.left = "110%";
    preview.style.top = "50%";
    preview.style.transform = "translateY(-50%)";
    preview.style.display = "none";
    preview.style.border = "1px solid #333";
    preview.style.background = "#fff";
    preview.style.zIndex = "10";

    dotWrapper.appendChild(label);
    dotWrapper.appendChild(dot);
    dotWrapper.appendChild(preview);

    // hover preview
    dotWrapper.addEventListener("mouseenter", () => (preview.style.display = "block"));
    dotWrapper.addEventListener("mouseleave", () => (preview.style.display = "none"));

    // make the dot draggable again (for re-placement)
    dotWrapper.draggable = true;

    // Only log compact drag start/end for dots — no continuous moves
    let dragStartPos = null;
    dotWrapper.addEventListener("dragstart", function (ev2) {
      ev2.dataTransfer.setData("text/plain", dotWrapper.id);
      ev2.dataTransfer.setData("text/city", dotWrapper.dataset.city);
      // remember starting (x,y) where it currently sits
      const sx = parseFloat(dotWrapper.style.left) || 0;
      const sy = parseFloat(dotWrapper.style.top) || 0;
      dragStartPos = { x: sx, y: sy };
      logSemantic('dot_drag_start', { id: dotWrapper.id, city: dotWrapper.dataset.city, x: sx, y: sy });
    });
    // We don’t attach a global dragend here because *where* it ends is determined by the next drop;
    // we’ll log `dot_drag_end` in the destination drop handler with final (x,y).

    // position where dropped (clamped)
    const dropRect = dropZone.getBoundingClientRect();
    const dotW = 80, dotH = 80;
    let x = ev.clientX - dropRect.left - dotW / 2;
    let y = ev.clientY - dropRect.top - dotH / 2;
    x = Math.max(0, Math.min(x, dropRect.width - dotW));
    y = Math.max(0, Math.min(y, dropRect.height - dotH));
    dotWrapper.style.left = `${x}px`;
    dotWrapper.style.top  = `${y}px`;

    dropZone.appendChild(dotWrapper);

    // Count toward completion (placed on map)
    droppedImages.add(id);

    // Log the placement & drag end (final position)
    logSemantic('drop_to_map', { id, city, x, y });
    logSemantic('dot_drag_end', { id, city, x, y });

    if (droppedImages.size === 13) {
      activateSemanticSubmitButton();
    }
  };

  logSemantic('semantic_ui_ready');
}

function activateSemanticSubmitButton() {
  const submitBtn = document.getElementById("confirmsemantic");
  if (!submitBtn) return;

  submitBtn.style.display = "block";

  // prevent multiple bindings
  submitBtn.replaceWith(submitBtn.cloneNode(true));
  const freshBtn = document.getElementById("confirmsemantic");

  freshBtn.addEventListener("click", function () {
    semanticImagePositions = {}; // reset

    for (let i = 1; i <= 13; i++) {
      const imgID = i < 10 ? `semantic0${i}` : `semantic${i}`;
      const node = document.getElementById(imgID); // will be dot-wrapper div if placed
      if (node && node.parentElement && node.parentElement.id === "semanticZone") {
        const x = parseFloat(node.style.left) || 0;
        const y = parseFloat(node.style.top)  || 0;
        semanticImagePositions[imgID] = { x, y, city: node.dataset.city || null };
      }
    }

    const semanticWrapper = document.getElementById("semanticWrapper");
    if (semanticWrapper) semanticWrapper.remove();

    unknowncity = Array.from(unknownImages);

    logSemantic('semantic_submit', {
      positions: semanticImagePositions,
      unknown: unknowncity.slice()
    });

    jsPsych.finishTrial();
  });
}
