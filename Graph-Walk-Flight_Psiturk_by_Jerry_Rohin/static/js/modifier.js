


//warningpage
warning=0 //this is to start the counter of total warning
warning_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5;color:red'>Warning, you are missing too many trials, make sure to press the key '1' when you seee a blue cross and '2' when you see a green one. If you keep missing trials you will be disqualified.</p>",
checkfail=0 //this is to start the attentioncheck
checkthreshold=2 //this is to add the threshold for attentioncheck

//Text for instruction
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;margin-bottom:40px'><b>Welcome!</b></p><p style ='font-size: 50px;line-height:1.5'>There is a new airline, AerBorn Airlines, that is offering flights to various destinations. You are a travel agent who is trying to help your clients make various travel arrangements.<p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Your job is to try and learn as many direct flights offered by AerBorn Airlines as possible so you could advise your clients to make their travel plans as efficiently as possible. To do this, your supervisor has asked you to study the daily flight paths taken by AerBorn Airlines. </p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will be shown two cities, which indicates a direct flight taken by AerBorn Airlines. For example:</p><br /><img src= '../static/images/LosAngeles.png' width='150' height='150' style='margin-right:200px'></img><img src= '../static/images/NewYorkCity.png' width='150' height='150'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>indicates that AerBorn Airlines flew directly (nonstop) from Los Angeles to New York City</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will see a series of these city-pairs and will try to learn as many of them as possible to best advise your future clients for travel. After studying the information, you will be asked to help your clients book travel to various destinations via AerBorn Airlines.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_5="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>First, you will see a series of practice images before moving on to the next task</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_6="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Additonally, you will see a cross on the center of your screen in between image pairings like the ones below:</p><br /><img src= '../static/images/isiblue.png' width='200' height='200' style='margin-right:200px'><img src= '../static/images/isigreen.png' width='200' height='200'></img><p style ='font-size: 50px;line-height:1.5'>If the cross is blue, press the '1' key on your keyboard, if it is green press '2'.<p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_7="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Please make sure to respond to every trial, as too many missed trials will disqualify you from participating. Only the first response will be taken, and please try to respond as quickly and as accurately as possible.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",

instructnames = ["instruct_1","instruct_2","instruct_3","instruct_4","instruct_5","instruct_6","instruct_7"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3,instruct_4,instruct_5,instruct_6,instruct_7} // IF you want to add or decrease number of page for instruct, just delete or add var here.


//Text for direct memory instruction
instruct_dir_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Great! We will move on to the main task now, remember to memorize the city-pairings to the best of your ability.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Now that you have studied the various flights offered by AerBorn Airlines, you will be tested on your knowledge of what you just studied. On each trial, you will see a location and will have to select which city you can fly nonstop to via AerBorn Airlines. You will see the starting location on top, and 3 city options below it. Please select only the city to which AerBorn Airlines flies directly (nonstop).</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
dir_instructnames = ["instruct_dir_1","instruct_dir_2"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1,instruct_dir_2} //same for above

//Text for phase 3 instruction
instruct_mem_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>In this next portion, you will help your clients book travel to and from specific locations via AerBorn Airlines. You will see a starting location (where your client is located) on the left, and the client's desired destination on the right. </p><br /><img src= '../static/images/StLouis.png' width='170' height='200' style='margin-right:500px'></img><img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>Using your knowledge of the flights offered by AerBorn Airlines, construct a travel plan for each client based on their desired travel destination. The best itinerary is one that minimizes the number of layovers.</p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_mem_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Fill in the appropriate flights by selecting the intermediate locations that will allow your client to get to their destination. </p><br /><img src= '../static/images/Instruction11.png' width='1000' height='200'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>Using your knowledge of the flights offered by AerBorn Airlines, construct a travel plan for each client based on their desired travel destination. The best itinerary is one that minimizes the number of layovers.</p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
mem_instructnames = ["instruct_mem_1","instruct_mem_2"]
mem_instruct={instruct_mem_1,instruct_mem_2} 

