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
intro={}
for (let i = 0; i < instructnames.length; i++) {
  instructname=instructnames[i]
  intro[i] = createinstruct(instruct[instructname],i)
}

//Instruction page end


// learning phase
var warning_page={
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  trial_duration:3000,
  stimulus:'<h1>Please make sure to respond to the questions.</h1><br><h1>Continued failure to respond will</h1><br><h1> result in the task ending early</h1><br><h1>The experiment will resume in 3 seconds</h1>',
  on_finish: function(data) {
    data.trial_type='warning_page'
    warning=warning+1
  }
}

var thecrossant= {
  type: 'image-keyboard-response',
  choices: jsPsych.NO_KEYS,
  stimulus_height: 100,
  stimulus_width: 100,
  stimulus_duration: 500,
  trial_duration: 500,
  response_ends_trial: false,
  stimulus:create_memory_ten(),
  prompt:parse("<br><br><style>body {background-color: #ffff;}</style>"),
}

function attentioncheck(learn_phase,sfa,curr_blue_trial,n_blue_rounds){
  if(sfa && curr_blue_trial<n_blue_rounds) {
    jsPsych.addNodeToEndOfTimeline({
      timeline: [thecrossant,learn_phase],
    }, jsPsych.resumeExperiment)
  }else if(sfa&& curr_blue_trial>=n_blue_rounds) {
    jsPsych.addNodeToEndOfTimeline({
      timeline: [thecrossant,phase3[0]],
    }, jsPsych.resumeExperiment)
  }else if(warning<=2&& curr_blue_trial<n_blue_rounds){
    jsPsych.addNodeToEndOfTimeline({
      timeline: [warning_page,learn_phase],
    }, jsPsych.resumeExperiment)
  }else if(warning<=2&& curr_blue_trial>=n_blue_rounds){
    jsPsych.addNodeToEndOfTimeline({
      timeline: [warning_page,phase3[0]],
    }, jsPsych.resumeExperiment)
  }else if(warning>2){
    jsPsych.addNodeToEndOfTimeline({
      timeline: [warning_page,phase3[0]],
    }, jsPsych.resumeExperiment)
  }
}
var curr_learning_trial=0
var learn_phase = {
  type: 'html-keyboard-responsefl',
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  stimulus:create_choice_trial(learn_left,learn_right,curr_learning_trial),
  stimulus_duration:3000,
  trial_duration:3000,
  on_finish: function(data) {
    data.trial_type = 'blue_learn_choice';
    sfa=1,
    curr_learning_trial=curr_learning_trial+1,
    learn_phase.stimulus=create_choice_trial(learn_left,learn_right,curr_learning_trial)
    attentioncheck(learn_phase,sfa,curr_learning_trial,n_learning_trial)
  }
}
// learning phase end


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
for (let i = 0; i < instructnames.length; i++){
  timeline.push(intro[i])
}
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
