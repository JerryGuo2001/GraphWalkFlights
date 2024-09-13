


//warningpage
warning=0 //this is to start the counter of total warning
warning_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5;color:red'>Warning, you are missing too many trials, make sure to press the key '1' when you seee a blue cross and '2' when you see a green one. If you keep missing trials you will be disqualified.</p>",
checkfail=1 //this is to start the attentioncheck
checkthreshold=2 //this is to add the threshold for attentioncheck

//Text for instruction
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;margin-bottom:40px'><b>Welcome!</b></p><p style ='font-size: 50px;line-height:1.5'>There is a new airline, AerBorn Airlines, that is offering flights to various destinations. You are a travel agent who is trying to help your clients make various travel arrangements. Your job is to try and learn as many direct flights offered by AerBorn Airlines as possible so you could advise your clients to make their travel plans as efficiently as possible. To do this, your supervisor has asked you to study the daily flight paths taken by AerBorn Airlines. </p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;line-height:1.5'>You will be shown two cities, which indicates a direct flight taken by AerBorn Airlines. For example:</p><br /><img src= '../static/images/LosAngeles.png' width='200' height='200' style='margin-right:200px'></img><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><p></p><br /><p style ='font-size: 50px;line-height:1.5'>indicates that AerBorn Airlines flew directly (nonstop) from Los Angeles to New York City</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will see a series of these city-pairs and will try to learn as many of them as possible to best advise your future clients for travel. After studying the information, you will be asked to help your clients book travel to various destinations via AerBorn Airlines.</p><p style ='font-size: 50px;line-height:1.5'>First, you will see a series of practice images before moving on to the next task</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>Addiitonally, you will see a cross on the center of your screen in between image pairings like the ones below:</p><br /><img src= '../static/images/isiblue.png' width='200' height='200' style='margin-right:200px'><img src= '../static/images/isigreen.png' width='200' height='200'></img><p style ='font-size: 50px;line-height:1.5'>If the cross is blue, press the '1' key on your keyboard, if it is green press '2'. Please make sure to respond to every trial, as too many missed trials will disqualify you from participating. Only the first response will be taken, and please try to respond as quickly and as accurately as possible.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",

instructnames = ["instruct_1","instruct_2","instruct_3","instruct_4"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3,instruct_4} // IF you want to add or decrease number of page for instruct, just delete or add var here.


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

n_learning_trial=3 //This determine the number of learning trial you want in total

imageList=['Aliance.png','Boulder.png','Cornwall.png','Custer.png','DelawareCity.png','Medora.png','Newport.png','ParkCity.png','Racine.png','Sitka.png','WestPalmBeach.png','Yukon.png']

imageIndex= [[0,1], [1,3], [4,3], [11,3], [1,2], [2,3], [2,10], [11,10], [2,5], [5,6], [5,8], [10,8], [6,7], [8,7], [8,9], [7,9]]

learn_left=[imageList[imageIndex[0][0]],imageList[imageIndex[1][0]],imageList[imageIndex[2][0]],imageList[imageIndex[3][0]],imageList[imageIndex[4][0]],imageList[imageIndex[5][0]],imageList[imageIndex[6][0]],imageList[imageIndex[7][0]],imageList[imageIndex[8][0]],imageList[imageIndex[9][0]],imageList[imageIndex[10][0]],imageList[imageIndex[11][0]],imageList[imageIndex[12][0]],imageList[imageIndex[13][0]],imageList[imageIndex[14][0]],imageList[imageIndex[15][0]]]
learn_right=[imageList[imageIndex[0][1]],imageList[imageIndex[1][1]],imageList[imageIndex[2][1]],imageList[imageIndex[3][1]],imageList[imageIndex[4][1]],imageList[imageIndex[5][1]],imageList[imageIndex[6][1]],imageList[imageIndex[7][1]],imageList[imageIndex[8][1]],imageList[imageIndex[9][1]],imageList[imageIndex[10][1]],imageList[imageIndex[11][1]],imageList[imageIndex[12][1]],imageList[imageIndex[13][1]],imageList[imageIndex[14][1]],imageList[imageIndex[15][1]]]


//Direct Memory phase
n_direct_trial=2
room_direct_up=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
room_direct_left=['DelawareCity.png','Racine.png','Medora.png','Racine.png']
room_direct_mid=['Medora.png','Custer.png','Medora.png','Racine.png']
room_direct_right=['Racine.png','Medora.png','Medora.png','Racine.png']

//Shoretst Path judge phase
n_shortest_trial=2
room_shortest_up=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
room_shortest_left=['DelawareCity.png','Racine.png','Medora.png','Racine.png']
room_shortest_right=['Racine.png','Medora.png','Medora.png','Racine.png']

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
