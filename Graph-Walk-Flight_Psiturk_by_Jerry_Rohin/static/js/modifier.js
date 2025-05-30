//debug moode on/off
debugmode= false
if (debugmode==true){
  n_learning_trial=5 //This determine the number of learning trial you want in total
  n_direct_trial=5 //how many direct trial you want
  n_shortest_trial=5 //how many shortest path you want
  n_goaldir_trial=3 //how many goal directed planning you want
}else{
  n_learning_trial=128 //This determine the number of learning trial you want in total
  n_direct_trial=32 //how many direct trial you want
  n_shortest_trial=121 //how many shortest path you want
  n_goaldir_trial=33 //how many goal directed planning you want
}

//warningpage
warning=0 //this is to start the counter of total warning
warning_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5;color:red'>Warning, you are missing too many trials, make sure to press the key '1' when you see a blue cross flash and '2' when you see a green one. If you keep missing trials you will be disqualified.</p>",
checkfail=0 //this is to start the attentioncheck
checkthreshold=2 //this is to add the threshold for attentioncheck

var kickout_record=0
var kickout_total=2
var ac_colortotal=9


// Add custom CSS for buttons dynamically
const style = document.createElement('style');
style.innerHTML = `
  .custom-button {
    background-color: lightgreen; /* Set the background color */
    color: black; /* Set the text color */
    font-size: 20px; /* Make the font size bigger */
    padding: 10px 25px; /* Adjust padding for larger buttons */
    border: none; /* Remove borders */
    border-radius: 5px; /* Add rounded corners */
    cursor: pointer; /* Change cursor to pointer when hovering */
  }
  .custom-button:hover {
    background-color: green; /* Darker green on hover */
    color: white; /* Change text color on hover */
  }
`;
document.head.appendChild(style); // Append the styles to the document head




//Text for instruction
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;margin-bottom:40px'><b>Welcome!</b></p><p style ='font-size: 30px;line-height:1.5'>There is a new airline, AerBorn Airlines, that is offering flights to various destinations. You are a travel agent who is trying to help your clients make their travel arrangements.<br><br>",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Your job is to try and learn the direct flights offered by AerBorn Airlines so you can advise your clients to make their travel plans as efficient as possible. To do this, your supervisor has asked you to study the daily flight paths taken by AerBorn Airlines. </p><br>",
instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>You will be shown two cities, which indicates a direct flight taken by AerBorn Airlines. For example:</p><br /><img src= '../static/images/LosAngeles.png' width='150' height='150' style='margin-right:50px'></img><img src= '../static/images/arrows.png' width='150' height='150'></img><img src= '../static/images/NewYorkCity.png' width='150' height='150' style='margin-left:50px'></img><p></p><br /><p style ='font-size: 30px;line-height:1.5'>indicates that AerBorn Airlines flies directly (nonstop) both from Los Angeles to New York City and New York City to Los Angeles.</p><br>",
instruct_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>You will see a series of these city-pairs and will try to learn as many of them as possible to best advise your future clients for travel. After studying the information, you will be asked to help your clients book travel to various destinations via AerBorn Airlines.</p><br>",
instruct_5="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>While you are studying the flight paths, we will also ask you to do a simple color change task to make sure you are following instructions and paying attention to each trial.</p><br>",
instruct_6="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>While you are learning to remember the flight pairs, you will also see a cross on the center of your screen like the one below:</p><img src= '../static/images/isi.png' width='150' height='150'><p style ='font-size: 30px;line-height:1.5'>To make sure that you are paying attention on each trial, we will have you do a simple color detection task in addition to learning the cities. If the cross flashes <span style='color: blue;'>blue,</span> press the '1' key on your keyboard, if it flashes <span style='color: green;'>green,</span> press '2'.<br><br>Now we will do a short practice on these color changes. You will be unable to advance until you get enough of the color check trials correct.<br><br>",


instructnames = ["instruct_1","instruct_2","instruct_3","instruct_4","instruct_5","instruct_6"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3,instruct_4,instruct_5,instruct_6} // IF you want to add or decrease number of page for instruct, just delete or add var here.

// instruct_dir_1 is for post test learning phase
instruct_dir_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Now that you have studied the various flights offered by AerBorn Airlines, you will be tested on your knowledge of these direct paths. On each trial, you will see a location and will have to select which city you can fly nonstop to via AerBorn Airlines.</p><br>",
instruct_dir_2 = "<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>You will see the starting location on top, and 3 city options below it. Press '1' on your keyboard for the left image, '2' for the middle, and '3' for the right. Please select only the city to which AerBorn Airlines flies to directly (nonstop). Remember to respond as quickly and accurately as possible.</p><br>",
dir_instructnames = ["instruct_dir_1","instruct_dir_2"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1,instruct_dir_2} //same for above

