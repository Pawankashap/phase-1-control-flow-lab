function scuberGreetingForFeet(string){
  // Write your code here!
  if (string === 199) {
    return "This one is on me!";
  }
  else if (string === 1500){
    return "That will be twenty bucks."
  }
  else if (string === 2001){
    return "I will gladly take your thirty bucks."
  }
  else if (string === 2501){
    return "No can do."
  }
}

function ternaryCheckCity(string){
  // Write your code here!
  return string==='NYC'? 'Ok, sounds good.' : 'No go.';
  
}

function switchOnCharmFromTip(string){
  // Write your code here!
  switch (string) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
  }
}