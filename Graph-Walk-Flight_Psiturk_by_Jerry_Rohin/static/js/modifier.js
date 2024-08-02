


//warningpage
warning=0 //this is to start the counter of total warning

//Text for instruction
instruct_1="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p><b>Welcome!</b></p><p>There is a new airline, AerBorn Airlines, that is offering flights to various destinations. You are a travel agent who is trying to help your clients make various travel arrangements. Your job is to try and learn as many direct flights offered by AerBorn Airlines as possible so you could advise your clients to make their travel plans as efficiently as possible. To do this, your supervisor has asked you to study the daily flight paths taken by AerBorn Airlines. </p><p>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:100px ;margin-right: 100px ;text-justify: auto'><p>You will be shown two cities, which indicates a direct flight taken by AerBorn Airlines. For example:</p><br /><img src= '../static/images/LosAngeles.png' width='200' height='200'></img><img src= '../static/images/Austin.png' width='200' height='200'></img><p></p><br /><p>indicates that AerBorn Airlines flew directly (nonstop) from Los Angeles to Austin</p><p>[press the spacebar to continue]</p>",
instruct_3="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>You will see a series of these city-pairs and will try to learn as many of them as possible to best advise your future clients for travel. After studying the information, you will be asked to help your clients book travel to various destinations via AerBorn Airlines.</p><p>First, you will see a series of practice images before moving on to the next task</p><p>[press the spacebar to continue]</p>",

instructnames = ["instruct_1","instruct_2","instruct_3"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3} // IF you want to add or decrease number of page for instruct, just delete or add var here.


//Text for direct memory instruction
instruct_dir_1="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>Great! We will move on to the main task now, remember to memorize the city-pairings to the best of your ability.</p><p>[press the spacebar to continue]</p>",
instruct_dir_2="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>Now that you have studied the various flights offered by AerBorn Airlines, you will be tested on your knowledge of what you just studied. On each trial, you will see a location and will have to select which city you can fly nonstop to via AerBorn Airlines. You will see the starting location on top, and 3 city options below it. Please select only the city to which AerBorn Airlines flies directly (nonstop).</p><p>[press the spacebar to continue]</p>",
dir_instructnames = ["instruct_dir_1","instruct_dir_2"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1,instruct_dir_2} //same for above

//Text for phase 3 instruction
instruct_mem_1="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>In this next portion, you will be meeting with various clients who are looking for recommendations for travel. On each trial, you will see 3 locations:</p><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><br /><img src= '../static/images/StLouis.png' width='170' height='200'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p>[press the spacebar to continue]</p>",
instruct_mem_2="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>The top city is where your client is located. You want to recommend a vacation destination that will require the fewest number of layovers (stops) from where the client is located. </p><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><br /><img src= '../static/images/StLouis.png' width='170' height='200'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p>[press the spacebar to continue]</p>",
instruct_mem_3="<div style='margin-left:100px ;margin-right: 100px ;text-justify: auto'><p>For example, if you studied the following flight paths starting from New York: </p><br /><img src= '../static/images/Instruction8.png' width='1000' height='400'></img><p></p><br /><p>You should recommend flying to Detroit, since it requires fewer layovers from your client's location ( NYC > LA > Detroit, vs. NYC > ... > Austin > St. Louis</p><p>[press the spacebar to continue]</p>",
instruct_mem_4="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>Press the '1' key to recommend the city on the LEFT, and the '2' key to recommend the city on the RIGHT. If you are unsure of which destination is better, just try your best to make an educated guess.</p><img src= '../static/images/NewYorkCity.png' width='200' height='200'></img><br /><img src= '../static/images/StLouis.png' width='170' height='200'></img>&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p>[press the spacebar to continue]</p>",
instruct_mem_5="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>In this next portion, you will help your clients book travel to and from specific locations via AerBorn Airlines. You will see a starting location (where your client is located) on the left, and the client's desired destination on the right. </p><br /><img src= '../static/images/StLouis.png' width='170' height='200'></img>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src= '../static/images/Detroit.png' width='170' height='200'></img><p></p><br /><p>Using your knowledge of the flights offered by AerBorn Airlines, construct a travel plan for each client based on their desired travel destination. The best itinerary is one that minimizes the number of layovers.</p><br /><p>[press the spacebar to continue]</p>",
mem_instructnames = ["instruct_mem_1","instruct_mem_2","instruct_mem_3","instruct_mem_4","instruct_mem_5"]
mem_instruct={instruct_mem_1,instruct_mem_2,instruct_mem_3,instruct_mem_4,instruct_mem_5} 

//learning phse
n_learning_trial=3 //This determine the number of learning trial you want in total
learn_left=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
learn_right=['DelawareCity.png','Custer.png','Custer.png','DelawareCity.png']


//Direct Memory phase
n_direct_trial=3
room_direct_up=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
room_direct_left=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
room_direct_mid=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
room_direct_right=['Custer.png','DelawareCity.png','Medora.png','Racine.png']


//Goal Directed Navigation:
numberoftrial=2 // This determine the number of trial you want

