var phasethreeroom=["<button id='batman', onclick='initiatep3()'>Start Experiment</button><div id='spiderman' style='display: none;'><div id='Phase3Body'><br><div id='div2'  style='width: 700px; margin: 0 auto; position: relative; bottom: 10%; border: 1px solid #aaaaaa;'><img id='drag01' src='../static/images/Aliance.png' alt='Aliance' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag02' src='../static/images/Boulder.png' alt='Boulder' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag03' src='../static/images/Cornwall.png' alt='Cornwall' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag04' src='../static/images/Custer.png' alt='Custer' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag05' src='../static/images/DelawareCity.png' alt='DelawareCity' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag06' src='../static/images/Medora.png' alt='Medora' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag07' src='../static/images/Newport.png' alt='Newport' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag08' src='../static/images/ParkCity.png' alt='ParkCity' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag09' src='../static/images/Racine.png' alt='Racine' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag10' src='../static/images/Sitka.png' alt='Sitka' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag11' src='../static/images/WestPalmBeach.png' alt='WestPalmBeach' width='100' height='100' draggable='true' ondragstart='drag(event)'><img id='drag12' src='../static/images/Yukon.png' alt='Yukon' width='100' height='100' draggable='true' ondragstart='drag(event)'></div><div id='div1' style='width: 1200px; height: 400px; margin: 0 auto; position: relative; bottom: 10%; border: 1px solid #aaaaaa; background-color: lightgray;'ondrop='drop(event)' ondragover='allowDrop(event)'><img id='imgL' style='position:relative;right:450px;top:35%;border:2px solid blue' width='100' height='100'><img id='imgR' style='position:relative;left:450px;top:35%;border:2px solid blue' width='100' height='100'></div><img id='return' src='../static/images/return.png' style='position: relative;left: 75%;top: 70%;border: 2px solid black' width='50'height='50'></div></div>"]

//PART THAT NEED TO BE RUN UNDER BUTTON
var images = []
var attention=0
var selected=1
var LeftSRC = []
var RightSRC = []
// Select the parent element where the canvas will be added
var container = []
var specificline={}; 
var specificlinenew={};// Variable to hold the specific line
var canvas=[]
var linecounter=0

//function to initita all the necessary varibale
function wassup(){
        //PART THAT NEED TO BE RUN UNDER BUTTON
    images = []
    attention=0
    selected=1
    LeftSRC = []
    RightSRC = []
    // Select the parent element where the canvas will be added
    container = []
    specificline={}; 
    specificlinenew={};// Variable to hold the specific line
    canvas=[]
    linecounter=0
}

function makeVisible() {
    document.getElementById("spiderman").style.display = "block";
}

function initiatep3(){
    makeVisible()
    for (let i = 1; i <= 12; i++) {
        if (i<10){
            images[i-1] = document.getElementById(`drag0${i}`);
        }else{
            images[i-1] = document.getElementById(`drag${i}`)
        }
    }
    LeftSRC = images[Math.floor(Math.random()* images.length)].src
    RightSRC = images[Math.floor(Math.random()* images.length)].src
    while(LeftSRC == RightSRC){ // Making sure the random L and R images are not the same
        var RightSRC = images[Math.floor(Math.random()* images.length)].src
    }
    container = document.getElementById('div1');
    document.getElementById('imgL').src = LeftSRC
    document.getElementById('imgR').src = RightSRC
    for (let i = 1; i <= 12; i++) {
        if (images[i-1].src == LeftSRC || images[i-1].src == RightSRC){
            images[i-1].style="display: none;" // Make them disappear in the top box
        }
    }   
    document.getElementById("batman").style.display = "none"
    //do not need to copy things below there
    for (let i = 1; i <= 12; i++) {
        if (i<10){
            dragElement(document.getElementById(`drag0${i}`));
        }else{
            dragElement(document.getElementById(`drag${i}`));
        }
        }
    returndrag(document.getElementById('return'))
    sideElement(document.getElementById('imgL'))
    sideElement(document.getElementById('imgR'))

} 
//PART THAT NEED TO BE RUN UNDER BUTTON END

