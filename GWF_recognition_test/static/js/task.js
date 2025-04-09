var debug_mode = 0; // debug mode determines how long the blocks are, 5 sec in debug mode, 5 minutes in actual experiment
//var data_save_method = 'csv_server_py';
var data_save_method = 'csv_server_py';

// Will be set to true when experiment is exiting fullscreen normally, to prevent above end experiment code
var normal_exit = false;
var window_height = window.screen.height;


//this is to test if the user leave the webpage
var detectfocus=0
var isinfocus=1
document.addEventListener('mouseleave', e=>{
  detectfocus=detectfocus+1
  isinfocus=0
  //this is to see if user are focus or not
})
document.addEventListener('visibilitychange', e=>{
   if (document.visibilityState === 'visible') {
 //report that user is in focus
 isinfocus=1
  } else {
  detectfocus=detectfocus+1
  isinfocus=0
  //this is to see if user are focus or not
  }  
})

// Randomly generate an 8-character alphanumeric subject ID via jsPsych
var subject_id = jsPsych.randomization.randomID(8);

// Load PsiTurk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);
var condition = psiturk.taskdata.get('condition') + 1; // they do zero-indexing

var timeline = []

//welcome page
var welcome = {
  type: 'survey-html-form',
  html: "<label for='worker_id'>Enter your Prolific Worker ID. Please make sure this is correct! </label><br><input type='text' id='worker_id' name='worker_id' required><br><br>",
  on_finish: function (data) {
    data.trial_type = "id_enter"
    window.useridtouse=data.responses
    window.useridtouse = useridtouse.split('"')[3];
    subject_id=useridtouse
  }
}
//welcome page end

var get_ready = {
  type: 'html-keyboard-response',
  stimulus: "<p style='font-size:60px'><b>Get Ready!</b></p>",
  stimulus_duration: 1500,
  trial_duration: 1500,
  choices: jsPsych.NO_KEYS,
  on_finish: function(data) {
    // Add a custom trial type and stimulus
    data.trial_type = 'instruct_dir_4';
    data.stimulus = 'instruct';
  }
};


//fullscreen start

var enterFullscreen = {
  type: 'html-button-response',
  stimulus: `
        <style>
            ul {
                list-style-type: disc;
                margin: 20px 0;
                padding-left: 100px;
                text-align: left;
            }
            li {
                margin-bottom: 15px;
                font-size: 18px;
                line-height: 1.6;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
                text-align: center;
            }
        </style>
        <h3 style='text-align: center'><strong>Thank you for your participation in this study. Please:</strong></h3>
        <br />
        <ul>
            <li>Follow the instructions for each task and try your best to perform well.</li>
            <li>Maximize your browser and focus completely on the task without any distractions.</li>
            <li><strong>DO NOT</strong> take notes during the experiment, as this interferes with our ability to accurately measure the learning process.</li>
            <li><strong>DO NOT</strong> participate if you feel you cannot fully commit to these requirements.</li>
        </ul> <br />
        <p>When you are ready to take the experiment, click 'Enter Fullscreen' to begin.</p> <br />
    `,
  choices: ['Enter Fullscreen'],
  on_finish: function(data) {
      // Trigger fullscreen mode when the button is clicked
      data.trial_type = "fullscreen"
      data.stimulus = "fullscreen"
      document.documentElement.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
  }
};

//fullscreen end


//Instruction page
function createinstruct(instruct_1,number){
  var intro={
    type: 'html-keyboard-response',
    choices: ['space'],
    stimulus: instruct_1,
    on_finish: function (data) {
      data.trial_type = 'intro_'+number;
      data.stimulus='instruct'
    }
  }
  return intro
}

function createfulintro(instruct,instructnames){
  intro={}
for (let i = 0; i < instructnames.length; i++) {
  instructname=instructnames[i]
  intro[i] = createinstruct(instruct[instructname],i)
}return intro
}