//Text for shortest path instruction
instruct_short_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>In this next portion, you will be meeting with various clients who are looking for recommendations for travel. On each trial, you will see 3 locations:</p><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><br /><img src= '../static/images/StLouis.png' width='170' height='200' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_short_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>The top city is where your client is located. You want to recommend a vacation destination that will require the fewest number of layovers (stops) from where the client is located. </p><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><br /><img src= '../static/images/StLouis.png' width='170' height='200' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_short_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>For example, if you studied the following flight paths starting from New York: </p><br /><img src= '../static/images/Instruction8.png' width='1000' height='400'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>You should recommend flying to Detroit, since it requires fewer layovers from your client's location ( NYC > LA > Detroit, vs. NYC > ... > Austin > St. Louis</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_short_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Press the '1' key to recommend the city on the LEFT, and the '2' key to recommend the city on the RIGHT. If you are unsure of which destination is better, just try your best to make an educated guess.</p><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><br /><img src= '../static/images/StLouis.png' width='170' height='200' style='margin-right:200px'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
short_instructnames = ["instruct_short_1","instruct_short_2","instruct_short_3","instruct_short_4"]
short_instruct={instruct_short_1,instruct_short_2,instruct_short_3,instruct_short_4} 

//learning phse

n_learning_trial=5 //This determine the number of learning trial you want in total

imageList=['Aliance.png','Boulder.png','Cornwall.png','Custer.png','DelawareCity.png','Medora.png','Newport.png','ParkCity.png','Racine.png','Sitka.png','WestPalmBeach.png','Yukon.png']

imageIndex= [[0,1], [1,3], [4,3], [11,3], [1,2], [2,3], [2,10], [11,10], [2,5], [5,6], [5,8], [10,8], [6,7], [8,7], [8,9], [7,9]]

list_left=[imageList[imageIndex[0][0]],imageList[imageIndex[1][0]],imageList[imageIndex[2][0]],imageList[imageIndex[3][0]],imageList[imageIndex[4][0]],imageList[imageIndex[5][0]],imageList[imageIndex[6][0]],imageList[imageIndex[7][0]],imageList[imageIndex[8][0]],imageList[imageIndex[9][0]],imageList[imageIndex[10][0]],imageList[imageIndex[11][0]],imageList[imageIndex[12][0]],imageList[imageIndex[13][0]],imageList[imageIndex[14][0]],imageList[imageIndex[15][0]]]
list_right=[imageList[imageIndex[0][1]],imageList[imageIndex[1][1]],imageList[imageIndex[2][1]],imageList[imageIndex[3][1]],imageList[imageIndex[4][1]],imageList[imageIndex[5][1]],imageList[imageIndex[6][1]],imageList[imageIndex[7][1]],imageList[imageIndex[8][1]],imageList[imageIndex[9][1]],imageList[imageIndex[10][1]],imageList[imageIndex[11][1]],imageList[imageIndex[12][1]],imageList[imageIndex[13][1]],imageList[imageIndex[14][1]],imageList[imageIndex[15][1]]]
learn_left=[]
learn_right=[]
// Step 1: Create an array with numbers 0 to 15 repeated 44 times
let arr = [];
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 44; j++) {
    arr.push(i);
  }
}

// Step 2: Shuffle the array using Fisher-Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

let randomizedArray = shuffle(arr);

for (var i = 0; i < randomizedArray.length; i++){
    learn_left.push(list_left[randomizedArray[i]])
    learn_right.push(list_right[randomizedArray[i]])
}


// Direct Image Pairings

// 2 edge pairing (20)
// [  [1,3],[1,4],[2,5],[2,11],[2,12],[3,5],[3,7],[3,9],[3,12],[4,6],[4,11],[5,12],[6,8],[6,10],[6,11],[7,9],[7,10],[8,11],[9,12],[10,11]  ]

// 3 edge pairing (16)
// [  [1,5],[1,6],[1,11],[1,12],[2,7],[2,9],[3,8],[3,10],[4,7],[4,9],[5,6],[5,11],[6,12],[7,11],[8,12],[10,12]  ]

// 4 edge pairing (9)
// [  [1,7],[1,9],[2,8],[2,10],[4,8],[4,10],[5,7],[5,9],[7,12]  ]

// 5 edge pairing (4)
// [  [1,8],[1,10],[5,8],[5,10]  ]

// Frequency
// 1:10, 2:7, 3:7, 4:7, 5:10, 6:7, 7:9, 8:8, 9:7, 10:9, 11:8, 12:9


// Easy (1 edge diff) [left, middle, right] 2 --> 3 ; 3 --> 4 ; 4 --> 5

// Center node: 1 (20 * 2)
// [3,1,5], [3,1,6], [3,1,11], [3,1,12], [4,1,5], [4,1,6], [4,1,11], [4,1,12], [5,1,3], [6,1,3], [11,1,3], [12,1,3], [5,1,4], [6,1,4], [11,1,4], [12,1,4]
// [5,1,7], [6,1,7], [11,1,7], [12,1,7], [7,1,5], [7,1,6], [7,1,11], [7,1,12], [5,1,9], [6,1,9], [11,1,9], [12,1,9], [9,1,5], [9,1,6], [9,1,11], [9,1,12]
// [7,1,8], [9,1,8], [7,1,10], [9,1,10], [8,1,7], [8,1,9], [10,1,7], [10,1,9]

