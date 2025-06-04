function scuberGreetingForFeet(someValue){
   let scuberGreetingForFeet
   if (someValue<=400){
    scuberGreetingForFeet ='This one is on me!'
    return scuberGreetingForFeet

   }
   else if (someValue > 400 && someValue < 2000){
    scuberGreetingForFeet ='That will be twenty bucks.'
    return scuberGreetingForFeet
   }
   else if (someValue>2000 && someValue<2500){
    scuberGreetingForFeet ='I will gladly take your thirty bucks.'
    return scuberGreetingForFeet
  }
  else (someValue>2500);{
    scuberGreetingForFeet ='No can do.'
    return scuberGreetingForFeet
  }

}

function ternaryCheckCity(someCity){

    someCity === 'NYC' ? (ternaryCheckCity='Ok, sounds good.') : (ternaryCheckCity='No go.')
    return ternaryCheckCity
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      switchOnCharmFromTip ='Thank you so much.'
      return switchOnCharmFromTip

    case 'not as generous':
      switchOnCharmFromTip = 'Thank you.'
      return switchOnCharmFromTip

    default:
      switchOnCharmFromTip = 'Bye.'
      return switchOnCharmFromTip




  }
}