intro_learn=createfulintro(instruct,instructnames)
intro_dir=createfulintro(dir_instruct,dir_instructnames)

timeline.push(welcome, enterFullscreen)
timelinepushintro(intro_learn,instructnames)
timeline.push(get_ready)

//Instruction page end


// learning phase

var warning_page={
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  trial_duration:3000,
  stimulus: '<h1 style="color: red;">Please make sure to respond to the questions.</h1><br><h1 style="color: red;">Continued failure to respond will</h1><br><h1 style="color: red;">result in the task ending early</h1><br><h1 style="color: red;">The experiment will resume in 3 seconds</h1>',
  on_finish: function(data) {
    data.trial_type='warning_page'
    data.stimulus='warning'
    warning=warning+1
  }
}

function sum(arr) {
  return arr.reduce((acc, num) => acc + num, 0)
}
let remainingtimeline = []

let probe_num = NaN
let probe_name = NaN
let prob_list=[]
let prob_num = NaN
let prob_index=0
function get_probe_num(){
  prob_num = Math.floor(Math.random()*5)+1
  prob_list.push(prob_num)
} 
var probe_trial_num = null
function get_probe_trial() {
  probe_trial_num = Math.floor(Math.random()*15)
  probe_name = "memorable"
  if (probe_trial_num == 1) {
    probe_name = "unique"
  } else if (probe_trial_num == 2) {
    probe_name = "unique"
  } else if (probe_trial_num == 3) {
    probe_name = "memorable"
  } return probe_name, probe_trial_num
}
get_probe_trial()
let learntrial = -1
function get_learn_trial() {
  learntrial += 1
}
let recogtrial = -1
function get_recog_trial() {
  recogtrial += 1
}
let trial_num = 0
let instant_index = 0
function start_probe(img,trial) {
  get_probe_num()
  console.log(prob_list[instant_index])
  length.push(timeline.length)
  var probe_trial={
    type: 'html-keyboard-response',
      choices: ['1','2','3','4','5'],
      stimulus: `
        <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
          Image ${trial + 1} / ${img.length}
        </div>
        <div id="realistic" style="max-width: 1200px; margin: 100px auto; text-align: center;">
          <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${img[trial]}' height='250'></style>
          <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
            Please press the ${prob_list[instant_index]} option on your keyboard.
          </p>
          <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
            <br>
            <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
              <p>(1) Not at all ${probe_name}</p>
              <p>(2) Slightly ${probe_name}</p>
              <p>(3) Moderately ${probe_name}</p>
              <p>(4) Very ${probe_name}</p>
              <p>(5) Extremely ${probe_name}</p>
            </div><br><br>
          <strong>Press the number key that corresponds with what is said above.</strong>
          </p>
        </div>
      `,
      response_ends_trial: true,
      on_finish: function(data) {
        data.stimulus = img[trial]
        data.trial_type = 'probe_rating';
        data.probe = data.key_press - 48
        console.log(data.probe)
        console.log(prob_list[prob_index])
        if (prob_list[prob_index] == data.key_press - 48) {
          data.probe_accuracy = 1
        } else{
          data.probe_accuracy = 0
          warning +=1
          if (warning < 4){
            console.log("Wrong")
            // jsPsych.finishTrial()
            // jsPsych.endExperiment()
            // timeline.splice(length[prob_index]+1,0,warning_page)
            // remainingtimeline = timeline.splice(length[prob_index]+1)
            // jsPsych.init({
            //   timeline: remainingtimeline,
            //   preload_images: all_images,
            //   max_load_time: 600000
            // })
          }else {
            // timeline.splice(length[prob_index]+2,0,TaskFailed)
            jsPsych.finishTrial()
            jsPsych.endExperiment()
          }
          
        }
        prob_index++
        console.log(prob_list[prob_index])
      } 
    
  }
  instant_index += 1
  timeline.push(probe_trial)
}
var length = []