// Center node: 2 (11 * 2)
// [7,2,5], [7,2,11], [7,2,12], [9,2,5], [9,2,11], [9,2,12], [5,2,7], [11,2,7], [12,2,7], [5,2,9], [11,2,9], [12,2,9]
// [8,2,7], [10,2,7], [8,2,9], [10,2,9], [7,2,8], [7,2,10], [9,2,8], [9,2,10]

// Center node: 3 (10 * 2)
// [1,3,8], [1,3,10], [5,3,8], [5,3,10], [7,3,8], [7,3,10], [9,3,8], [9,3,10], [12,3,8], [12,3,10], [8,3,1], [10,3,1], [8,3,5], [10,3,5], [8,3,7], [10,3,7], [8,3,9], [10,3,9], [8,3,12], [10,3,12]

// Center node: 4 (10 * 2)
// [1,4,7], [1,4,9], [6,4,7], [6,4,9], [11,4,7], [11,4,9], [7,4,1], [9,4,1], [7,4,6], [9,4,6], [7,4,11], [9,4,11]
// [7,4,8], [7,4,10], [9,4,8], [9,4,10], [8,4,7], [10,4,7], [8,4,9], [10,4,9]

// Center node: 5 (19 * 2)
// [2,5,1], [2,5,6], [2,5,11], [3,5,1], [3,5,6], [3,5,11], [12,5,1], [12,5,6], [12,5,11], [1,5,2], [6,5,2], [11,5,2], [1,5,3], [6,5,3], [11,5,3], [1,5,12], [6,5,12], [11,5,12]
// [1,5,7], [1,5,9], [6,5,7], [6,5,9], [11,5,7], [11,5,9], [7,5,1], [9,5,1], [7,5,6], [9,5,6], [7,5,11], [9,5,11]
// [7,5,8], [7,5,10], [9,5,8], [9,5,10], [8,5,7], [10,5,7], [8,5,9], [10,5,9]

// Center node: 6 (12 * 2)
// [4,6,1], [4,6,5], [4,6,12], [8,6,1], [8,6,5], [8,6,12], [10,6,1], [10,6,5], [10,6,12], [11,6,1], [11,6,5], [11,6,12], [1,6,4], [5,6,4], [12,6,4], [1,6,8], [5,6,8], [12,6,8], [1,6,10], [5,6,10], [12,6,10], [1,6,11], [5,6,11], [12,6,11]

// Center node: 7 (18 * 2)
// [3,7,2], [3,7,4], [3,7,11], [9,7,2], [9,7,4], [9,7,11], [10,7,2], [10,7,4], [10,7,11], [2,7,3], [4,7,3], [11,7,3], [2,7,9], [4,7,9], [11,7,9], [2,7,10], [4,7,10], [11,7,10]
// [2,7,1], [2,7,5], [2,7,12], [4,7,1], [4,7,5], [4,7,12], [11,7,1], [11,7,5], [11,7,12], [1,7,2], [5,7,2], [12,7,2], [1,7,4], [5,7,4], [12,7,4], [1,7,11], [5,7,11], [12,7,11]

// Center node: 8 (12 * 2)
// [6,8,3], [6,8,12], [11,8,3], [11,8,12], [3,8,6], [12,8,6], [3,8,11], [12,8,11]
// [3,8,2], [3,8,4], [12,8,2], [12,8,4], [2,8,3], [4,8,3], [2,8,12], [4,8,12]
// [2,8,1], [2,8,5], [4,8,1], [4,8,5], [1,8,2], [5,8,2], [1,8,4], [5,8,4]

// Center node: 9 (10 * 2)
// [3,9,2], [3,9,4], [7,9,2], [7,9,4], [12,9,2], [12,9,4], [2,9,3], [4,9,3], [2,9,7], [4,9,7], [2,9,12], [4,9,12]
// [2,9,1], [2,9,5], [4,9,1], [4,9,5], [1,9,2], [5,9,2], [1,9,4], [5,9,4]

