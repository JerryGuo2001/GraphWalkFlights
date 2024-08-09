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
  html: " <label for='worker_id'>Enter your Prolific Worker ID. Please make sure this is correct! </label><br><input type='text' id='worker_id' name='worker_id' required><br><br>",
  on_finish: function (data) {
    data.trial_type = "id_enter"
    window.useridtouse=data.responses
    window.useridtouse = useridtouse.split('"')[3];
  }
}
//welcome page end

//Instruction page
function createinstruct(instruct_1,number){
  var intro={
    type: 'html-keyboard-response',
    choices: ['space'],
    stimulus: instruct_1,
    on_finish: function (data) {
      data.trial_type = 'intro_'+number;
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
intro_mem=createfulintro(mem_instruct,mem_instructnames)
intro_dir=createfulintro(dir_instruct,dir_instructnames)

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
    warning=warning+1
  }
}

var thecrossant= {
  type: 'html-keyboard-response',
  choices: ['1','2'],
  stimulus_height: 100,
  stimulus_width: 100,
  stimulus_duration: 1000,
  trial_duration: 1000,
  response_ends_trial: false,
  stimulus:create_memory_ten(pluscolor[curr_learning_trial]),
  prompt:parse("<br><br><style>body {background-color: #ffff;}</style>"),
  on_finish: function(data) {
    data.trial_type = 'learn_phase'
    kp=data.key_press
    if(kp!=pluscheck[curr_learning_trial]) {
      if(checkfail>=checkthreshold){
        jsPsych.endCurrentTimeline(),
        jsPsych.addNodeToEndOfTimeline({
          timeline: [warning_page,learn_phase],
        }, jsPsych.resumeExperiment)
      }
      checkfail=checkfail+1
    }else{
      checkfail=0
    }
    thecrossant.stimulus=create_memory_ten(pluscolor[curr_learning_trial-1])
  }
}

function createbreak(intro_dir,instructnames,directmemory_phase){
  let thebreak= {
    type: 'html-keyboard-response',
    choices:jsPsych.NO_KEYS,
    trial_duration: 100,
    stimulus:'<p></p>',
    on_finish: function(data) {
      data.trial_type='thebreak'
      timelinepresent(intro_dir,instructnames,directmemory_phase)
    }
  }
  return thebreak
}


var curr_learning_trial=0
var learn_phase = {
  type: 'html-keyboard-responsefl',
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  stimulus:create_learning_trial(learn_left,learn_right,curr_learning_trial),
  stimulus_duration:3000,
  trial_duration:3000,
  on_finish: function(data) {
    data.trial_type = 'learn_phase';
    sfa=1,
    curr_learning_trial=curr_learning_trial+1,
    learn_phase.stimulus=create_learning_trial(learn_left,learn_right,curr_learning_trial)
    attentioncheck_learningphase(learn_phase,sfa,curr_learning_trial,n_learning_trial,learn_break)
  }
}
// learning phase end

//Direct Memory test
var curr_direct_trial=0
var directmemory_phase = {
  type: 'html-keyboard-responsefl',
  choices: ['1','2','3'],
  response_ends_trial: false,
  stimulus:create_direct_trial(room_direct_up,room_direct_left,room_direct_mid,room_direct_right,curr_direct_trial),
  stimulus_duration:3000,
  trial_duration:3000,
  on_finish: function(data) {
    data.trial_type = 'learn_phase';
    sfa=data.key_press,
    curr_direct_trial=curr_direct_trial+1,
    learn_phase.stimulus=create_direct_trial(room_direct_up,room_direct_left,room_direct_mid,room_direct_right,curr_direct_trial)
    attentioncheck(directmemory_phase,sfa,curr_direct_trial,n_direct_trial,dir_break)
  }
}
//Direct Memory test end

//Goal directed planning
function createPhase3(numberoftrial){
  let phase3 = {}
  for (let i = 0; i < numberoftrial; i++){
    if (i==numberoftrial-1){
      phase3[i] = {
        type: 'html-keyboard-response',
        choices: ['space'],
        stimulus: phasethreeroom[0],
        on_finish: function (data) {
          data.trial_type = specificline;
          wassup(),
          jsPsych.addNodeToEndOfTimeline({
            timeline: [thank_you],
          }, jsPsych.resumeExperiment)
        }
      }
    }else{
      phase3[i] = {
        type: 'html-keyboard-response',
        choices: ['space'],
        stimulus: phasethreeroom[0],
        on_finish: function (data) {
          data.trial_type = specificline;
          wassup(),
          jsPsych.addNodeToEndOfTimeline({
            timeline: [phase3[i+1]],
          }, jsPsych.resumeExperiment)
        }
      }
    }
  }
  return phase3
}



phase3=createPhase3(numberoftrial)
learn_break=createbreak(intro_dir,dir_instructnames,directmemory_phase)
dir_break=createbreak(intro_mem,mem_instructnames,phase3[0])
//Goal directed planning end

// final thank you
var thank_you = {
  type: 'html-keyboard-response',
  choices: ['space'],
  stimulus: "<p> Congratulations, you are all done!</p><p>The secret code to enter at the beginning screen is: AJFHBG897</p><p> Please make sure to submit the HIT and email mnadkarn@gmail.com if you had any issues! </p>",
  on_finish: function (data) {
    data.trial_type = 'thank_you';
    data.detectfocus = detectfocus;
    save_data(true)
  }
}


//time line here
timeline.push(welcome)
timelinepushintro(intro_learn,instructnames)
timeline.push(learn_phase)

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