//Text for shortest path instruction
instruct_short_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>In this next portion, you are meeting a series of clients that want to travel using AerBorn Airlines. They are deciding between two destinations to travel to, and they both require layovers to get there. You are tasked with choosing the city that the client can reach in the fewest number of layovers according to the previous flight paths you studied.</p><br />",
instruct_short_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>For example, imagine you studied the following flight paths in the earlier phase: </p><br /><img src= '../static/images/Shortest.png' width='750' height='300'></img><p></p><br />",
instruct_short_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>In this phase, you will see 3 locations you previously studied:</p><img src= '../static/images/shortestIMG.png' width='500' height='300'></img></p><br />"
instruct_short_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>This client will be leaving from the top city (New York City), and wishes to know which out of the two bottom destinations (St. Louis or Detroit) requires fewer layovers.</p><img src= '../static/images/shortestarrow.png' width='600' height='400'<br />"
instruct_short_5="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short1.png' width='1200' height='700'></div>"
instruct_short_6="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short2.png' width='1200' height='700'></div>"
instruct_short_7="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short3.png' width='1200' height='700'></div>"
instruct_short_8="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short4.png' width='1200' height='700'></div>"
instruct_short_9="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short5.png' width='1200' height='700'></div>"
instruct_short_10="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short6.png' width='1200' height='700'></div>"
//instruct_short_5="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/studyinstruction2.png' width='1200' height='600'></div><br /><p style= 'font-size:25px;margin-top:50px'>[press the spacebar to continue]</p>"
instruct_short_11="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Press the '1' key to recommend the city on the LEFT, and the '2' key to recommend the city on the RIGHT. If you are unsure of which destination is better, just try your best to make an educated guess.</p><img src= '../static/images/NewYorkCity.png' width='150' height='150'></img><br /><img src= '../static/images/StLouis.png' width='120' height='150' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='120' height='150'></img><br /><p style ='font-size: 30px;line-height:1.5;margin-top:50px'>Remember, you want to recommend the destination that requires fewer layovers, and please try to respond as quickly and accurately as possible.</p><br />",
short_instructnames = ["instruct_short_1","instruct_short_2","instruct_short_3","instruct_short_4","instruct_short_5","instruct_short_6","instruct_short_7","instruct_short_8","instruct_short_9","instruct_short_10","instruct_short_11"]
short_instruct={instruct_short_1,instruct_short_2,instruct_short_3,instruct_short_4,instruct_short_5,instruct_short_6,instruct_short_7,instruct_short_8,instruct_short_9,instruct_short_10,instruct_short_11} 