// Center node: 10 (14 * 2)
// [6,10,3], [6,10,12], [7,10,3], [7,10,12], [11,10,3], [11,10,12], [3,10,6], [12,10,6], [3,10,7], [12,10,7], [3,10,11], [12,10,11]
// [3,10,2], [3,10,4], [12,10,2], [12,10,4], [2,10,3], [4,10,3], [2,10,12], [4,10,12]
// [2,10,1], [2,10,5], [4,10,1], [4,10,5], [1,10,2], [5,10,2], [1,10,4], [5,10,4]

// Center node: 11 (15 * 2)
// [2,11,1], [2,11,5], [2,11,7], [4,11,1], [4,11,5], [4,11,7], [6,11,1], [6,11,5], [6,11,7], [8,11,1], [8,11,5], [8,11,7], [10,11,1], [10,11,5], [10,11,7], [1,11,2], [5,11,2], [7,11,2], [1,11,4], [5,11,4], [7,11,4], [1,11,6], [5,11,6], [7,11,6], [1,11,8], [5,11,8], [7,11,8], [1,11,10], [5,11,10], [7,11,10]

// Center node: 12 (20 * 2)
// [2,12,1], [2,12,6], [2,12,8], [2,12,10], [3,12,1], [3,12,6], [3,12,8], [3,12,10], [5,12,1], [5,12,6], [5,12,8], [5,12,10], [9,12,1], [9,12,6], [9,12,8], [9,12,10], [1,12,2], [6,12,2], [8,12,2], [10,12,2], [1,12,3], [6,12,3], [8,12,3], [10,12,3], [1,12,5], [6,12,5], [8,12,5], [10,12,5], [1,12,9], [6,12,9], [8,12,9], [10,12,9]
// [1,12,7], [6,12,7], [8,12,7], [10,12,7], [7,12,1], [7,12,6], [7,12,8], [7,12,10]


// Medium (2 edge diff) [left, middle, right] 2 --> 4 ; 3 --> 5

// Center node: 1 (12 * 2)
// [3,1,7], [3,1,9], [4,1,7], [4,1,9], [7,1,3], [9,1,3], [7,1,4], [9,1,4]
// [5,1,8], [5,1,10], [6,1,8], [6,1,10], [11,1,8], [11,1,10], [8,1,5], [10,1,5], [8,1,6], [10,1,6], [8,1,11], [10,1,11], [8,1,12], [10,1,12]

// Center node: 2 (6 * 2)
// [5,2,8], [5,2,10], [11,2,8], [11,2,10], [12,2,8], [12,2,10], [8,2,5], [10,2,5], [8,2,11], [10,2,11], [8,2,12], [10,2,12]

// Center node: 3 (0)
//

// Center node: 4 (6 * 2)
// [1,4,8], [1,4,10], [6,4,8], [6,4,10], [11,4,8], [11,4,10], [8,4,1], [10,4,1], [8,4,6], [10,4,6], [8,4,11], [10,4,11]

// Center node: 5 (12 * 2)
// [2,5,7], [2,5,9], [3,5,7], [3,5,9], [12,5,7], [12,5,9], [7,5,2], [9,5,2], [7,5,3], [9,5,3], [7,5,12], [9,5,12]
// [1,5,8], [1,5,10], [6,5,8], [6,5,10], [11,5,8], [11,5,10], [8,5,1], [10,5,1], [8,5,6], [10,5,6], [8,5,11], [10,5,11]

// Center node: 6 (0)
//

// Center node: 7 (6 * 2)
// [3,7,5], [3,7,12], [9,7,5], [9,7,12], [10,7,5], [10,7,12], [5,7,3], [12,7,3], [5,7,9], [12,7,9], [5,7,10], [12,7,10]

// Center node: 8 (8 * 2)
// [6,8,2], [6,8,4], [11,8,2], [11,8,4], [2,8,6], [4,8,6], [2,8,11], [4,8,11]
// [3,8,1], [3,8,5], [12,8,1], [12,8,5], [1,8,3], [5,8,3], [1,8,12], [5,8,12]

// Center node: 9 (6 * 2)
// [3,9,1], [3,9,5], [7,9,1], [7,9,5], [12,9,1], [12,9,5], [1,9,3], [5,9,3], [1,9,7], [5,9,7], [1,9,12], [5,9,12]

// Center node: 10 (10 * 2)
// [6,10,2], [6,10,4], [7,10,2], [7,10,4], [11,10,2], [11,10,7], [2,10,6], [4,10,6], [2,10,7], [4,10,7], [2,10,11], [7,10,11]
// [3,10,1], [3,10,5], [12,10,1], [12,10,5], [1,10,3], [5,10,3], [1,10,12], [5,10,12]

// Center node: 11 (0)
//