function drawLine(img1,img2) {
    // Create a new canvas element
    var canvas = document.createElement('canvas');
    // Set the ID attribute for the canvas
    canvas.id = `${img1.id}`+`${img2.id}`;
    // Append the canvas to the parent container
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    // Set canvas size to match the container
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    canvasname=canvas.id
    // Get image positions and dimensions
    var rect1 = img1.getBoundingClientRect();
    var rect2 = img2.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();

    // Adjust positions relative to the container
    var x1 = rect1.left - containerRect.left + rect1.width / 2;
    var y1 = rect1.top - containerRect.top + rect1.height / 2;
    var x2 = rect2.left - containerRect.left + rect2.width / 2;
    var y2 = rect2.top - containerRect.top + rect2.height / 2;

    // Draw line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';  // Set the line color
    ctx.lineWidth = 2;  // Set the line width
    ctx.stroke();
    // Save the line information]
    specificlinenew=Object.assign({[linecounter]:{location: { x1: x1, y1: y1, x2: x2, y2: y2 },name:[img1.id+img2.id]}})
    specificline=mergeObjects(specificline,specificlinenew)
    linecounter=linecounter+1
}

function dragLine(img1) {
    // Create a new canvas element
    for (i=0;i<=linecounter;i++){
        if (specificline[i]){
            var strings = specificline[i].name
            var substring =img1.id
            if (strings[0].includes(substring)) {
                var canvas = document.getElementById(`${strings[0]}`);
                var remainingPart = strings[0].replace(substring, '') //this is finding the img2
                var img2=document.getElementById(`${remainingPart}`)
                // Append the canvas to the parent container
                container.appendChild(canvas);
                var ctx = canvas.getContext('2d');
                // Set canvas size to match the container
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
                canvasname=canvas.id
                // Get image positions and dimensions
                var rect1 = img1.getBoundingClientRect();
                var rect2 = img2.getBoundingClientRect();
                var containerRect = container.getBoundingClientRect();

                // Adjust positions relative to the container
                var x1 = rect1.left - containerRect.left + rect1.width / 2;
                var y1 = rect1.top - containerRect.top + rect1.height / 2;
                var x2 = rect2.left - containerRect.left + rect2.width / 2;
                var y2 = rect2.top - containerRect.top + rect2.height / 2;

                // Draw line
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = 'black';  // Set the line color
                ctx.lineWidth = 2;  // Set the line width
                ctx.stroke();
                // Save the line information]
                specificlinenew=Object.assign({[i]:{location: { x1: x1, y1: y1, x2: x2, y2: y2 }}})
            }
        }
    }
}

function mergeObjects(target, source) {
    return { ...target, ...source };
}
function clearCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    if (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.remove(); // This will remove the canvas element from the DOM
    }
}

// draw the line end


// Make the IMG element draggable only if it's inside div1
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (elmnt.parentElement.id !== "div1"){
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
        dragLine(elmnt)
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        // Check if the position has changed
        if (elmnt.offsetLeft === initialX && elmnt.offsetTop === initialY) {
            if (attention==1&&selected==elmnt){
                selected.style.border = null
                selected=1
                attention=0
            }else if(attention==1 &&selected!=elmnt){
                var optionone=elmnt.id+selected.id
                var optiontwo=selected.id+elmnt.id
                var checkline=0
                for (i=0;i<=linecounter;i++){
                    if (specificline[i]){
                        if (specificline[i].name==optionone){
                        clearCanvas(optionone)
                        checkline=1
                        removeObjectByKey(specificline,i)
                        }else if(specificline[i].name==optiontwo){
                        clearCanvas(optiontwo)
                        checkline=1
                        removeObjectByKey(specificline,i)
                        }
                    }
                }
                if (checkline==0){
                    drawLine(selected,elmnt)
                }
                elmnt.style.border = null
                selected.style.border = null
                selected=1
                attention=0
            }else{
                if(selected!=1){
                    selected.style.border = null; // Add black stroke
                    elmnt.style.border = null;
                    attention=0
                    selected= 1
                }else if(selected==1){
                    elmnt.style.border = "4px solid black"; // Add black stroke
                    attention=1
                    selected= elmnt
                }
            }
        }
    }
}

