function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

function create_image_learn(presented_img, trial_num) {
  return parse(`<div id=trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">Image ${trial_num + 1} / ${presented_img.length}</div><img style='position:absolute;top: 50%;right: 50%;transform: translate(50%, -50%);z-score:0;width: 400px;height: 400px;' src='../static/images/%s' height='250'></style>`
  ,presented_img[trial_num])
  
}

function create_image_recognition(presented_img, trial_num) {
  return parse(`<div id=trial-counter" style="position: absolute; top: 20px; left: 20px; font-size: 24px; font-weight: bold;">Image ${trial_num + 1} / ${recognition_list.length}</div><p style='position:absolute;top: 20%;right: 50%;transform: translate(50%, -50%);font-size: 25px;color:black;'>Is this image <strong>Old</strong> or <strong>New</strong>?</p><img style='position:absolute;top: 50%;right: 50%;transform: translate(50%, -50%);z-score:0;width: 400;height: 400px;' src='../static/images/%s' height='250'></style><p style='position:absolute;top: 80%;right: 50%;transform: translate(50%, -50%);font-size: 25px;color:black;'>Press '1' for <strong>Old</strong> and '2' for <strong>New</strong>.</p>`
  ,presented_img[trial_num])
  
}

//Learning phase with color cross in the middle
function create_learningcolor_trial(trial_num,color) {
  return parse("<p style='position:absolute;top: 50%;right: 50%;transform: translate(50%, -50%);font-size: 125px;color: %s;'>\u002B</p>"
  ,color)
}

//learning phase
function create_learning_trial(room_choiceStims_left,room_choiceStims_right,trial_num) {
  return parse("<p style='position:absolute;top: 50%;right: 50%;transform: translate(50%, -50%);font-size: 125px;color:black;'>\u002B</p><img style='position:absolute;top: 50%;right: 70%;transform: translate(50%, -50%);z-score:0;width: 350px;height: 350px;' src='../static/images/%s' height='350'> <img style='position:absolute;top: 50%;right: 30%;transform: translate(50%, -50%);z-score:0;width: 350px;height: 350px;' src='../static/images/%s' height='350'><br><style>body {background-color: #ffff;}</style>"
  ,room_choiceStims_left[trial_num],room_choiceStims_right[trial_num])
}

//Direct Memory phase
function create_direct_trial(room_choice_up,room_choiceStims_left,room_choice_mid,room_choiceStims_right,trial_num) {
  return parse("<img style='position:absolute;top: 30%;right: 50%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;' src='../static/images/%s' height='250'><img class = 'bottom' style='position:absolute;top: 80%;right: 75%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;visibility: hidden;' src='../static/images/%s' height='250'><img class = 'bottom' style='position:absolute;top: 80%;right: 50%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;visibility: hidden;' src='../static/images/%s' height='250'> <img class = 'bottom' style='position:absolute;top: 80%;right: 25%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;visibility: hidden;' src='../static/images/%s' height='250'><br><style>body {background-color: #ffff;}</style>"
  ,room_choice_up[trial_num],room_choiceStims_left[trial_num],room_choice_mid[trial_num],room_choiceStims_right[trial_num])
}

//Shortest path judgement
function create_shortestpath_trial(room_choice_up,room_choiceStims_left,room_choiceStims_right,trial_num) {
  return parse("<img style='position:absolute;top: 30%;right: 50%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;' src='../static/images/%s' height='250'><img class = 'bottomshortest' style='position:absolute;top: 80%;right: 65%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;visibility: hidden;' src='../static/images/%s' height='250'><img class = 'bottomshortest' style='position:absolute;top: 80%;right: 35%;transform: translate(50%, -50%);z-score:0;width: 250px;height: 250px;visibility: hidden;' src='../static/images/%s' height='250'><br><style>body {background-color: #ffff;}</style>"
  ,room_choice_up[trial_num],room_choiceStims_left[trial_num],room_choiceStims_right[trial_num])
}

//plus sign
function create_memory_ten() {
  return parse("<p style='position:absolute;top: 50%;right: 50%;transform: translate(50%, -50%);font-size: 125px;color: black;'>\u002B</p>")
}


function create_memory_phase(blue_val,room_color,n_memory) {
  room_timeline = []
  for (var i = 0; i < n_memory; i++) {
    room_timeline.push({stimulus:create_memory_trial(),prompt:parse("<br><br><h2>Press 'N' if new, 'O' if old</h1><style>body {background-color: %s;}</style>",blue_val,room_color)})
  }
  return room_timeline
}


function add_room(room,room_timeline) {
  for (var i = 0; i < 4; i++) {
    room_timeline.push(room[i])
} return room_timeline

}

//function for attentioncheck
function attentioncheck_learningphase(learn_phase,sfa,curr_blue_trial,n_blue_rounds,thebreak,thecrossant,thecrossant_black,thecrossant_break){
  if(sfa && curr_blue_trial<n_blue_rounds) {
    jsPsych.addNodeToEndOfTimeline({
      timeline: [learn_phase,learn_phase_color,thecrossant,thecrossant_black,thecrossant_break],
    }, jsPsych.resumeExperiment)
  }else if(sfa&& curr_blue_trial>=n_blue_rounds) {
    jsPsych.addNodeToEndOfTimeline({
      timeline: [thebreak],
    }, jsPsych.resumeExperiment)
  }
}

function attentioncheck(learn_phase,sfa,curr_blue_trial,n_blue_rounds,thebreak){
  if(sfa && curr_blue_trial<n_blue_rounds) {
    jsPsych.addNodeToEndOfTimeline({
      timeline: [learn_phase],
    }, jsPsych.resumeExperiment)
  }else if(sfa&& curr_blue_trial>=n_blue_rounds) {
    jsPsych.addNodeToEndOfTimeline({
      timeline: [thebreak],
    }, jsPsych.resumeExperiment)
  }else if(warning<=2&& curr_blue_trial<n_blue_rounds){
    jsPsych.addNodeToEndOfTimeline({
      timeline: [warning_page,learn_phase],
    }, jsPsych.resumeExperiment)
  }else if(warning<=2&& curr_blue_trial>=n_blue_rounds){
    jsPsych.addNodeToEndOfTimeline({
      timeline: [warning_page,thebreak],
    }, jsPsych.resumeExperiment)
  }else if(warning>2){
    jsPsych.addNodeToEndOfTimeline({
      timeline: [warning_page],
    }, jsPsych.resumeExperiment)
  }
}

//function to push the instruct
function timelinepushintro(intro,instructnames){
  for (let i = 0; i < instructnames.length; i++){
    timeline.push(intro[i],)
  }
}

function timelinepresent(intro, instructnames,directmemory_phase) {
  let timelinetemp = [];
  
  for (let i = 0; i < instructnames.length; i++) {
    timelinetemp.push(intro[i]);
  }
  timelinetemp.push(directmemory_phase);
  
  jsPsych.addNodeToEndOfTimeline({ timeline: timelinetemp }, jsPsych.resumeExperiment);
}