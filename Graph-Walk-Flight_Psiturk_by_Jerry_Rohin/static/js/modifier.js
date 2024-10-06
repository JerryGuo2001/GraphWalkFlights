//debug moode on/off
debugmode= true
if (debugmode==true){
  n_learning_trial=1 //This determine the number of learning trial you want in total
  n_direct_trial=1 //how many direct trial you want
  n_shortest_trial=1 //how many shortest path you want
  n_goaldir_trial=2 //how many goal directed planning you want
}else{
  n_learning_trial=10 //This determine the number of learning trial you want in total
  n_direct_trial=10 //how many direct trial you want
  n_shortest_trial=10 //how many shortest path you want
  n_goaldir_trial=1 //how many goal directed planning you want
}

//warningpage
warning=0 //this is to start the counter of total warning
warning_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5;color:red'>Warning, you are missing too many trials, make sure to press the key '1' when you see a blue cross flash and '2' when you see a green one. If you keep missing trials you will be disqualified.</p>",
checkfail=0 //this is to start the attentioncheck
checkthreshold=2 //this is to add the threshold for attentioncheck

//Text for instruction
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;margin-bottom:40px'><b>Welcome!</b></p><p style ='font-size: 50px;line-height:1.5'>There is a new airline, AerBorn Airlines, that is offering flights to various destinations. You are a travel agent who is trying to help your clients make various travel arrangements.<p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Your job is to try and learn as many direct flights offered by AerBorn Airlines as possible so you could advise your clients to make their travel plans as efficiently as possible. To do this, your supervisor has asked you to study the daily flight paths taken by AerBorn Airlines. </p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will be shown two cities, which indicates a direct flight taken by AerBorn Airlines. For example:</p><br /><img src= '../static/images/LosAngeles.png' width='150' height='150' style='margin-right:200px'></img><img src= '../static/images/NewYorkCity.png' width='150' height='150'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>indicates that AerBorn Airlines flew directly (nonstop) from Los Angeles to New York City</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will see a series of these city-pairs and will try to learn as many of them as possible to best advise your future clients for travel. After studying the information, you will be asked to help your clients book travel to various destinations via AerBorn Airlines.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_5="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>First, you will see a series of practice images before moving on to the next task</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_6="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>While you are studying the flight paths, we will also ask you to do a simple color change task to make sure you are following instructions and paying attention to each trial.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_7="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>To make sure that you are paying attention on each trial, you will see a cross on the center of your screen like the one below:</p><img src= '../static/images/isi.png' width='150' height='150'><p style ='font-size: 50px;line-height:1.5'>If the cross flashes <span style='color: blue;'>blue,</span> press the '1' key on your keyboard, if it flashes <span style='color: green;'>green,</span> press '2'.<p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_8="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Please make sure to respond to every trial, as too many missed trials will disqualify you from participating. Only the first response will be taken, and please try to respond as quickly and as accurately as possible.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",

instructnames = ["instruct_1","instruct_2","instruct_3","instruct_4","instruct_5","instruct_6","instruct_7","instruct_8"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3,instruct_4,instruct_5,instruct_6,instruct_7,instruct_8} // IF you want to add or decrease number of page for instruct, just delete or add var here.


//Text for direct memory instruction
instruct_dir_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Great! We will move on to the main task now, remember to memorize the city-pairings to the best of your ability.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Now that you have studied the various flights offered by AerBorn Airlines, you will be tested on your knowledge of what you just studied. On each trial, you will see a location and will have to select which city you can fly nonstop to via AerBorn Airlines.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_3 = "<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will see the starting location on top, and 3 city options below it. Press '1' on your keyboard for the left image, '2' for the middle, and '3' for the right. Please select only the city to which AerBorn Airlines flies directly (nonstop).</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
dir_instructnames = ["instruct_dir_1","instruct_dir_2","instruct_dir_3"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1,instruct_dir_2,instruct_dir_3} //same for above