//Text for phase 3 instruction
instruct_mem_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>In this next portion, you will help your clients book travel to and from specific locations via AerBorn Airlines. These locations will all require layovers to get to the destination.</p><br />",
instruct_mem_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>You will see a starting location (where your client is located) on the left, and the client's desired destination on the right. </p><br /><img src= '../static/images/StLouis.png' width='120' height='150' style='margin-right:500px'></img><img src= '../static/images/Detroit.png' width='120' height='150'></img><p></p><br /><br><br>",
instruct_mem_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Using your knowledge of the flights offered by AerBorn Airlines, construct a travel plan for each client based on their desired travel destination. The best itinerary is one that minimizes the number of layovers.</p><br />",
instruct_mem_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Fill in the appropriate flights by selecting the intermediate locations that will allow your client to get to their destination. </p><br /><img src= '../static/images/Instruction11.png' width='750' height='150'></img><p></p><br />",
instruct_mem_5="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Click and drag the locations from the top that you wish to place in the gray container as a part of the itinerary. Then, to book a flight click on the two cities and a line will appear connecting them.</p><br />"
instruct_mem_6="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>To remove a flight path, simply click on the two locations again and it will disappear. To remove a city from the itinerary, click on the image and then the return button in the bottom right.</p><br />",
mem_instructnames = ["instruct_mem_1","instruct_mem_2","instruct_mem_3","instruct_mem_4","instruct_mem_5","instruct_mem_6"]
mem_instruct={instruct_mem_1,instruct_mem_2,instruct_mem_3,instruct_mem_4,instruct_mem_5,instruct_mem_6} 

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let survey_questions = `
<form id="survey">

<p>Have you visited any of the cities you learned about in this study?</p>
<p style='font-size: 16px'>If so, please indicate how many times you've visited each city:</p><br>

<label for="city1" style="margin-right: 100px;">${cityNameList[0]}</label>
<input type="number" id="${cityNameList[0]}" name="${cityNameList[0]}" min="0" value="0"><br><br>

<label for="city2" style="margin-right: 100px;">${cityNameList[1]}</label>
<input type="number" id="${cityNameList[1]}" name="${cityNameList[1]}" min="0" value="0"><br><br>

<label for="city3" style="margin-right: 100px;">${cityNameList[2]}</label>
<input type="number" id="${cityNameList[2]}" name="${cityNameList[2]}" min="0" value="0"><br><br>

<label for="city4" style="margin-right: 100px;">${cityNameList[3]}</label>
<input type="number" id="${cityNameList[3]}" name="${cityNameList[3]}" min="0" value="0"><br><br>

<label for="city5" style="margin-right: 100px;">${cityNameList[4]}</label>
<input type="number" id="${cityNameList[4]}" name="${cityNameList[4]}" min="0" value="0"><br><br>

<label for="city6" style="margin-right: 100px;">${cityNameList[5]}</label>
<input type="number" id="${cityNameList[5]}" name="${cityNameList[5]}" min="0" value="0"><br><br>

<label for="city7" style="margin-right: 100px;">${cityNameList[6]}</label>
<input type="number" id="${cityNameList[6]}" name="${cityNameList[6]}" min="0" value="0"><br><br>

<label for="city8" style="margin-right: 100px;">${cityNameList[7]}</label>
<input type="number" id="${cityNameList[7]}" name="${cityNameList[7]}" min="0" value="0"><br><br>

<label for="city9" style="margin-right: 100px;">${cityNameList[8]}</label>
<input type="number" id="${cityNameList[8]}" name="${cityNameList[8]}" min="0" value="0"><br><br>

<label for="city10" style="margin-right: 100px;">${cityNameList[9]}</label>
<input type="number" id="${cityNameList[9]}" name="${cityNameList[9]}" min="0" value="0"><br><br>

<label for="city11" style="margin-right: 100px;">${cityNameList[10]}</label>
<input type="number" id="${cityNameList[10]}" name="${cityNameList[10]}" min="0" value="0"><br><br>

<label for="city12" style="margin-right: 100px;">${cityNameList[11]}</label>
<input type="number" id="${cityNameList[11]}" name="${cityNameList[11]}" min="0" value="0"><br><br>

<label for="city13" style="margin-right: 100px;">${cityNameList[12]}</label>
<input type="number" id="${cityNameList[12]}" name="${cityNameList[12]}" min="0" value="0"><br><br>


<hr>

<p>Which state do you currently live in? How long have you lived in this state (years)?<span style="color: red;">*</span></p>
<textarea id="currentstate" name="currentstate" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>What other states have you lived in, and how many years did you spend in each one?<span style="color: red;">*</span></p>
<textarea id="otherstate" name="otherstate" rows="3" style="width: 70%;" required></textarea>

<hr>


<p>Did the experiment go smoothly or were there problems? (Note: Your compensation will not depend on your answer below, so please be honest!!!) <span style="color: red;">*</span></p>
<label><input type="radio" name="smooth" value="high" required> It went smoothly</label><br>
<label><input type="radio" name="smooth" value="med"> There were minor bumps</label><br>
<label><input type="radio" name="smooth" value="low"> There were significant problems. I don't think my responses should be included in the data.</label>

<hr>

<p>Which of the following problems did you have? <span style="color: red;">*</span></p>
<label><input type="checkbox" name="problems" value="reload"> Sometimes a page wouldn't load and I would have to reload the page</label><br>
<label><input type="checkbox" name="problems" value="connection"> During the experiment I experienced problems with my internet connection</label><br>
<label><input type="checkbox" name="problems" value="none"> none--Everything ran smoothly</label>

<hr>

<p>Were you doing anything else while participating in this study? PLEASE BE HONEST--your compensation will not depend on your answer to this question. <span style="color: red;">*</span></p>
<textarea id="distraction" name="distraction" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Please include any strategies you used to help learn during the task. Please be as specific as possible. <span style="color: red;">*</span></p>
<textarea id="strategies" name="strategies" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Were some routes easier to learn than others? Please explain why in detail if so. <span style="color: red;">*</span></p>
<textarea id="easier" name="easier" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Have you participated in a similar study on another platform? If so, please provide the platform name (Mturk, Prolific, etc.) and your user ID for that platform. <br>PLEASE BE HONEST--your compensation will not depend on your answer to this question. <span style="color: red;">*</span></p>
<textarea id="similar" name="similar" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Is there anything you would like the experimenters to know? For instance, was the task too difficult, boring, etc?</p>
<textarea id="comments" name="comments" rows="3" style="width: 70%;"></textarea>
<br><br></form>`;


//learning phse

// noprefix_imageList=['westpalmbeach.png','newhope.png','boulder.png','peoria.png','gatlinburg.png','shreveport.png','hotsprings.png','carmel.png','huntsville.png','racine.png','leesburg.png','cornwall.png','hanover.png'] // change last one

// let unshuffled_imageList = noprefix_imageList.map(filename => {
//   let prefix = Math.random() < 0.5 ? 'US_Cities_List/mm_' : 'US_Cities_List/nat_';
//   return prefix + filename;
// });

// let unshuffled_cityNameList=['West Palm Beach','New Hope','Boulder','Peoria','Gatlinburg','Shreveport','Hot Springs','Carmel','Huntsville','Racine','Leesburg','Cornwall','Hanover']

// let city_arr = [];
// for (let i = 0;i<unshuffled_cityNameList.length;i++){
//   city_arr.push(i)
// }
// let list_images = []
// let cityNameList = []
// shuffle(city_arr)
// for (let i = 0;i<unshuffled_cityNameList.length;i++){
//   list_images.push(unshuffled_imageList[city_arr[i]])
//   cityNameList.push(unshuffled_cityNameList[city_arr[i]])
// }

let imageList = list_images



