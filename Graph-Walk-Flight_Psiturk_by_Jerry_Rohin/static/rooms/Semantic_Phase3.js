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
    const cityNames = [
        "Aliance", "Boulder", "Cornwall", "Custer", "DelawareCity", "Medora", "Newport",
        "ParkCity", "Racine", "Sitka", "WestPalmBeach", "Yukon", "Yukon"
    ];

    let droppedImages = new Set();
    let wrapper = document.createElement('div');
    wrapper.id = 'semanticWrapper';
    wrapper.innerHTML = semanticHTML;
    document.body.appendChild(wrapper);

    document.getElementById('semanticInstructions').style.display = 'block';
    const startBtn = document.getElementById("launchMap");
    if (startBtn) startBtn.style.display = "none";
    document.getElementById("cityMapWrapper").style.display = "block";

    const cityListContainer = document.getElementById('cityList');
    cityListContainer.innerHTML = '';

    cityNames.forEach((city, i) => {
        const id = i + 1 < 10 ? `semantic0${i + 1}` : `semantic${i + 1}`;

        const dotWrapper = document.createElement('div');
        dotWrapper.id = id;
        dotWrapper.draggable = true;
        dotWrapper.style.width = '80px';
        dotWrapper.style.height = '80px';
        dotWrapper.style.position = 'relative';
        dotWrapper.style.display = 'inline-block';
        dotWrapper.style.margin = '8px';
        dotWrapper.style.cursor = 'grab';

        const label = document.createElement('div');
        label.textContent = city;
        label.style.textAlign = 'center';
        label.style.fontWeight = 'bold';
        label.style.fontSize = '12px';

        const dot = document.createElement('div');
        dot.dataset.city = city;
        dot.style.width = '20px';
        dot.style.height = '20px';
        dot.style.backgroundColor = 'black';
        dot.style.borderRadius = '50%';
        dot.style.margin = '0 auto';

        const preview = document.createElement('img');
        preview.src = `../static/images/${city}.png`;
        preview.alt = city;
        preview.style.position = 'absolute';
        preview.style.width = '80px';
        preview.style.height = '80px';
        preview.style.left = '110%';
        preview.style.top = '50%';
        preview.style.transform = 'translateY(-50%)';
        preview.style.display = 'none';
        preview.style.border = '1px solid #333';
        preview.style.background = '#fff';
        preview.style.zIndex = '10';

        dotWrapper.appendChild(label);
        dotWrapper.appendChild(dot);
        dotWrapper.appendChild(preview);
        cityListContainer.appendChild(dotWrapper);

        dotWrapper.addEventListener('dragstart', function (ev) {
            ev.dataTransfer.setData("text/plain", dotWrapper.id);
        });

        dotWrapper.addEventListener('mouseenter', () => {
            preview.style.display = 'block';
        });
        dotWrapper.addEventListener('mouseleave', () => {
            preview.style.display = 'none';
        });
    });

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
            const dotWidth = dragged.offsetWidth;
            const dotHeight = dragged.offsetHeight;

            let x = ev.clientX - dropRect.left - dotWidth / 2;
            let y = ev.clientY - dropRect.top - dotHeight / 2;

            x = Math.max(0, Math.min(x, dropRect.width - dotWidth));
            y = Math.max(0, Math.min(y, dropRect.height - dotHeight));

            dragged.style.position = 'absolute';
            dragged.style.left = `${x}px`;
            dragged.style.top = `${y}px`;

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