// Center node: 12 (4 * 2)
// [2,12,7], [3,12,7], [5,12,7], [9,12,7], [7,12,2], [7,12,3], [7,12,5], [7,12,9]


// Hard (3 edge diff) [left, middle, right] 2 --> 5

// Center node: 1 (4 * 2)
// [3,1,8], [3,1,10], [4,1,8], [4,1,10], [8,1,3], [10,1,3], [8,1,4], [10,1,4]

// Center node: 5 (6 * 2)
// [2,5,8], [2,5,10], [3,5,8], [3,5,10], [12,5,8], [12,5,10], [8,5,2], [10,5,2], [8,5,3], [10,5,3], [8,5,12], [10,5,12]

// Center node: 8 (4 * 2)
// [6,8,1], [6,8,5], [11,8,1], [11,8,5], [1,8,6], [5,8,6], [1,8,11], [5,8,11]

// Center node: 10 (6 * 2)
// [6,10,1], [6,10,5], [7,10,1], [7,10,5], [11,10,1], [11,10,5], [1,10,6], [5,10,6], [1,10,7], [5,10,7], [1,10,11], [5,10,11]


// Table of center node occurances
// Center node: Easy, Medium, Hard: Total
// 1: 40, 24, 8: 72
// 2: 22, 12, 0: 34
// 3: 20, 0, 0: 20
// 4: 20, 12, 0: 32
// 5: 38, 24, 12: 74
// 6: 24, 0, 0: 24
// 7: 36, 12, 0: 48
// 8: 24, 16, 8: 48
// 9: 20, 12, 0: 32
// 10: 28, 20, 12: 60
// 11: 30, 0, 0: 30
// 12: 40, 8, 0: 48
// Tot: 342, 140, 40


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
      directNodes = [midNode, centerNode, leftNode, rightNode]}
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
        });
      });
    }

    return triplets;
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
let twodiff = graph.getCustomTriplets(2,4).concat(graph.getCustomTriplets(3,5))
let threediff = graph.getCustomTriplets(2,5)


//Direct Memory phase

let directRight = []
let directMid = []
let directLeft = []
let directUp = []
var directNodes = 0

for(let i = 1;i<13;i++){
  graph.getTriplet(i)
  directLeft.push(directNodes[0])
  directUp.push(directNodes[1])
  directMid.push(directNodes[2])
  directRight.push(directNodes[3])
}

let directarr = [];
  for (let i = 0; i < directLeft.length; i++) {
    directarr.push(i);
  }
directarr = shuffle(directarr)

n_direct_trial=2
let room_direct_left=[]
let room_direct_mid=[]
let room_direct_right=[]
let room_direct_up=[]


for(let i = 0;i<12;i++){
  room_direct_up.push(imageList[directUp[directarr[i]]-1])
  room_direct_left.push(imageList[directLeft[directarr[i]]-1])
  room_direct_right.push(imageList[directRight[directarr[i]]-1])
  room_direct_mid.push(imageList[directMid[directarr[i]]-1])
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

let upList = []
let leftList = []
let rightList = []
for (let i = 0;i<10;i++){
  upList.push(onediff[onediffarr[i]][1])
  leftList.push(onediff[onediffarr[i]][0])
  rightList.push(onediff[onediffarr[i]][2])
  upList.push(twodiff[twodiffarr[i]][1])
  leftList.push(twodiff[twodiffarr[i]][0])
  rightList.push(twodiff[twodiffarr[i]][2])
  upList.push(threediff[threediffarr[i]][1])
  leftList.push(threediff[threediffarr[i]][0])
  rightList.push(threediff[threediffarr[i]][2])
}

let shortestpatharray = [];
for (let i = 0; i < 30; i++) {
  shortestpatharray.push(i);
}
shortestpatharray = shuffle(shortestpatharray)
shortUp = []
shortLeft = []
shortRight = []
for (let i = 0;i<30;i++){
  shortUp.push(upList[shortestpatharray[i]])
  shortLeft.push(leftList[shortestpatharray[i]])
  shortRight.push(rightList[shortestpatharray[i]])
}
var room_shortest_right = []
var room_shortest_left = []
var room_shortest_up = []
n_shortest_trial=3
for (let i = 0;i<n_shortest_trial;i++){
  room_shortest_up.push(imageList[shortUp[i]-1])
  room_shortest_left.push(imageList[shortLeft[i]-1])
  room_shortest_right.push(imageList[shortRight[i]-1])
}


//Goal Directed Navigation:
numberoftrial=2 // This determine the number of trial you want

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