//Text for shortest path instruction
instruct_short_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>In this next portion, you will be meeting with various clients who are looking for recommendations for travel. On each trial, you will see 3 locations:</p><img src= '../static/images/NewYorkCity.png' width='150' height='150'></img><br /><img src= '../static/images/StLouis.png' width='120' height='150' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='120' height='150'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_short_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>The top city is where your client is located. You want to recommend a vacation destination that will require the fewest number of layovers (stops) from where the client is located. </p><img src= '../static/images/NewYorkCity.png' width='150' height='150'></img><br /><img src= '../static/images/StLouis.png' width='120' height='150' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='120' height='150'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_short_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>For example, if you studied the following flight paths starting from New York: </p><br /><img src= '../static/images/Instruction8.png' width='750' height='300'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>You should recommend flying to Detroit, since it requires fewer layovers from your client's location ( NYC > LA > Detroit, vs. NYC > ... > Austin > St. Louis) </p><p style= 'font-size:25px;margin-top:50px'>[press the spacebar to continue]</p>",
instruct_short_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Press the '1' key to recommend the city on the LEFT, and the '2' key to recommend the city on the RIGHT. If you are unsure of which destination is better, just try your best to make an educated guess.</p><img src= '../static/images/NewYorkCity.png' width='150' height='150'></img><br /><img src= '../static/images/StLouis.png' width='120' height='150' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='120' height='150'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
short_instructnames = ["instruct_short_1","instruct_short_2","instruct_short_3","instruct_short_4"]
short_instruct={instruct_short_1,instruct_short_2,instruct_short_3,instruct_short_4} 

//Text for phase 3 instruction
instruct_mem_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>In this next portion, you will help your clients book travel to and from specific locations via AerBorn Airlines.</p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_mem_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will see a starting location (where your client is located) on the left, and the client's desired destination on the right. </p><br /><img src= '../static/images/StLouis.png' width='120' height='150' style='margin-right:500px'></img><img src= '../static/images/Detroit.png' width='120' height='150'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_mem_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Using your knowledge of the flights offered by AerBorn Airlines, construct a travel plan for each client based on their desired travel destination. The best itinerary is one that minimizes the number of layovers.</p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_mem_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Fill in the appropriate flights by selecting the intermediate locations that will allow your client to get to their destination. </p><br /><img src= '../static/images/Instruction11.png' width='750' height='150'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_mem_5="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Click and drag the locations from the top that you wish to place in the gray container as a part of the itinerary. Then, to chart the flight click on the two cities and a line will appear connecting them.</p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>"
instruct_mem_6="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>To remove a line, simply click on the two locations again and it will disappear. To remove a city from the itinerary, click on the image and then the return button in the buttom right.</p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
mem_instructnames = ["instruct_mem_1","instruct_mem_2","instruct_mem_3","instruct_mem_4","instruct_mem_5","instruct_mem_6"]
mem_instruct={instruct_mem_1,instruct_mem_2,instruct_mem_3,instruct_mem_4,instruct_mem_5,instruct_mem_6} 

//learning phse

imageList=['Aliance.png','Boulder.png','Cornwall.png','Custer.png','DelawareCity.png','Medora.png','Newport.png','ParkCity.png','Racine.png','Sitka.png','WestPalmBeach.png','Yukon.png']

imageIndex= [[0,1], [1,3], [4,3], [11,3], [1,2], [2,3], [2,10], [11,10], [2,5], [5,6], [5,8], [10,8], [6,7], [8,7], [8,9], [7,9]]

list_left=[imageList[imageIndex[0][0]],imageList[imageIndex[1][0]],imageList[imageIndex[2][0]],imageList[imageIndex[3][0]],imageList[imageIndex[4][0]],imageList[imageIndex[5][0]],imageList[imageIndex[6][0]],imageList[imageIndex[7][0]],imageList[imageIndex[8][0]],imageList[imageIndex[9][0]],imageList[imageIndex[10][0]],imageList[imageIndex[11][0]],imageList[imageIndex[12][0]],imageList[imageIndex[13][0]],imageList[imageIndex[14][0]],imageList[imageIndex[15][0]]]
list_right=[imageList[imageIndex[0][1]],imageList[imageIndex[1][1]],imageList[imageIndex[2][1]],imageList[imageIndex[3][1]],imageList[imageIndex[4][1]],imageList[imageIndex[5][1]],imageList[imageIndex[6][1]],imageList[imageIndex[7][1]],imageList[imageIndex[8][1]],imageList[imageIndex[9][1]],imageList[imageIndex[10][1]],imageList[imageIndex[11][1]],imageList[imageIndex[12][1]],imageList[imageIndex[13][1]],imageList[imageIndex[14][1]],imageList[imageIndex[15][1]]]
learn_left=[]
learn_right=[]

