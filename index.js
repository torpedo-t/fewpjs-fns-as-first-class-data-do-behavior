/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// accepts an argument of a string
// return value will be a string, need to convert string to integer
// if the time is earlier than 12pm, return "Good Morning".
// if the time is between 12pm and 5pm, return "Good Afternoon".
// if the time is later than 5pm, return "Good Evening".
// body input#time
function greet() {

}

/* Write your implementation of displayMessage() */
// accepts an argument of a string
// when the function runs it should update the text inside #greeting node with the content of the argument
function displayMessage() {

}
