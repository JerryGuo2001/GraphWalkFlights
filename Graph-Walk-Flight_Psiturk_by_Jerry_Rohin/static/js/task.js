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
intro_short=createfulintro(short_instruct,short_instructnames)

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
  stimulus_duration: 1500,
  trial_duration: 1500,
  response_ends_trial: false,
  stimulus:create_memory_ten(pluscolor[curr_learning_trial-1]),
  prompt:parse("<br><br><style>body {background-color: #ffff;}</style>"),
  on_finish: function(data) {
    data.trial_type = 'learn_phase'
    kp=data.key_press
    if(kp!=pluscheck[curr_learning_trial-1]) {
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
    thecrossant.stimulus=create_memory_ten(pluscolor[curr_learning_trial])
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
  stimulus_duration:colorStart(),
  trial_duration:colorStart(),
  on_finish: function(data) {
    data.trial_type = 'learn_phase';
    sfa=1,
    curr_learning_trial=curr_learning_trial+1,
    learn_phase.stimulus_duration=colorStart()
    learn_phase.trial_duration=colorStart()
    learn_phase.stimulus=create_learning_trial(learn_left,learn_right,curr_learning_trial)
    attentioncheck_learningphase(learn_phase,sfa,curr_learning_trial,n_learning_trial,learn_break)
  }
}

var learn_phase_color = {
  type: 'html-keyboard-responsefl',
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  stimulus:create_learningcolor_trial(learn_left,learn_right,curr_learning_trial,pluscolor[curr_learning_trial]),
  stimulus_duration:colorStop(),
  trial_duration:colorStop(),
  on_finish: function(data) {
    data.trial_type = 'learn_phase';
    sfa=1,
    learn_phase_color.stimulus_duration=colorStop()
    learn_phase_color.trial_duration=colorStop()
    learn_phase_color.stimulus=create_learningcolor_trial(learn_left,learn_right,curr_learning_trial,pluscolor[curr_learning_trial])
  }
}

var learn_phase_black = {
  type: 'html-keyboard-responsefl',
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  stimulus:create_learning_trial(learn_left,learn_right,curr_learning_trial),
  stimulus_duration:100,
  trial_duration:100,
  on_finish: function(data) {
    data.trial_type = 'learn_phase';
    sfa=1,
    learn_phase_black.stimulus_duration=100
    learn_phase_black.trial_duration=100
    learn_phase_black.stimulus=create_learning_trial(learn_left,learn_right,curr_learning_trial)
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
  on_load: function() {
    // Reveal other rooms after 500 ms
    setTimeout(function() {
      for(let i = 0;i<document.getElementsByClassName('bottom').length;i++){
        document.getElementsByClassName('bottom')[i].style.visibility = 'visible';
      }
    }, randomDelay);
  },
  on_finish: function(data) {
    data.trial_type = 'directmemory_phase';
    sfa=data.key_press,
    curr_direct_trial=curr_direct_trial+1,
    directmemory_phase.stimulus=create_direct_trial(room_direct_up,room_direct_left,room_direct_mid,room_direct_right,curr_direct_trial)
    attentioncheck(directmemory_phase,sfa,curr_direct_trial,n_direct_trial,short_break)
  }
}
//Direct Memory test end


//Shortest Path memory test
var curr_shortest_trial=0
var shortestpath_phase = {
  type: 'html-keyboard-responsefl',
  choices: ['1','2'],
  response_ends_trial: false,
  stimulus:create_shortestpath_trial(room_shortest_up,room_shortest_left,room_shortest_right,curr_shortest_trial),
  stimulus_duration:3000,
  trial_duration:3000,
  on_load: function() {
    // Reveal other rooms after 500 ms
    setTimeout(function() {
      for(let i = 0;i<document.getElementsByClassName('bottomshortest').length;i++){
        document.getElementsByClassName('bottomshortest')[i].style.visibility = 'visible';
      }
    }, randomDelay);
  },
  on_finish: function(data) {
    data.trial_type = 'shortestpath_phase';
    sfa=data.key_press,
    curr_shortest_trial=curr_shortest_trial+1,
    shortestpath_phase.stimulus=create_shortestpath_trial(room_shortest_up,room_shortest_left,room_shortest_right,curr_shortest_trial)
    attentioncheck(shortestpath_phase,sfa,curr_shortest_trial,n_shortest_trial,dir_break)
  }
}
//Shortest Path memory end

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
short_break=createbreak(intro_short,short_instructnames,shortestpath_phase)
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