imageIndex= [[0,1], [1,2], [1,3], [2,10], [2,5], [3,4], [3,11], [5,6], [5,8], [6,7], [6,8], [6,12], [7,8], [7,9], [8,10], [10,11]]

list_left=[imageList[imageIndex[0][0]],imageList[imageIndex[1][0]],imageList[imageIndex[2][0]],imageList[imageIndex[3][0]],imageList[imageIndex[4][0]],imageList[imageIndex[5][0]],imageList[imageIndex[6][0]],imageList[imageIndex[7][0]],imageList[imageIndex[8][0]],imageList[imageIndex[9][0]],imageList[imageIndex[10][0]],imageList[imageIndex[11][0]],imageList[imageIndex[12][0]],imageList[imageIndex[13][0]],imageList[imageIndex[14][0]],imageList[imageIndex[15][0]]]
list_right=[imageList[imageIndex[0][1]],imageList[imageIndex[1][1]],imageList[imageIndex[2][1]],imageList[imageIndex[3][1]],imageList[imageIndex[4][1]],imageList[imageIndex[5][1]],imageList[imageIndex[6][1]],imageList[imageIndex[7][1]],imageList[imageIndex[8][1]],imageList[imageIndex[9][1]],imageList[imageIndex[10][1]],imageList[imageIndex[11][1]],imageList[imageIndex[12][1]],imageList[imageIndex[13][1]],imageList[imageIndex[14][1]],imageList[imageIndex[15][1]]]
learn_left=[]
learn_right=[]

let arr = [];
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 8; j++) {
    arr.push(i);
  }
}

function ensureNoConsecutiveDuplicates(arr) {
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
          for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] !== arr[i] && arr[j - 1] !== arr[i]) {
                  [arr[i], arr[j]] = [arr[j], arr[i]];
                  break;
              }
          }
      }
  }
  return arr;
}


let randomizedArray = shuffle(arr);

randomizedArray = ensureNoConsecutiveDuplicates(randomizedArray)

for (var i = 0; i < randomizedArray.length; i++){
    learn_left.push(list_left[randomizedArray[i]])
    learn_right.push(list_right[randomizedArray[i]])
}

var correctNode = []
var correctDirectNodes = 0
var shortDirectNodes = 0
var farDirectNodes = 0

