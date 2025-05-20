let semanticHTML =
    "<div id='semanticInstructions' style='display:none'><br><p>Drag the city object towards what you think it belonged to on this US map. When finished, submit button will appear at the bottom.</p>" +
    "<div id='cityMapWrapper' style='display: none;'>" +
    "<div id='semanticMain'><br><div id='cityList' style='width: 700px; margin: 0 auto; position: relative; bottom: 10%; border: 1px solid #aaaaaa;'>" +
    [...Array(13)].map((_, i) => {
    const id = i + 1 < 10 ? `semantic0${i + 1}` : `semantic${i + 1}`;
    const city = [
        "Aliance", "Boulder", "Cornwall", "Custer", "DelawareCity", "Medora", "Newport",
        "ParkCity", "Racine", "Sitka", "WestPalmBeach", "Yukon", "Yukon"
    ][i];
    return `<img id='${id}' src='../static/images/${city}.png' alt='${city}' width='100' height='100' draggable='true' ondragstart='event.dataTransfer.setData("text/plain", event.target.id)'>`;
    }).join("") +
    "</div>" +  // ✅ closes #cityList
    "<div id='semanticZone' style='width: 1400px; height: 700px; margin: 0 auto; position: relative; bottom: 10%; border: 1px solid #aaaaaa; background: url(\"../static/images/blankUSmap.png\") no-repeat center center; background-size: contain;' ondrop='dropSemanticEvent(event)' ondragover='allowSemanticDrop(event)'>" +
    "<div id='cityOverlay' style='width: 1400px; height: 700px; margin: 0 auto; position: relative;'></div>" +
    "</div></div></div>" +
    "<button id='confirmsemantic' style='display: none;margin: 0 auto;padding: 10px 20px;background-color: #4CAF50;color: black;border: none;border-radius: 8px;font-size: 16px;cursor: pointer;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);transition: background-color 0.3s ease;'>Submit</button>";

let semanticImagePositions = {};  // Global store


function initiatesemanticMap() {
    let droppedImages = new Set(); // Track which image IDs have been dropped
    // Inject semantic interface
    let wrapper = document.createElement('div');
    wrapper.id = 'semanticWrapper';
    wrapper.innerHTML = semanticHTML;
    document.body.appendChild(wrapper);

    // Show instructions
    const instructions = document.getElementById('semanticInstructions');
    if (instructions) instructions.style.display = 'block';

    // Hide launch button
    const startBtn = document.getElementById("launchMap");
    if (startBtn) startBtn.style.display = "none";

    // Show main UI
    const mainContainer = document.getElementById("cityMapWrapper");
    if (mainContainer) mainContainer.style.display = "block";

    // Drag-and-drop handlers (declare on window so ondrop/onover can access)
    window.allowSemanticDrop = function (ev) {
        ev.preventDefault();
    };

    window.dropSemanticEvent = function (ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text/plain");
        const dragged = document.getElementById(data);
        const dropZone = document.getElementById("semanticZone");
    
        if (dragged && dropZone) {
            dropZone.appendChild(dragged);
    
            const dropRect = dropZone.getBoundingClientRect();
            const imgWidth = dragged.offsetWidth;
            const imgHeight = dragged.offsetHeight;
    
            // Raw drop coordinates
            let x = ev.clientX - dropRect.left - imgWidth / 2;
            let y = ev.clientY - dropRect.top - imgHeight / 2;
    
            // Clamp within bounds
            x = Math.max(0, Math.min(x, dropRect.width - imgWidth));
            y = Math.max(0, Math.min(y, dropRect.height - imgHeight));
    
            dragged.style.position = "absolute";
            dragged.style.left = `${x}px`;
            dragged.style.top = `${y}px`;
    
            // Track dropped image
            droppedImages.add(dragged.id);
    
            if (droppedImages.size === 13) {
                activateSemanticSubmitButton();
            }
        }
    };    
}

function activateSemanticSubmitButton() {
    const submitBtn = document.getElementById('confirmsemantic');
    if (!submitBtn) return;

    submitBtn.style.display = 'block';

    submitBtn.addEventListener('click', function () {
        semanticImagePositions = {}; // Reset before storing new data

        for (let i = 1; i <= 13; i++) {
            const imgID = i < 10 ? `semantic0${i}` : `semantic${i}`;
            const img = document.getElementById(imgID);

            if (img && img.parentElement.id === 'semanticZone') {
                const left = parseFloat(img.style.left) || 0;
                const top = parseFloat(img.style.top) || 0;
                semanticImagePositions[imgID] = { x: left, y: top };
            }
        }

        const semanticWrapper = document.getElementById('semanticWrapper');
        if (semanticWrapper) {
            semanticWrapper.remove();
        }

        jsPsych.finishTrial(); // This ends the trial
    }, { once: true });
}
