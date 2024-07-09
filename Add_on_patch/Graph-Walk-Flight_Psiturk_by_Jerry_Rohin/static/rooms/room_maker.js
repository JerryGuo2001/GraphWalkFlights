function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;
    return str.replace(/%s/g, () => args[i++]);
}
//var workbook = XLSX.readFile('../static/images/CI_Day1_WordList_1102020.xlsx')

// instructions
var instruct_string = "<p>Welcome to the %s room!</p><p>As before, you will view each photograph you pick up within the room. The photograph will appear on the screen, and after 1 second you will also see its resale value for 2 seconds.</p><p>You will receive a 10% commission on each photograph you pick up. Their values depend on the collection the photos belong to, some collections more or less valuable than others. You may go through several collections in one room (although you will go through each collection one at a time).</p><p>Remember both the photographs and their values. You will get the chance to choose between two photographs, and if you make the right choice (the higher value photo), you'll get double your commission for that photograph. You will also be asked to remember the photographs in a memory test.</p><p>[press the spacebar to begin]</p><style>body {background-color: %s;}</style>"


function create_room_instruct(room_color,background_color) {
  return parse(instruct_string,room_color,background_color)
}




// memory test phase
function create_blue_trial() {
  return parse("../static/images/Blue_Fabric.jpg")
}

function create_yellow_trial() {
  return parse("../static/images/Yellow_Fabric.jpg")
}

function create_prac_trial() {
  return parse("../static/images/Purple_Fabric.jpg")
}

function create_red_trial() {
  return parse("../static/images/Red_Fabric.jpg")
}
function create_blr01_trial() {
  return parse("")
}

function create_blr02_trial() {
  return parse("")
}

function create_blr03_trial() {
  return parse("")
}

function create_memory_stimulus(blue_val,curr_blue_memory,blue_background){
  return parse("<h1>%s</h1><br><br><h2>Y/N?</h2><style>body {background-color: %s;}</style>",blue_val[curr_blue_memory],blue_background)
}

//plus sign
function create_memory_ten() {
  return parse("../static/images/isi.png")
}

function create_memory_redx() {
  return parse("../static/images/redx.jpg")
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