// Graph object
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  displayGraph() {
    console.log(this.adjacencyList);
  }

    // Function to find nodes that are directly connected to the center node (1 edge apart)
  getDirectNeighbors(centerNode) {
    return this.adjacencyList[centerNode] || [];
  }

  getSingleDirectNeighbor() {
    const nodeIndexMap = new Map();
    return (centerNode) => {
        const neighbors = this.adjacencyList[centerNode] || [];
        if (neighbors.length === 0) return null;
        if (!nodeIndexMap.has(centerNode)) {
            nodeIndexMap.set(centerNode, 0);
        }
        let index = nodeIndexMap.get(centerNode);
        const neighbor = neighbors[index];
        nodeIndexMap.set(centerNode, (index + 1) % neighbors.length);
        return neighbor;
    };
}

  initTriplet() {
      this.correctNodefunc = this.getSingleDirectNeighbor();
  }

  cycleThroughNeighbors(node) {
      const nextNeighbor = this.correctNodefunc(node);
      return nextNeighbor
  } 


  // Function to find all nodes that are not directly connected to the center node
  getNonDirectNeighbors(centerNode) {
    const directNeighbors = new Set(this.getDirectNeighbors(centerNode));
    const allNodes = Object.keys(this.adjacencyList).map(Number);

    // Non-direct neighbors are all nodes that are not direct neighbors and not the centerNode itself
    const nonDirectNeighbors = allNodes.filter(node => !directNeighbors.has(node) && node !== centerNode);
    
    return nonDirectNeighbors;
  }

  getNeighborsAtDistance(centerNode, distance) {
    // If distance is 0, return only the centerNode itself
    if (distance === 0) {
      return [centerNode];
    }

    // Initialize sets and queues for BFS
    const visited = new Set([centerNode]);  // Track visited nodes to avoid cycles
    const queue = [[centerNode, 0]];  // Queue for BFS, stores pairs [node, currentDistance]
    const result = new Set();  // Store the nodes found at the desired distance

    // BFS loop
    while (queue.length > 0) {
      const [currentNode, currentDistance] = queue.shift();

      // Get neighbors of the current node
      const neighbors = this.getDirectNeighbors(currentNode);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);

          // If we reached the desired distance, add the node to result
          if (currentDistance + 1 === distance) {
            result.add(neighbor);
          }

          // If still under the desired distance, keep exploring
          if (currentDistance + 1 < distance) {
            queue.push([neighbor, currentDistance + 1]);
          }
        }
      }
    }

    return Array.from(result);  // Return the neighbors found at the specified distance
}
  // Function to generate a triplet [directNeighbor, centerNode, randomNonDirectNeighbor]
  getTriplet(centerNode) {
    const directNeighbors = this.getDirectNeighbors(centerNode);
    const nonDirectNeighbors = this.getNonDirectNeighbors(centerNode);
    const shorterNeighbor = this.getNeighborsAtDistance(centerNode,2)
    const furtherNeighbor = this.getNeighborsAtDistance(centerNode,3).concat(this.getNeighborsAtDistance(centerNode,4))
    if (directNeighbors.length === 0 || nonDirectNeighbors.length === 0) {
      return null; // Return null if no valid triplet can be found
    }

    // Select a random direct neighbor (1 edge apart)

    const correctNodeOption = this.cycleThroughNeighbors(centerNode)

    // Select a random non-direct neighbor (not directly connected)
    const shorterNode = shorterNeighbor[Math.floor(Math.random() * shorterNeighbor.length)];
    const furtherNode = furtherNeighbor[Math.floor(Math.random() * furtherNeighbor.length)]
    while(furtherNode == shorterNode){
      furtherNode = furtherNeighbor[Math.floor(Math.random() * furtherNeighbor.length)]
    }
    
   
    if(Math.floor(Math.random() * 3 + 1) == 1) {
      directNodes = [correctNodeOption, centerNode, furtherNode, shorterNode]
    }else if (Math.floor(Math.random() * 3 + 1) == 2){
      directNodes = [shorterNode, centerNode, correctNodeOption, furtherNode];
    } else{
      directNodes = [furtherNode, centerNode, shorterNode, correctNodeOption]
    }
    correctDirectNodes = correctNodeOption
    shortDirectNodes = shorterNode
    farDirectNodes = furtherNode
  }

  // Helper function to perform BFS and find all nodes k edges apart from the starting node
  findNodesKEdgesApart(start, k) {
    const queue = [[start, 0]];  // [vertex, distance]
    const visited = new Set();
    visited.add(start);
    const result = new Set();

    while (queue.length > 0) {
      const [vertex, distance] = queue.shift();

      // If we've reached the distance k, add this vertex
      if (distance === k) {
        result.add(vertex);
      }

      // If we haven't reached k edges yet, continue exploring neighbors
      if (distance < k) {
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 1]);
          }
        });
      }
    }

    return Array.from(result); // Return the nodes that are k edges apart from the start
  }

  // Function to find triplets where one node is leftK edges away and another node is rightK edges away from the center node
  getCustomTriplets(leftK, rightK) {
    const triplets = [];

    for (const centerNode in this.adjacencyList) {
      const nodesLeftKEdgesApart = this.findNodesKEdgesApart(parseInt(centerNode), leftK);
      const nodesRightKEdgesApart = this.findNodesKEdgesApart(parseInt(centerNode), rightK);

      // Create triplets [nodeLeftK, centerNode, nodeRightK]
      nodesLeftKEdgesApart.forEach((nodeLeft) => {
        nodesRightKEdgesApart.forEach((nodeRight) => {
          if (Math.floor(Math.random() * 2 + 1) == 1){
          triplets.push([nodeLeft, parseInt(centerNode), nodeRight]);
          } else {triplets.push([nodeRight, parseInt(centerNode), nodeLeft])}
          correctNode.push(nodeLeft)
        });
      });
    }

    return triplets;
  }
  
  getPairsKEdgesApart(k) {
    const pairs = new Set();

    // Helper function to perform BFS and find vertices k edges apart
    const bfs = (start) => {
      const queue = [[start, 0]];  // [vertex, distance]
      const visited = new Set();
      visited.add(start);

      while (queue.length) {
        const [vertex, distance] = queue.shift();

        // If we've reached the distance k, add the pair to the set
        if (distance === k) {
          const pair = [Math.min(start, vertex), Math.max(start, vertex)];
          pairs.add(pair.toString());
          continue;
        }

        // If not at distance k, explore neighbors
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 1]);
          }
        });
      }
    };

    // Perform BFS from each vertex
    for (const vertex in this.adjacencyList) {
      bfs(parseInt(vertex));
    }

    // Convert the set back into an array of pairs
    return Array.from(pairs).map(pair => pair.split(',').map(Number));
  }
}

// Initialize the graph
const graph = new Graph();
for (let i = 1; i < 14; i++) {
  graph.addVertex(i);
}

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 11);
graph.addEdge(3, 6);
graph.addEdge(4, 5);
graph.addEdge(4, 12);
graph.addEdge(6, 7);
graph.addEdge(6, 9);
graph.addEdge(7, 8);
graph.addEdge(7, 9);
graph.addEdge(7, 13);
graph.addEdge(8, 9);
graph.addEdge(8, 10);
graph.addEdge(9, 11);
graph.addEdge(11, 12);

// graph.displayGraph();

//Direct Memory phase
graph.initTriplet()
let directRight = []
let directMid = []
let directLeft = []
let directUp = []
let directCorrect = []
let directShort = []
let directFar = []
var directNodes = 0

for(let i = 1;i<14;i++){
  for(let j = 0;j<graph.getDirectNeighbors(i).length;j++){
    graph.getTriplet(i)
    directLeft.push(directNodes[0])
    directUp.push(directNodes[1])
    directMid.push(directNodes[2])
    directRight.push(directNodes[3])
    directCorrect.push(correctDirectNodes)
    directShort.push(shortDirectNodes)
    directFar.push(farDirectNodes)
  }
  
}

