
console.log("Dice roller file loaded");

// Function that rolls a dice and the dice size is a parameter
// generic dice roller function 
function rollDice(diceSize = 6){
    console.log("Dice rolling function has been called with a dice size of" + diceSize); 
}

rollDice(); //diceSize is 6 
rollDice(20); //diceSize is 20 
rollDice(10000); //diceSize is 10000

// Function that rolls a dice and the dice is a 6-sided dice
// specific dice roller function that calls the generic function 

// Function that rolls a dice and the dice is a 20-sided dice 
// specific dice roller function that calls the generic function 


