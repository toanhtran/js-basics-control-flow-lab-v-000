// Write your code in this file!
let numOfFeet;

function scuberGreetingForFeet(numOfFeet) {

  if (numOfFeet <= 400) {
    return 'This one is on me!';
  } else if (numOfFeet > 2000 ) {
    return 'I will gladly take your thirty bucks.';
  } else (numOfFeet > 2501 ){
    return 'No can do.';
  }
}

let isCity = 'NYC';

function ternaryCheckCity() {
  const isCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';

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
