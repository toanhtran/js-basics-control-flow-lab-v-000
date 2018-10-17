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

let isCity = 'NYC';

function ternaryCheckCity() {
  const isCity === 'NYC' ? 'Ok, sounds good.'  : 'No go.'

}

const tip ='other'
let response;

function switchOnCharmFromTip() {
  switch (tip) {
    case generous:
      response = 'Thank you so much.';
    case notgenerous:
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
    break;
  }

}
