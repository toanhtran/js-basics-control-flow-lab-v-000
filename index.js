// Write your code in this file!
let numOfFeet;
let message;
function scuberGreetingForFeet(numOfFeet) {

  if (numOfFeet <= 400) {
    message = 'This one is on me!';
  } else if (numOfFeet > 2000 ) {
    message = 'I will gladly take your thirty bucks.';
  } else (numOfFeet > 2501 ){
    message = 'No can do.';
  }
}

function ternaryCheckCity() {

}

let tip;
function switchOnCharmFromTip() {
  switch (tip) {
    case generous:
      console.log('Thank you so much.');
    case notgenerous:
      console.log('Thank you');
      break;
    default:
      console.log('Bye.');
    break;
  }

}
