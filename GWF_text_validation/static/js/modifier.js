//debug moode on/off
debugmode= false
if (debugmode==true){
  num_learn_trials = 5
  num_recognition_trials = 5
}else{
  num_learn_trials = 30
  num_recognition_trials = 60
}
n_learning_trial=3 //This determine the number of learning trial you want in total
n_direct_trial=10 //how many direct trial you want
n_shortest_trial=10 //how many shortest path you want
n_goaldir_trial=10 //how many goal directed planning you want
//warningpage
warning=0 //this is to start the counter of total warning
warning_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5;color:red'>Warning, you are missing too many trials, make sure to press the key '1' when you see a blue cross flash and '2' when you see a green one. If you keep missing trials you will be disqualified.</p>",
checkfail=0 //this is to start the attentioncheck
checkthreshold=2 //this is to add the threshold for attentioncheck

//Text for instruction
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;margin-bottom:40px'><b>Welcome!</b></p><p style ='font-size: 50px;line-height:1.5'>Today, you will see various city names. For each name, you will answer questions and rate how familiar, unique, and memorable they are.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
// instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>For example, you will first be presented with an image like the one below for 3 seconds.</p><br /><img src= '../static/images/img_manmade_practice.png' width='200' height='200'></img><br /><br><p style ='font-size: 50px;line-height:1.5'>During this time, your job is to try to remember the image to the best of your ability.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will use your keyboard to press the number that corresponds with your rating for each question. The rating scale ranges from 1-5.<br /><br />Please use the <strong>entire scale</strong>–-in other words, all names should not get the same ratings.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>There will be checks throughout the experiment to ensure you are paying attention so please be sure to read each question and respond as accurately as you can. Failure to do so may result in the experiment ending early.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
//instruct_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>After all the images are presented, you will see a list of images containing both the old images you studied and new ones as well. You will choose whether the image is new or old, so try to memorize the images to the best of your ability.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",


instructnames = ["instruct_1","instruct_2","instruct_3"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3} // IF you want to add or decrease number of page for instruct, just delete or add var here.


//Text for direct memory instruction
instruct_dir_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>For this next portion, you will continue to make name judgements, but we will also test you on your memory for what you saw before.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>On each trial, you will be presented with a city name. In addition to providing ratings as you’ve done before, you will be asked to indicate if this is a city name you’ve seen before in the previous phase, or a new name you are seeing for the first time.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_3 = "<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will be asked how confident you are in determining whether the image is <b>OLD</b> (what you have seen before) or <b>NEW</b>.<br><br>If you think the image is definitely old, press '1'<br>If you think it is likely old, press '2'<br>If it is likely new, press '3'<br>If it is definitely new, press '4'<br></p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
// instruct_dir_4 = "<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will only have a couple of seconds to respond to every trial, so try to respond as quickly and as accurately as possible.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to start]</p>",
dir_instructnames = ["instruct_dir_1","instruct_dir_2","instruct_dir_3"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1,instruct_dir_2,instruct_dir_3} //same for above

//learning phase

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let img_mm_list = []
let unshuffled_img_type1 = []
let unshuffled_img_type2 = []
let unshuffled_img_type3 = []
let unshuffled_img_type4 = []
let unshuffled_img_type = []

let shuffled_img_type_US = []
let shuffled_img_type_fictional = []
let shuffled_img_type3 = []
let shuffled_img_type4 = []
let shuffled_img_typeTotal = []

let image_choose_index =[]
for (i=1;i<31;i++){
  image_choose_index.push(i)
}
shuffle(image_choose_index)

let US_cities = [
  "Huntsville",
  "Sitka",
  "Bisbee",
  "Hot Springs",
  "Healdsburg",
  "Boulder",
  "Cornwall",
  "Delaware City",
  "West Palm Beach",
  "Athens",
  "Hilo",
  "Coeur d'Alene",
  "Peoria",
  "Carmel",
  "Okoboji",
  "Abilene",
  "Bowling Green",
  "Shreveport",
  "Bar Harbor",
  "Assateague Island",
  "Gloucester",
  "Manistee",
  "Orr",
  "Natchez",
  "Lake of the Ozarks",
  "Livingston",
  "Alliance",
  "Gardnerville",
  "Hanover",
  "Cape May",
  "Albuquerque",
  "Watkins Glen",
  "Duck",
  "Medora",
  "Cleveland",
  "Yukon",
  "Sisters",
  "New Hope",
  "Newport",
  "Folly Beach",
  "Custer",
  "Gatlinburg",
  "San Antonio",
  "Park City",
  "Barnard",
  "Leesburg",
  "Sammamish",
  "Berkeley Springs",
  "Racine",
  "Cody"
]

