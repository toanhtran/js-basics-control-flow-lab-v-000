// Write your code in this file!

function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
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
