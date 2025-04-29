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
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 55px;margin-bottom:40px'><b>Welcome!</b></p><p style ='font-size: 50px;line-height:1.5'>Today, you will see various images. For each image, you will answer questions and rate how familiar, unique, and memorable they are.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
// instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>For example, you will first be presented with an image like the one below for 3 seconds.</p><br /><img src= '../static/images/img_manmade_practice.png' width='200' height='200'></img><br /><br><p style ='font-size: 50px;line-height:1.5'>During this time, your job is to try to remember the image to the best of your ability.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will use your keyboard to press the number that corresponds with your rating for each question. The rating scale ranges from 1-5.<br /><br />Please use the <strong>entire scale</strong>–-in other words, all images should not get the same ratings.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
//instruct_4="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>After all the images are presented, you will see a list of images containing both the old images you studied and new ones as well. You will choose whether the image is new or old, so try to memorize the images to the best of your ability.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",


instructnames = ["instruct_1","instruct_2"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2} // IF you want to add or decrease number of page for instruct, just delete or add var here.


//Text for direct memory instruction
instruct_dir_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>For this next portion, you will continue to make image ratings, but we will also test you on your memory for what you saw before.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>On each trial, you will be presented with an image. In addition to providing ratings as you’ve done before, you will be asked to indicate if this is an image you’ve seen before in the previous phase, or a new image you are seeing for the first time.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
instruct_dir_3 = "<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>If the image is <strong>OLD</strong> (what you have seen before) press '1'. If it is <strong>NEW</strong> press '2'. If you are unsure, make your best guess. You will also be asked about how confident you are in your response.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to continue]</p>",
// instruct_dir_4 = "<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 50px;line-height:1.5'>You will only have a couple of seconds to respond to every trial, so try to respond as quickly and as accurately as possible.</p><p style= 'font-size:25px;margin-top:100px'>[press the spacebar to start]</p>",
dir_instructnames = ["instruct_dir_1","instruct_dir_2","instruct_dir_3"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1,instruct_dir_2,instruct_dir_3} //same for above

//learning phase

// Survey Questions
let survey_questions = `
<form id="survey">
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

<p>Some of the rating metrics can be highly subjective. What was your thought process or method for how you rated the images for the following metrics?
<span style="color: red;">*</span></p>
<textarea id="easier" name="easier" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>What was your thought process or method for how you rated the images for the following metrics?</p>
<p>Familiar: <span style="color: red;">*</span></p>
<textarea id="familiar" name="familiar" rows="3" style="width: 70%;" required></textarea>

<p>Memorable: <span style="color: red;">*</span></p>
<textarea id="memorable" name="memorable" rows="3" style="width: 70%;" required></textarea>

<p>Unique: <span style="color: red;">*</span></p>
<textarea id="unique" name="unique" rows="3" style="width: 70%;" required></textarea>

<p>Realistic: <span style="color: red;">*</span></p>
<textarea id="realistic" name="realistic" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Have you participated in a similar study on another platform? If so, please provide the platform name (Mturk, Prolific, etc.) and your user ID for that platform. <br>PLEASE BE HONEST--your compensation will not depend on your answer to this question. <span style="color: red;">*</span></p>
<textarea id="similar" name="similar" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Is there anything you would like the experimenters to know? For instance, was the task too difficult, boring, etc?</p>
<textarea id="comments" name="comments" rows="3" style="width: 70%;"></textarea>
<br><br></form>`;
//


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

let shuffled_img_type1 = []
let shuffled_img_type2 = []
let shuffled_img_type3 = []
let shuffled_img_type4 = []
let shuffled_img_typeTotal = []


let US_cities = [
  "huntsville",
  "sitka",
  "bisbee",
  "hotsprings",
  "healdsburg",
  "boulder",
  "cornwall",
  "delawarecity",
  "westpalmbeach",
  "athens",
  "hilo",
  "coeurdalene",
  "peoria",
  "carmel",
  "okoboji",
  "abilene",
  "bowlinggreen",
  "shreveport",
  "barharbor",
  "assateagueisland",
  "gloucester",
  "manistee",
  "orr",
  "natchez",
  "lakeoftheozarks",
  "livingston",
  "alliance",
  "gardnerville",
  "hanover",
  "capemay",
  "albuquerque",
  "watkinsglen",
  "duck",
  "medora",
  "cleveland",
  "yukon",
  "sisters",
  "newhope",
  "newport",
  "follybeach",
  "custer",
  "gatlinburg",
  "sanantonio",
  "parkcity",
  "barnard",
  "leesburg",
  "sammamish",
  "berkeleysprings",
  "racine",
  "cody"
];