let fictional_cities = [
  "Ashford Hills",
  "Brookmere",
  "Crestwood",
  "Fairhaven",
  "Northbridge",
  "Silverpine",
  "Oakridge",
  "Millstone",
  "Westridge",
  "Lakehaven",
  "Ravenport",
  "Elmsbury",
  "Pine Hollow",
  "West Talora",
  "Granton Ridge",
  "Maplehurst",
  "Claywater",
  "Linden Trace",
  "Briarfield",
  "East Ladera",
  "Hawthorne Bluffs",
  "Summershade",
  "Juniper Creek",
  "Coralridge",
  "New Verdan",
  "Redgrove",
  "Montelake",
  "Sierra Hollow",
  "Baymarsh",
  "Willowford",
  "Maravilla Springs",
  "Stonebrook",
  "Delaro Park",
  "Hollendale",
  "Ironwood Heights",
  "Solara Glen",
  "Bayshore Haven",
  "Tamarisk Hills",
  "Cedarwyn",
  "Orchard Bend",
  "Rosehollow",
  "Clearbrook",
  "Meadowspire",
  "Falconridge",
  "North Arroya",
  "Sunmere",
  "Riverlyn",
  "Driftwood Bay",
  "Highvale",
  "Golden Trace"
]


let fictional_arr = []
let US_arr = []

for (let i = 0; i < US_cities.length;i++){
  fictional_arr.push(i)
  US_arr.push(i)
}

shuffle(fictional_arr);
shuffle(US_arr);

let US_list_shuff = []
let nat_list_shuff = []
let unshuffled_img_type_learn = []

for (let i = 0; i < 30;i++){
  US_list_shuff.push(US_cities[US_arr[i]])
  shuffled_img_type_US.push("US")
  nat_list_shuff.push(fictional_cities[fictional_arr[i]])
  shuffled_img_type_fictional.push("Fictional")
}


shuffled_img_typeTotal = shuffled_img_type_US.concat(shuffled_img_type_fictional)

first_phase_unshuffled = US_list_shuff.slice(0,15).concat(nat_list_shuff.slice(0,15))
unshuffled_img_type_learn = shuffled_img_typeTotal.slice(0,15).concat(shuffled_img_typeTotal.slice(30,45))

new_img_unshuffled = US_list_shuff.slice(15).concat(nat_list_shuff.slice(15))
unshuffled_img_type = unshuffled_img_type_learn.concat(shuffled_img_typeTotal.slice(15,30),shuffled_img_typeTotal.slice(45))


var recognition_unshuffled = first_phase_unshuffled.concat(new_img_unshuffled);
let slice_recognition_list = []
let recognition_list = [];
let recog_arr = [];

let new_old_unshuff = []
let new_old = []
let shuffled_img_type = []




for (let i = 0; i < recognition_unshuffled.length; i++) {
  recog_arr.push(i);
  if (i < 30){
    new_old_unshuff.push("OLD")
  }else {
    new_old_unshuff.push("NEW")
  }
}
shuffle(recog_arr)
for (let i = 0; i < recognition_unshuffled.length;i++){
  recognition_list.push(recognition_unshuffled[recog_arr[i]])
  new_old.push(new_old_unshuff[recog_arr[i]])
  shuffled_img_type.push(unshuffled_img_type[recog_arr[i]])
}

let learn_unshuffled = first_phase_unshuffled
let foil_unshuffled = new_img_unshuffled

let shuffled_learn_img_type = []
let learn_img = [];
let learn_arr = [];
for (let i = 0; i < learn_unshuffled.length; i++) {
  learn_arr.push(i);
}
shuffle(learn_arr)
for (let i = 0; i < learn_unshuffled.length;i++){
  learn_img.push(learn_unshuffled[learn_arr[i]])
  shuffled_learn_img_type.push(unshuffled_img_type_learn[learn_arr[i]])
}

let foil_img = [];
let foil_arr = [];
for (let i = 0; i < foil_unshuffled.length; i++) {
  foil_arr.push(i);
}
shuffle(foil_arr)
for (let i = 0; i < foil_unshuffled.length;i++){
  foil_img.push(foil_unshuffled[foil_arr[i]])
}




