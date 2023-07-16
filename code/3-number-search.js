// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
  46,
  76

]

function searchNumbers() {
  let searchTarget = prompt("enter a number to search for:")
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber === Number(searchTarget)) {
      searchResult = true
    }
  }

  if(searchResult){
    alert(searchTarget + 'was found')
  }else{
    alert(searchTarget + 'was not found')
  }

  alert(searchTarget + ' found: ' + searchResult)
}
