var phasethreeroom=["<button id='batman', onclick='initiatep3()'>Start Experiment</button><div id='spiderman' style='display: none;'><div id='Phase3Body'><br><div id='div2'  style='width: 700px; margin: 0 auto; position: relative; bottom: 10%; border: 1px solid #aaaaaa;'><img id='drag1' src='../static/images/Aliance.png' alt='Aliance' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag2' src='../static/images/Boulder.png' alt='Boulder' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag3' src='../static/images/Cornwall.png' alt='Cornwall' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag4' src='../static/images/Custer.png' alt='Custer' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag5' src='../static/images/DelawareCity.png' alt='DelawareCity' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag6' src='../static/images/Medora.png' alt='Medora' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag7' src='../static/images/Newport.png' alt='Newport' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag8' src='../static/images/ParkCity.png' alt='ParkCity' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag9' src='../static/images/Racine.png' alt='Racine' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag10' src='../static/images/Sitka.png' alt='Sitka' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag11' src='../static/images/WestPalmBeach.png' alt='WestPalmBeach' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag12' src='../static/images/Yukon.png' alt='Yukon' width='100' height='100' draggable='true' ondragstart='drag(event)'></div><div id='div1' style='width: 1200px; height: 400px; margin: 0 auto; position: relative; bottom: 10%; border: 1px solid #aaaaaa; background-color: lightgray;'ondrop='drop(event)' ondragover='allowDrop(event)'><img id='imgL' style='position:relative;right:450px;top:35%;border:2px solid purple' src='../static/images/Boulder.png' width='100' height='100'><img id='imgR' style='position:relative;left:450px;top:35%;border:2px solid purple' src='../static/images/Cornwall.png' width='100' height='100'></div></div></div>"]


// Make the IMG element draggable only if it's inside div1
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (elmnt.parentElement.id !== "div1") {
            return;
        }
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        initialX = elmnt.offsetLeft;
        initialY = elmnt.offsetTop;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Calculate new position
        var newTop = elmnt.offsetTop - pos2;
        var newLeft = elmnt.offsetLeft - pos1;

        // Get boundaries of the container
        var container = document.getElementById("div1");
        var rect = container.getBoundingClientRect();

        // Ensure the element stays within the container
        if (newTop < 0) newTop = 0;
        if (newLeft < 0) newLeft = 0;
        if (newTop + elmnt.offsetHeight > rect.height) newTop = rect.height - elmnt.offsetHeight;
        if (newLeft + elmnt.offsetWidth > rect.width) newLeft = rect.width - elmnt.offsetWidth;

        // Set the element's new position
        elmnt.style.top = newTop + "px";
        elmnt.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        // Check if the position has changed
        if (elmnt.offsetLeft === initialX && elmnt.offsetTop === initialY) {
            // If the position hasn't changed, move the element back to div2
            var originalContainer = document.getElementById("div2");
            originalContainer.appendChild(elmnt);
            elmnt.style.position = "relative";
            elmnt.style.top = "0px";
            elmnt.style.left = "0px";
        }
    }
}
function initiatep3(){
    makeVisible()
    for (let i = 1; i <= 12; i++) {
        dragElement(document.getElementById(`drag${i}`));
    }
    document.getElementById("batman").style.display = "none"
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var element = document.getElementById(data);
    var container = document.getElementById("div1");

    // Append the element to the drop area
    container.appendChild(element);

    // Calculate the center position
    var containerRect = container.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var centerX = (containerRect.width - elementRect.width) / 2;
    var centerY = (containerRect.height - elementRect.height) / 2;

    // Set the element's position to the center
    element.style.position = "absolute";
    element.style.left = centerX + "px";
    element.style.top = centerY + "px";
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function makeVisible() {
    document.getElementById("spiderman").style.display = "block";
}

