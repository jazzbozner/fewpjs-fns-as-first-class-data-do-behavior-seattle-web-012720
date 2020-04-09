  
/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = parseInt(timeString.split(':').slice(0,1))
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour > 12 && hour < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greetingTag = document.getElementById('greeting')
  greetingTag.innerText = string
}






































// /* Given Code, don't edit */

// function handleClick() {
//   const timeString = document.getElementById('time').value
//   displayMessage(greet(timeString))
// }
// /* End Given Code, don't edit above here...*/

// /* Write your implementation of displayMessage() */
// function displayMessage(msg) {
//   document.getElementById("greeting").innerText = msg;
// }
// /* Write your implementation of greet() */
// function greet(timeStr) {
//   const hour = parseInt(timeStr, 10);
//   if ( hour < 12) return "Good Morning"
//   if ( hour > 17) return "Good Evening"
//   return "Good Afternoon"
// }

//  "12:39"
// // //   function greet(time) {
//      let intTime = time.split(':',1)
//      let parsedTime = parseInt(intTime)
// // //  if (12 <= parsedTime <= 17){
// // //     return "Good Morning"
// // // } else if (parsedTime < 12)) {
// // //     return "Good Afternoon"
// // // } else {
// // //     return  "Good Evening"
// // //   };
// // // };