let US_image_choose_index =[]
let image_choose_index =[]
for (i=1;i<18;i++){
  image_choose_index.push(i)
}
shuffle(image_choose_index)

for (i=1;i<16;i++){
  if (i<10){
    img_mm_list.push(`Fictional_Cities_List/img_manmade_0${i}.png`)
    unshuffled_img_type1.push("MM")
  } else {
    img_mm_list.push(`Fictional_Cities_List/img_manmade_${i}.png`)
    unshuffled_img_type1.push("MM")
  }
}
let US_nat_list = []
let img_nat_list = []
for (i=1;i<16;i++){
  if (i<10){
    img_nat_list.push(`Fictional_Cities_List/img_natural_0${i}.png`)
    unshuffled_img_type2.push("NAT")
  } else {
    img_nat_list.push(`Fictional_Cities_List/img_natural_${i}.png`)
    unshuffled_img_type2.push("NAT")
  }
}


let nat_arr = []
let mm_arr = []

for (let i = 0; i < img_mm_list.length;i++){
  mm_arr.push(i)
  nat_arr.push(i)
}

shuffle(mm_arr);
shuffle(nat_arr);

let US_mm_list = []
let mm_list_shuff = []
let nat_list_shuff = []
let unshuffled_img_type_learn = []

for (let i = 0; i < img_mm_list.length;i++){
  mm_list_shuff.push(img_mm_list[mm_arr[i]])
  shuffled_img_type1.push(unshuffled_img_type1[mm_arr[i]])
  nat_list_shuff.push(img_nat_list[nat_arr[i]])
  shuffled_img_type2.push(unshuffled_img_type2[nat_arr[i]])
}

// US CITIES REAL



let US_mm_cities_formatted = []
let US_nat_cities_formatted = []
for (i=0;i<50;i++){
  US_mm_cities_formatted.push(`US_Cities_List/mm_${US_cities[i]}.png`)
  US_nat_cities_formatted.push(`US_Cities_List/nat_${US_cities[i]}.png`)
  image_choose_index.push(i)
}
shuffle(image_choose_index)

for (i=1;i<16;i++){
  US_mm_list.push(US_mm_cities_formatted[i])
  unshuffled_img_type3.push("MM")
}

shuffle(image_choose_index)

for (i=1;i<16;i++){
  US_nat_list.push(US_nat_cities_formatted[i])
  unshuffled_img_type4.push("NAT")
}


let US_mm_list_shuff = []
let US_nat_list_shuff = []
let unshuffled_US_type_learn = []


let US_nat_arr = []
let US_mm_arr = []

for (let i = 0; i < US_mm_list.length;i++){
  US_mm_arr.push(i)
  US_nat_arr.push(i)
}

shuffle(US_mm_arr);
shuffle(US_nat_arr);

for (let i = 0; i < US_mm_list.length;i++){
  US_mm_list_shuff.push(US_mm_list[US_mm_arr[i]])
  shuffled_img_type3.push(unshuffled_img_type3[US_mm_arr[i]])
  US_nat_list_shuff.push(US_nat_list[US_nat_arr[i]])
  shuffled_img_type4.push(unshuffled_img_type4[US_nat_arr[i]])
}
//

shuffled_img_typeTotal = shuffled_img_type1.concat(shuffled_img_type2,shuffled_img_type3,shuffled_img_type4)

first_phase_unshuffled = mm_list_shuff.slice(0,7).concat(nat_list_shuff.slice(0,8), US_mm_list_shuff.slice(0,8), US_nat_list_shuff.slice(0,7))
unshuffled_img_type_learn = shuffled_img_typeTotal.slice(0,7).concat(shuffled_img_typeTotal.slice(15,23),shuffled_img_typeTotal.slice(30,38),shuffled_img_typeTotal.slice(45,52))

new_img_unshuffled = mm_list_shuff.slice(7).concat(nat_list_shuff.slice(8), US_mm_list_shuff.slice(8), US_nat_list_shuff.slice(7))
unshuffled_img_type = unshuffled_img_type_learn.concat(shuffled_img_typeTotal.slice(7,15),shuffled_img_typeTotal.slice(23,30),shuffled_img_typeTotal.slice(38,45),shuffled_img_typeTotal.slice(52,60))


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