// Generate directarr as before
let directarr = [];
for (let i = 0; i < directLeft.length; i++) {
  directarr.push(i);
}
directarr = shuffle(directarr);
directarr = shuffle(directarr);
directarr = shuffle(directarr);

// Apply back-to-back constraints with reordering
let ordered_directarr = [];
let dirprevUp = null;
let dirprevCorrect = null;

for (let i = 0; i < directarr.length; i++) {
  let foundValid = false;

  for (let j = i; j < directarr.length; j++) {
    let idx = directarr[j];
    let up = directUp[idx];
    let correct = directCorrect[idx];

    // Constraint checks
    if (
      up === dirprevUp ||
      correct === dirprevCorrect ||
      up === dirprevCorrect ||
      correct === dirprevUp
    ) {
      continue;
    }

    // Swap valid trial to position i
    if (i !== j) {
      [directarr[i], directarr[j]] = [directarr[j], directarr[i]];
    }

    ordered_directarr.push(directarr[i]);
    dirprevUp = up;
    dirprevCorrect = correct;
    foundValid = true;
    break;
  }

  if (!foundValid) {
    console.warn(`Could not find a valid trial for position ${i}.`);
    break;
  }
}

// Now build room_direct arrays using ordered_directarr
let room_direct_left = [];
let room_direct_mid = [];
let room_direct_right = [];
let room_direct_up = [];
let room_direct_correct = [];
let room_direct_far = [];
let room_direct_short = [];

for (let i = 0; i < ordered_directarr.length; i++) {
  let idx = ordered_directarr[i];
  room_direct_up.push(imageList[directUp[idx] - 1]);
  room_direct_left.push(imageList[directLeft[idx] - 1]);
  room_direct_right.push(imageList[directRight[idx] - 1]);
  room_direct_mid.push(imageList[directMid[idx] - 1]);
  room_direct_correct.push(imageList[directCorrect[idx] - 1]);
  room_direct_short.push(imageList[directShort[idx] - 1]);
  room_direct_far.push(imageList[directFar[idx] - 1]);
}

//Shoretst Path judge phase

// One distance diff (Hard)
twothree = graph.getCustomTriplets(2,3)
let twothreecorrect = correctNode
correctNode = []
threefour = graph.getCustomTriplets(3,4)
let threefourcorrect = correctNode
correctNode = []
fourfive = graph.getCustomTriplets(4,5)
let fourfivecorrect = correctNode
correctNode = []
fivesix = graph.getCustomTriplets(5,6)
let fivesixcorrect = correctNode
correctNode = []

let onediff = twothree.concat(threefour,fourfive)

// Two distance diff (Medium)
twofour = graph.getCustomTriplets(2,4)
let twofourcorrect = correctNode
correctNode = []
threefive = graph.getCustomTriplets(3,5)
let threefivecorrect = correctNode
correctNode = []
let foursix = graph.getCustomTriplets(4,6)
let foursixcorrect = correctNode
correctNode = []

let twodiff = twofour.concat(threefive)

// Three distance diff (Easy)
twofive = graph.getCustomTriplets(2,5)
let twofivecorrect = correctNode
correctNode = []
threesix = graph.getCustomTriplets(2,5)
let threesixcorrect = correctNode
correctNode = []

let threediff = twofive.concat(threesix)

// Four distance diff (Very Easy)
twosix = graph.getCustomTriplets(2,6)
twosixcorrect = correctNode
correctNode = []

let fourdiff = twosix

//

