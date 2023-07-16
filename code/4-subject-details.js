// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man'
}

function showSubject() {
  alert(subject.name + subject.room)
}

function changeSubject() {
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher() {
  let newTeacher = prompt('Enter the name if the new teacher')
  subject.teacher = newTeacher
}