// Make the side images be able to have lines but not drag
function sideElement(elmnt) { 
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (elmnt.parentElement.id !== "div1"){
            return;
        }
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        initialX = elmnt.offsetLeft;
        initialY = elmnt.offsetTop;
        document.onmouseup = closeDragElement;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        // Check if the position has changed
        if (elmnt.offsetLeft === initialX && elmnt.offsetTop === initialY) {
            if (attention==1&&selected==elmnt){
                selected.style.border = null
                selected=1
                attention=0
            }else if(attention==1 &&selected!=elmnt){
                var optionone=elmnt.id+selected.id
                var optiontwo=selected.id+elmnt.id
                var checkline=0
                for (i=0;i<=linecounter;i++){
                    if (specificline[i]){
                        if (specificline[i].name==optionone){
                        clearCanvas(optionone)
                        checkline=1
                        removeObjectByKey(specificline,i)
                        }else if(specificline[i].name==optiontwo){
                        clearCanvas(optiontwo)
                        checkline=1
                        removeObjectByKey(specificline,i)
                        }
                    }
                }
                if (checkline==0){
                    drawLine(selected,elmnt)
                }
                elmnt.style.border = null
                selected.style.border = null
                selected=1
                attention=0
            }else{
                if(selected!=1){
                    selected.style.border = null; // Add black stroke
                    elmnt.style.border = null;
                    attention=0
                    selected= 1
                }else if(selected==1){
                    elmnt.style.border = "4px solid black"; // Add black stroke
                    attention=1
                    selected= elmnt
                }
            }
        }
    }
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

    // Calculate the drop position
    var containerRect = container.getBoundingClientRect();
    var dropX = ev.clientX - containerRect.left - (element.offsetWidth / 2);
    var dropY = ev.clientY - containerRect.top - (element.offsetHeight / 2);

    // Ensure the element stays within the container
    if (dropX < 0) dropX = 0;
    if (dropY < 0) dropY = 0;
    if (dropX + element.offsetWidth > containerRect.width) dropX = containerRect.width - element.offsetWidth;
    if (dropY + element.offsetHeight > containerRect.height) dropY = containerRect.height - element.offsetHeight;

    // Set the element's position to where the mouse dropped it
    element.style.position = "absolute";
    element.style.left = dropX + "px";
    element.style.top = dropY + "px";
}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function returndrag(elmnt){
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
    }
    function returnclear(img1){
        var substring =img1.id
        for (i=0;i<=linecounter;i++){
            if (specificline[i]){
                var strings = specificline[i].name
                if (strings[0].includes(substring)) {
                    clearCanvas(strings)
                }
            }
        }
    }
    function closeDragElement() {
        document.onmouseup = null;
        // Check if the position has changed
        if (selected.id !== 'imgL' && selected.id !== 'imgR'){ // Make sure it is not the side images
            if (elmnt.offsetLeft === initialX && elmnt.offsetTop === initialY) {
                if (selected!=1 &&attention==1){
                    returnclear(selected)
                    // If the position hasn't changed, move the element back to div2
                    var originalContainer = document.getElementById("div2");
                    originalContainer.appendChild(selected);
                    selected.style.position = "relative";
                    selected.style.top = "0px";
                    selected.style.left = "0px";
                    selected.style.border = null
                    selected=1
                    attention=0
                }
            }
        }
    }
}
function removeObjectByKey(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
    }
}