let arr = [];
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 44; j++) {
    arr.push(i);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let randomizedArray = shuffle(arr);

for (var i = 0; i < randomizedArray.length; i++){
    learn_left.push(list_left[randomizedArray[i]])
    learn_right.push(list_right[randomizedArray[i]])
}

var correctNode = []
var correctDirectNodes = 0

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

  // Function to find all nodes that are not directly connected to the center node
  getNonDirectNeighbors(centerNode) {
    const directNeighbors = new Set(this.getDirectNeighbors(centerNode));
    const allNodes = Object.keys(this.adjacencyList).map(Number);

    // Non-direct neighbors are all nodes that are not direct neighbors and not the centerNode itself
    const nonDirectNeighbors = allNodes.filter(node => !directNeighbors.has(node) && node !== centerNode);
    
    return nonDirectNeighbors;
  }

  // Function to generate a triplet [directNeighbor, centerNode, randomNonDirectNeighbor]
  getTriplet(centerNode) {
    const directNeighbors = this.getDirectNeighbors(centerNode);
    const nonDirectNeighbors = this.getNonDirectNeighbors(centerNode);

    if (directNeighbors.length === 0 || nonDirectNeighbors.length === 0) {
      return null; // Return null if no valid triplet can be found
    }

    // Select a random direct neighbor (1 edge apart)
    const leftNode = directNeighbors[Math.floor(Math.random() * directNeighbors.length)];

    // Select a random non-direct neighbor (not directly connected)
    const rightNode = nonDirectNeighbors[Math.floor(Math.random() * nonDirectNeighbors.length)];
    let midNode = nonDirectNeighbors[Math.floor(Math.random() * nonDirectNeighbors.length)]
    while(midNode == rightNode){
      midNode = nonDirectNeighbors[Math.floor(Math.random() * nonDirectNeighbors.length)]
    }
    
   
    if(Math.floor(Math.random() * 3 + 1) == 1) {
      directNodes = [leftNode, centerNode, midNode, rightNode]
    }else if (Math.floor(Math.random() * 3 + 1) == 2){
      directNodes = [rightNode, centerNode, midNode, leftNode];
    } else {
      directNodes = [midNode, centerNode, leftNode, rightNode]
    }
    correctDirectNodes = leftNode
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
for (let i = 1; i < 13; i++) {
  graph.addVertex(i);
}

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(3, 11);
graph.addEdge(3, 6);
graph.addEdge(4, 5);
graph.addEdge(4, 12);
graph.addEdge(6, 7);
graph.addEdge(6, 9);
graph.addEdge(7, 8);
graph.addEdge(8, 9);
graph.addEdge(8, 10);
graph.addEdge(9, 10);
graph.addEdge(9, 11);
graph.addEdge(11, 12);

graph.displayGraph();

let onediff = graph.getCustomTriplets(2,3).concat(graph.getCustomTriplets(3,4),graph.getCustomTriplets(4,5))
let onediffcorrect = correctNode
correctNode = []
let twodiff = graph.getCustomTriplets(2,4).concat(graph.getCustomTriplets(3,5))
let twodiffcorrect = correctNode
correctNode = []
let threediff = graph.getCustomTriplets(2,5)
let threediffcorrect = correctNode

//Direct Memory phase

let directRight = []
let directMid = []
let directLeft = []
let directUp = []
let directCorrect = []
var directNodes = 0

for(let i = 1;i<13;i++){
  graph.getTriplet(i)
  directLeft.push(directNodes[0])
  directUp.push(directNodes[1])
  directMid.push(directNodes[2])
  directRight.push(directNodes[3])
  directCorrect.push(correctDirectNodes)
}

let directarr = [];
  for (let i = 0; i < directLeft.length; i++) {
    directarr.push(i);
  }
directarr = shuffle(directarr)
let room_direct_left=[]
let room_direct_mid=[]
let room_direct_right=[]
let room_direct_up=[]
let room_direct_correct=[]


for(let i = 0;i<12;i++){
  room_direct_up.push(imageList[directUp[directarr[i]]-1])
  room_direct_left.push(imageList[directLeft[directarr[i]]-1])
  room_direct_right.push(imageList[directRight[directarr[i]]-1])
  room_direct_mid.push(imageList[directMid[directarr[i]]-1])
  room_direct_correct.push(imageList[directCorrect[directarr[i]]-1])
}


//Shoretst Path judge phase

let onediffarr = [];
  for (let i = 0; i < onediff.length; i++) {
    onediffarr.push(i);
  }
let twodiffarr = [];
for (let i = 0; i < twodiff.length; i++) {
  twodiffarr.push(i);
}
let threediffarr = [];
for (let i = 0; i < threediff.length; i++) {
  threediffarr.push(i);
}



onediffarr = shuffle(onediffarr);
twodiffarr = shuffle(twodiffarr);
threediffarr = shuffle(threediffarr);
let correctShortList = []
let upList = []
let leftList = []
let rightList = []
for (let i = 0;i<10;i++){
  upList.push(onediff[onediffarr[i]][1])
  leftList.push(onediff[onediffarr[i]][0])
  rightList.push(onediff[onediffarr[i]][2])
  correctShortList.push(onediffcorrect[onediffarr[i]])
  upList.push(twodiff[twodiffarr[i]][1])
  leftList.push(twodiff[twodiffarr[i]][0])
  rightList.push(twodiff[twodiffarr[i]][2])
  correctShortList.push(twodiffcorrect[twodiffarr[i]])
  upList.push(threediff[threediffarr[i]][1])
  leftList.push(threediff[threediffarr[i]][0])
  rightList.push(threediff[threediffarr[i]][2])
  correctShortList.push(threediffcorrect[threediffarr[i]])
}

let shortestpatharray = [];
for (let i = 0; i < 30; i++) {
  shortestpatharray.push(i);
}
shortestpatharray = shuffle(shortestpatharray)
shortestpatharray = shuffle(shortestpatharray)
shortUp = []
shortLeft = []
shortRight = []
shortCorrect = []
for (let i = 0;i<30;i++){
  shortUp.push(upList[shortestpatharray[i]])
  shortLeft.push(leftList[shortestpatharray[i]])
  shortRight.push(rightList[shortestpatharray[i]])
  shortCorrect.push(correctShortList[shortestpatharray[i]])
}
var room_shortest_right = []
var room_shortest_left = []
var room_shortest_up = []
var  room_shortest_correct = []
for (let i = 0;i<n_shortest_trial;i++){
  room_shortest_up.push(imageList[shortUp[i]-1])
  room_shortest_left.push(imageList[shortLeft[i]-1])
  room_shortest_right.push(imageList[shortRight[i]-1])
  room_shortest_correct.push(imageList[shortCorrect[i]-1])
}


//Goal Directed Navigation:

var room_goaldir_left = []
var room_goaldir_right = []

let threeEdgePair = graph.getPairsKEdgesApart(3)
let fourEdgePair = graph.getPairsKEdgesApart(4)
let fiveEdgePair = graph.getPairsKEdgesApart(5)

let goaldirList = graph.getPairsKEdgesApart(3).concat(graph.getPairsKEdgesApart(4),graph.getPairsKEdgesApart(5))
goaldirIndex = []
for (let i = 0; i < goaldirList.length; i++) {
  goaldirIndex.push(i);
}
goaldirIndex = shuffle(goaldirIndex)

for (let i = 0; i<goaldirList.length; i++){
  if(Math.floor(Math.random() * 2 + 1) == 1){
    room_goaldir_left.push(goaldirList[goaldirIndex[i]][0])
    room_goaldir_right.push(goaldirList[goaldirIndex[i]][1])
  }else {
    room_goaldir_left.push(goaldirList[goaldirIndex[i]][1])
    room_goaldir_right.push(goaldirList[goaldirIndex[i]][0])
  }

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
var randomDelay = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