TaskFailed = {
  type: 'html-keyboard-response',
  stimulus: '<p>Unfortunately, you do not qualify to continue this experiment.</p>' +
            '<p>Please press <strong>Escape</strong> to close the window. You will be paid for your time up to now.</p>',
  choices: ['Esc'],
  on_finish: function(data){
    window.close();
  }
};

for (i=0;i<num_learn_trials;i++) {
  get_probe_trial()
  var learn_phase = {
    type: 'html-keyboard-responsefl',
    choices: jsPsych.NO_KEYS,
    response_ends_trial: false,
    stimulus:create_image_learn(learn_img,trial_num),
    stimulus_duration:3000,
    trial_duration:3000,
    on_finish: function(data) {
      get_learn_trial()
      console.log(learn_img[learntrial])
      data.trial_type = 'learn_phase';
      data.stimulus= learn_img[learntrial]
      data.image_type = shuffled_learn_img_type[learntrial]
      sfa=1
    }
  }
  timeline.push(learn_phase)
  var familiar = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4','5'],
    stimulus: `
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${trial_num + 1} / ${learn_img.length}
      </div>
      <div id="familiar" style="max-width: 1200px; margin: 100px auto; text-align: center;">
        <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${learn_img[trial_num]}' height='250'></style>
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
         How familiar is this image on a scale of 1 to 5 (e.g., have you seen or heard of this place before)? 
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
            <p>(1) Not at all familiar</p>
            <p>(2) Slightly familiar</p>
            <p>(3) Moderately familiar</p>
            <p>(4) Very familiar</p>
            <p>(5) Extremely familiar</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    response_ends_trial: true,
    on_finish: function(data) {
      console.log(learntrial)
      data.stimulus= learn_img[learntrial]
      data.trial_type = 'familiar_rating';
      data.rating = data.key_press - 48
    } 
  }
  timeline.push(familiar);
  if (probe_trial_num == 1){
    start_probe(learn_img,trial_num)
  }
  var uniqueness = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4','5'],
    stimulus: `
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${trial_num + 1} / ${learn_img.length}
      </div>
      <div id="unique" style="max-width: 1200px; margin: 100px auto; text-align: center">  
        <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${learn_img[trial_num]}' height='250'></style>
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
          How unique is the image on a scale of 1 to 5?
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
            <p>(1) Not at all unique</p>
            <p>(2) Slightly unique</p>
            <p>(3) Moderately unique</p>
            <p>(4) Very unique</p>
            <p>(5) Extremely unique</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    response_ends_trial: true,
    on_finish: function(data) {
      data.stimulus= learn_img[learntrial]
      data.trial_type = 'unique_rating';
      data.rating = data.key_press - 48
    } 
  }
  timeline.push(uniqueness);
  if (probe_trial_num == 2){
    start_probe(learn_img,trial_num)
  }
  var memorability = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4','5'],
    stimulus: `
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${trial_num + 1} / ${learn_img.length}
      </div>
      <div id="memorable" style="max-width: 1200px; margin: 100px auto; text-align: center;">
        <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${learn_img[trial_num]}' height='250'></style>
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
          How memorable is the image on a scale of 1 to 5?
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
            <p>(1) Not at all memorable</p>
            <p>(2) Slightly memorable</p>
            <p>(3) Moderately memorable</p>
            <p>(4) Very memorable</p>
            <p>(5) Extremely memorable</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    response_ends_trial: true,
    on_finish: function(data) {
      data.stimulus= learn_img[learntrial]
      data.trial_type = 'memorable_rating';
      data.rating = data.key_press - 48
    } 
  }
  timeline.push(memorability);
  if (probe_trial_num == 3){
    start_probe(learn_img,trial_num)
  }
  let thebreak= {
    type: 'html-keyboard-response',
    choices:jsPsych.NO_KEYS,
    trial_duration: 400,
    stimulus:create_memory_ten(),
    on_finish: function(data) {
      data.trial_type='thebreak'
      data.stimulus = 'break'
    }
  }
  timeline.push(thebreak);
  trial_num += 1
}

timelinepushintro(intro_dir,dir_instructnames)
timeline.push(get_ready)

let recog_trial_num = 0
let on_finish_num = 0
let correctResp = []

let wrongbreak= {
  type: 'html-keyboard-response',
  choices:jsPsych.NO_KEYS,
  trial_duration: 400,
  stimulus:create_memory_ten()
}

for (i=0;i<num_recognition_trials;i++){
  get_probe_trial()
  var second_learn_phase = {
    type: 'html-keyboard-responsefl',
    choices: jsPsych.NO_KEYS,
    response_ends_trial: false,
    stimulus:create_image_learn(recognition_list,recog_trial_num),
    stimulus_duration:3000,
    trial_duration:3000,
    on_finish: function(data) {
      get_recog_trial()
      console.log(recognition_list[recogtrial])
      data.trial_type = 'second_learn_phase';
      data.stimulus= recognition_list[recogtrial]
      data.image_type = shuffled_img_type[recogtrial]
      data.new_old = new_old[recogtrial]
      sfa=1
    }
  }
  timeline.push(second_learn_phase)
  var realistic = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4','5'],
    stimulus: `
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${recog_trial_num + 1} / ${recognition_list.length}
      </div>
      <div id="realistic" style="max-width: 1200px; margin: 100px auto; text-align: center;">
        <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${recognition_list[recog_trial_num]}' height='250'></style>
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
          How realistic is this image on a scale of 1 to 5 (e.g., do you think this place exists in the real world)?
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
            <p>(1) Not at all realistic</p>
            <p>(2) Slightly realistic</p>
            <p>(3) Moderately realistic</p>
            <p>(4) Very realistic</p>
            <p>(5) Extremely realistic</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    response_ends_trial: true,
    on_finish: function(data) {
      data.stimulus= recognition_list[recogtrial]
      data.trial_type = 'realistic_rating';
      data.rating = data.key_press - 48
    } 
  }
  timeline.push(realistic);
  if (probe_trial_num == 1){
    start_probe(recognition_list,recog_trial_num)
  }
  var uniqueness = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4','5'],
    stimulus: `
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${recog_trial_num + 1} / ${recognition_list.length}
      </div>
      <div id="unique" style="max-width: 1200px; margin: 100px auto; text-align: center">  
        <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${recognition_list[recog_trial_num]}' height='250'></style>
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
          How unique is the image on a scale of 1 to 5?
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
            <p>(1) Not at all unique</p>
            <p>(2) Slightly unique</p>
            <p>(3) Moderately unique</p>
            <p>(4) Very unique</p>
            <p>(5) Extremely unique</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    response_ends_trial: true,
    on_finish: function(data) {
      data.stimulus= recognition_list[recogtrial]
      data.trial_type = 'pt2_unique_rating';
      data.rating = data.key_press - 48
    } 
  }
  timeline.push(uniqueness);
  if (probe_trial_num == 2){
    start_probe(recognition_list,recog_trial_num)
  }
  var memorability = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4','5'],
    stimulus: `
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${recog_trial_num + 1} / ${recognition_list.length}
      </div>
      <div id="memorable" style="max-width: 1200px; margin: 100px auto; text-align: center;">
        <img style='width: 350px;height: 350px;margin-bottom:100px' src='../static/images/${recognition_list[recog_trial_num]}' height='250'></style>
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
          How memorable is the image on a scale of 1 to 5?
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 28px; margin-top: 20px;">
            <p>(1) Not at all memorable</p>
            <p>(2) Slightly memorable</p>
            <p>(3) Moderately memorable</p>
            <p>(4) Very memorable</p>
            <p>(5) Extremely memorable</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    response_ends_trial: true,
    on_finish: function(data) {
      data.stimulus= recognition_list[recogtrial]
      data.trial_type = 'memorable_rating';
      data.rating = data.key_press - 48
    } 
  }
  timeline.push(memorability);
  if (probe_trial_num == 3){
    start_probe(recognition_list,recog_trial_num)
  }
  var img_recognition = {
    type: 'html-keyboard-response',
    choices: ['1','2'],
    response_ends_trial: true,
    stimulus:create_image_recognition(recognition_list,recog_trial_num),
    stimulus_duration:10000,
    trial_duration:10000,
    on_finish: function(data) {
      data.trial_type = 'recognition_phase';
      data.stimulus= recognition_list[recog_trial_num]
      if (data.key_press == 49){
        data.response = "old"
      } else if (data.key_press == 50){
        data.response = "new"
      } else {
        data.response = "MISSED"
      }
      if(data.key_press == 49 && new_old[on_finish_num] == "OLD" || data.key_press == 50 && new_old[on_finish_num] == "NEW"){
        data.correct = 1
        correctResp.push(1)
        data.accuracy = sum(correctResp) / correctResp.length
      } else if (data.key_press == 49 && new_old[on_finish_num] == "NEW" || data.key_press == 50 && new_old[on_finish_num] == "OLD"){
        data.correct = 0 
        correctResp.push(0)
        data.accuracy = sum(correctResp) / correctResp.length
      } else {
        data.correct = NaN
        correctResp.push(0)
        data.accuracy = sum(correctResp) / correctResp.length
      }
      on_finish_num += 1
    }
  }
  recog_trial_num += 1
  timeline.push(img_recognition)
  var recog_confidence = {
    type: 'html-keyboard-response',
    choices: ['1','2','3','4'],
    response_ends_trial: true,
    stimulus:`
      <div id="trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">
        Image ${recog_trial_num + 1} / ${recognition_list.length}
      </div>
      <div id="confidence" style="max-width: 1000px; margin: 100px auto; text-align: center;">
        <p style="font-size: 32px; line-height: 1.6; font-weight: bold; margin-bottom: 20px;">
          How confident are you in your response?
        </p>
        <p style="font-size: 20px; line-height: 1.6; margin-bottom: 30px;">
          <br>
          <div class='test' style="display: flex; justify-content: space-around; align-items: center; text-align: center; width: 100%; font-size: 30px; margin-top: 20px;">
            <p>(1) Not at all confident</p>
            <p>(2) Slightly confident</p>
            <p>(3) Moderately confident</p>
            <p>(4) Very confident</p>
          </div><br><br>
        <strong>Press the number key that corresponds with your rating.</strong>
        </p>
      </div>
    `,
    stimulus_duration:10000,//5 second for now, we will discuss it 
    trial_duration:10000,//5 second for now 
    on_finish: function (data){
      data.trial_type = 'confidence';
      data.stimulus= 'confidence'
      data.confidence = data.key_press - 48
    }
  }
  timeline.push(recog_confidence);
}


// final thank you
var thank_you = {
  type: 'html-keyboard-response',
  choices: ['space'],
  stimulus: "<p> Congratulations, you are all done!</p><p>The secret code to enter at the beginning screen is: AJFHBG897</p><p> Please make sure to submit the HIT and email uciccnl@gmail.com if you had any issues! </p>",
  on_finish: function (data) {
    data.trial_type = 'thank_you';
    data.stimulus = 'all_done'
    data.detectfocus = detectfocus;
    data.warning = warning
    save_data(true)
  }
}

timeline.push(thank_you);

//time line here

jsPsych.init({
  timeline: timeline,
  preload_images: all_images,
  max_load_time: 600000,
  on_finish: function () {
    /* Retrieve the participant's data from jsPsych */
    // Determine and save participant bonus payment
    psiturk.recordUnstructuredData("subject_id", subject_id);
    save_data(true)
  },
})