function makeShuffledArray(length) {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let twothree_arr = makeShuffledArray(twothree.length);
let threefour_arr = makeShuffledArray(threefour.length);
let fourfive_arr = makeShuffledArray(fourfive.length);
let fivesix_arr = makeShuffledArray(fivesix.length);

let twofour_arr = makeShuffledArray(twofour.length);
let threefive_arr = makeShuffledArray(threefive.length);
let foursix_arr = makeShuffledArray(foursix.length);

let twofive_arr = makeShuffledArray(twofive.length);
let threesix_arr = makeShuffledArray(threesix.length);

let twosix_arr = makeShuffledArray(twosix.length);


let shuffled_twothree = []
let shuffled_threefour = []
let shuffled_fourfive = []
let shuffled_fivesix = []

let shuffled_twofour = []
let shuffled_threefive = []
let shuffled_foursix = []

let shuffled_twofive = []
let shuffled_threesix = []

let shuffled_twosix = []


let shuffled_twothree_correct = []
let shuffled_threefour_correct = []
let shuffled_fourfive_correct = []
let shuffled_fivesix_correct = []

let shuffled_twofour_correct = []
let shuffled_threefive_correct = []
let shuffled_foursix_correct = []

let shuffled_twofive_correct = []
let shuffled_threesix_correct = []

let shuffled_twosix_correct = []


let combined_arr = []

for (let i = 0;i < 12;i++){
  shuffled_twothree.push(twothree[twothree_arr[i]])
  shuffled_twothree_correct.push(twothreecorrect[twothree_arr[i]])
  combined_arr.push(i)

  shuffled_threefour.push(threefour[threefour_arr[i]]);
  shuffled_threefour_correct.push(threefourcorrect[threefour_arr[i]]);
  combined_arr.push(i+12);

  shuffled_fourfive.push(fourfive[fourfive_arr[i]]);
  shuffled_fourfive_correct.push(fourfivecorrect[fourfive_arr[i]]);
  combined_arr.push(i+24);

  shuffled_fivesix.push(fivesix[fivesix_arr[i]]);
  shuffled_fivesix_correct.push(fivesixcorrect[fivesix_arr[i]]);
  combined_arr.push(i+36);
}

for (let i = 0; i < 12; i++) {
  shuffled_twofour.push(twofour[twofour_arr[i]]);
  shuffled_twofour_correct.push(twofourcorrect[twofour_arr[i]]);
  combined_arr.push(i+48);

  shuffled_threefive.push(threefive[threefive_arr[i]]);
  shuffled_threefive_correct.push(threefivecorrect[threefive_arr[i]]);
  combined_arr.push(i+60);

  shuffled_foursix.push(foursix[foursix_arr[i]]);
  shuffled_foursix_correct.push(foursixcorrect[foursix_arr[i]]);
  combined_arr.push(i+72);
}

for (let i = 0; i < 12; i++) {
  shuffled_twofive.push(twofive[twofive_arr[i]]);
  shuffled_twofive_correct.push(twofivecorrect[twofive_arr[i]]);
  combined_arr.push(i+84);

  shuffled_threesix.push(threesix[threesix_arr[i]]);
  shuffled_threesix_correct.push(threesixcorrect[threesix_arr[i]]);
  combined_arr.push(i+96);
}

for (let i = 0; i < 13; i++) {
  shuffled_twosix.push(twosix[twosix_arr[i]]);
  shuffled_twosix_correct.push(twosixcorrect[twosix_arr[i]]);
  combined_arr.push(i+108);
}

let cumulativediff = shuffled_twothree
.concat(shuffled_threefour)
.concat(shuffled_fourfive)
.concat(shuffled_fivesix)
.concat(shuffled_twofour)
.concat(shuffled_threefive)
.concat(shuffled_foursix)
.concat(shuffled_twofive)
.concat(shuffled_threesix)
.concat(shuffled_twosix);

let cumulativeCorrect = shuffled_twothree_correct
.concat(shuffled_threefour_correct)
.concat(shuffled_fourfive_correct)
.concat(shuffled_fivesix_correct)
.concat(shuffled_twofour_correct)
.concat(shuffled_threefive_correct)
.concat(shuffled_foursix_correct)
.concat(shuffled_twofive_correct)
.concat(shuffled_threesix_correct)
.concat(shuffled_twosix_correct);

// Step 1: Shuffle initial index list
let cumulativearr = [];
for (let i = 0; i < cumulativediff.length; i++) {
  cumulativearr.push(i);
}
cumulativearr = shuffle(cumulativearr);

// Step 2: Enforce constraints by reordering (swap-based)
let ordered_shortestarr = [];
let prevUp = null;
let prevCorrect = null;

for (let i = 0; i < cumulativearr.length; i++) {
  let foundValid = false;

  for (let j = i; j < cumulativearr.length; j++) {
    let trialIndex = cumulativearr[j];
    let top = cumulativediff[trialIndex][1];
    let correct = cumulativeCorrect[trialIndex];

    if (
      top === prevUp ||
      correct === prevCorrect ||
      correct === prevUp ||
      top === prevCorrect
    ) {
      continue;
    }

    // Swap valid trial to position i
    if (i !== j) {
      [cumulativearr[i], cumulativearr[j]] = [cumulativearr[j], cumulativearr[i]];
    }

    ordered_shortestarr.push(cumulativearr[i]);
    prevUp = top;
    prevCorrect = correct;
    foundValid = true;
    break;
  }

  if (!foundValid) {
    console.warn(`⚠️ Could not find valid trial for position ${i} under current constraints.`);
    break;
  }
}

// Step 3: Build final arrays using ordered_shortestarr
let upList = [];
let leftList = [];
let rightList = [];
let correctShortList = [];
let sorted_combined_arr = [];

for (let i = 0; i < ordered_shortestarr.length; i++) {
  let trialIndex = ordered_shortestarr[i];
  upList.push(cumulativediff[trialIndex][1]);
  leftList.push(cumulativediff[trialIndex][0]);
  rightList.push(cumulativediff[trialIndex][2]);
  correctShortList.push(cumulativeCorrect[trialIndex]);
  sorted_combined_arr.push(combined_arr[trialIndex]);
}

// Step 4: Convert to image paths
let room_shortest_up = upList.map(i => imageList[i - 1]);
let room_shortest_left = leftList.map(i => imageList[i - 1]);
let room_shortest_right = rightList.map(i => imageList[i - 1]);
let room_shortest_correct = correctShortList.map(i => imageList[i - 1]);


//Goal Directed Navigation:
var room_goaldir_left = []
var room_goaldir_right = []


function selectBestCoveragePairs(graph, pairs, count, trials = 100) {
    const allNodes = Object.keys(graph.adjacencyList).map(Number);
    const allNodesSet = new Set(allNodes);
    let bestSelection = [];
    let maxCovered = 0;

    for (let t = 0; t < trials; t++) {
        const shuffled = pairs.slice();
        const selected = [];
        const usedNodes = new Set();
        const coveredNodes = new Set();

        // Shuffle the candidate pairs
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        for (let [u, v] of shuffled) {
            const path = getShortestPath(graph, u, v);
            if (!path) continue;

            const newNodes = path.filter(n => !coveredNodes.has(n));

            const canAdd =
                selected.length < count &&
                (
                    !usedNodes.has(u) && !usedNodes.has(v)
                    || coveredNodes.size === allNodes.length
                );

            if (canAdd) {
                selected.push([u, v]);
                usedNodes.add(u);
                usedNodes.add(v);
                newNodes.forEach(n => coveredNodes.add(n));
            }

            if (selected.length === count) break;
        }

        if (selected.length === count && coveredNodes.size >= maxCovered) {
            bestSelection = selected;
            maxCovered = coveredNodes.size;

            if (maxCovered === allNodes.length) break; // early stop if all covered
        }
    }

    return bestSelection;
}


function selectUniquePairsWithFullCoverage(graph, pairs, count, maxRetries = 100) {
    const allNodes = Object.keys(graph.adjacencyList).map(Number);
    let attempt = 0;

    while (attempt < maxRetries) {
        const shuffled = pairs.slice();
        const selected = [];
        const usedNodes = new Set();
        const coveredNodes = new Set();

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        for (let [u, v] of shuffled) {
            if (usedNodes.has(u) || usedNodes.has(v)) continue;

            const path = getShortestPath(graph, u, v);
            if (!path) continue;

            const newNodes = path.filter(n => !coveredNodes.has(n));
            if (newNodes.length > 0) {
                selected.push([u, v]);
                usedNodes.add(u);
                usedNodes.add(v);
                newNodes.forEach(n => coveredNodes.add(n));
            }

            if (selected.length === count) break;
        }

        const isFullyCovered = allNodes.every(n => coveredNodes.has(n));
        if (selected.length === count && isFullyCovered) {
            return selected;
        }

        attempt++;
    }

    return []; // fallback to empty
}

function getShortestPath(graph, start, goal) {
    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (node === goal) return path;

        for (let neighbor of graph.getDirectNeighbors(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}


// Select 4 unique pairs for distances 2–5, and 3 for distance 6
let selectedPairs = {
    2: selectBestCoveragePairs(graph, graph.getPairsKEdgesApart(2), 9), // fallback if needed
    3: selectBestCoveragePairs(graph, graph.getPairsKEdgesApart(3), 9), // fallback if needed
    4: selectBestCoveragePairs(graph, graph.getPairsKEdgesApart(4), 6), // fallback if needed
    5: selectBestCoveragePairs(graph, graph.getPairsKEdgesApart(5), 6), // fallback if needed
    6:  graph.getPairsKEdgesApart(6)
};


let twoEdgePair = selectedPairs[2]
let threeEdgePair = selectedPairs[3]
let fourEdgePair = selectedPairs[4]
let fiveEdgePair = selectedPairs[5]
let sixEdgePair = selectedPairs[6]

let unshuff_goaldirIndex = []
// Flatten all pairs into one list
let allSelectedPairs = []
for (let dist = 2; dist <= 6; dist++) {
    allSelectedPairs = allSelectedPairs.concat(selectedPairs[dist]);
}
for (let i = 0; i < allSelectedPairs.length; i++) {
unshuff_goaldirIndex.push(i)
}
// Shuffle the combined list
for (let i = allSelectedPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allSelectedPairs[i], allSelectedPairs[j]] = [allSelectedPairs[j], allSelectedPairs[i]];
    [unshuff_goaldirIndex[i],unshuff_goaldirIndex[j]] = [unshuff_goaldirIndex[j],unshuff_goaldirIndex[i]]
}

let goaldirIndex = []
for (let i = 0; i<allSelectedPairs.length; i++){
  room_goaldir_left.push(allSelectedPairs[i][0])
  room_goaldir_right.push(allSelectedPairs[i][1])
  goaldirIndex.push(unshuff_goaldirIndex[i])
}

//color for the plus sign
atcheckcolor=['blue','green']

//determinant for the time for the flash color
function colorStart(){
    colordetretime= Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
    return colordetretime
}

//time for the duration of the color being present
function colorStop(colordetretime){
    removecolor= 1500-colordetretime-100;
    return removecolor
}


//randomDelay for Direct Memory Test and Shortest Path Judgement
var randomDelay = Math.floor(Math.random() * (1500 - 100 + 1)) + 100;
