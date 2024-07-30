




//Text for instruction
instruct_1="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p><b>Welcome!</b></p><p>There is a new airline, AerBorn Airlines, that is offering flights to various destinations. You are a travel agent who is trying to help your clients make various travel arrangements. Your job is to try and learn as many direct flights offered by AerBorn Airlines as possible so you could advise your clients to make their travel plans as efficiently as possible. To do this, your supervisor has asked you to study the daily flight paths taken by AerBorn Airlines. </p><p>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:100px ;margin-right: 100px ;text-justify: auto'><img src= '../static/images/instruction2.png' width='1000' height='400'></img><p>[press the spacebar to continue]</p>",
instruct_3="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>You will see a series of these city-pairs and will try to learn as many of them as possible to best advise your future clients for travel. After studying the information, you will be asked to help your clients book travel to various destinations via AerBorn Airlines.</p><p>First, you will see a series of practice images before moving on to the next task</p><p>[press the spacebar to continue]</p>",
instruct_4="<div style='margin-left:300px ;margin-right: 300px ;text-justify: auto'><p>Great! We will move on to the main task now, remember to memorize the city-pairings to the best of your ability.</p><p>[press the spacebar to continue]</p>",
instructnames = ["instruct_1","instruct_2","instruct_3","instruct_4"]
instruct={instruct_1,instruct_2,instruct_3,instruct_4} // IF you want to add or decrease number of page for instruct, just delete or add var here.



//learning phse
n_learning_trial=3 //This determine the number of learning trial you want in total
learn_left=['Custer.png','DelawareCity.png','Medora.png','Racine.png']
learn_right=['DelawareCity.png','Custer.png','Custer.png','DelawareCity.png']

//Goal Directed Navigation:
numberoftrial=2 // This determine the number of trial you want

