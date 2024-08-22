let someMessage = "Bananas"; 



if (someMessage) {
	console.group("Conditioning log"); 
}

if (someMessage == 'oranges') { 
	console.log("We have oranges!"); 
}

let someNumberMessage = "10";

if (someNumberMessage == 10) {
	console.log("We have 10 of the things!"); 
}

if (someNumberMessage >= 5){
	console.log("Number is greater than 5"); 
}

let someCoolMessage = someMessage == "oranges" ?
someMessage.substring(0,2).toLocaleUpperCase()
:
"Default message here"; 

// 									"Bananas!" . "Ba"			."BA"

console.log(someCoolMessage);
 
// toLocaleUpperCase is a method that is attached to the string 
// a substring returns a portion of the string based on the given position 

if (someMessage == "oranges") { 
	let someCoolMessage = someMessage.substring(0, 2).toLocaleUpperCase() + "inside the if statement"; wdw`1`
	console.log(someCoolMessage);
} else {
	// let keyword is local scope
	let someCoolMessage = "Default message here inside the else statement";
	console.log(someCoolMessage, someCoolMessage, someCoolMessage);  
}
// block scope as a concept is each of those blocks like it's all of them 

console.log("someCoolMessage is now: "  + someCoolMessage); 


let fruitChoices = ["oranges", "bananas", "mangoes"];

let fruitChoicesAsObject = {
	orange: "orange",
	bananas: "bananas",
 	mangoes: "mangoes"
}

let fruit = fruitChoicesAsObject.bananas;

switch (fruit) {
	case fruitChoicesAsObject.bananas:
		
		break;
	case fruitChoicesAsObject.oranges:

		break;
	default:
		break;
}

someMessage = "bananas";
switch (someMessage){
	case "oranges": 
	console.log("We have oranges")
	break;
	case "bananas":
	console.log("We have bananas")
	break; 
	case "mangoes":
	console.log("We have mangoes")
	break;
	default: 
	console.log("We have some exotice fruit!")
	break;
}

someCoolMessage = false; 

let someShortCircuitLogicValue = (someMessage && someCoolMessage) && "super cool short circuit logic string";  

console.log(someShortCircuitLogicValue); 


someMessage = ""; 
//								bananas			false			super cool OR operator logic string
let someOrCircuitLogicValue = someMessage || someCoolMessage || null; 

console.log(someOrCircuitLogicValue);


let newUser = {
	username: "something", 
	bio: ""
}

console.log("Saving newUser to Database, doing all pre-save checks now..."); 

let userToSave = {
	username: newUser.username,
	bio: newUser.bio || "Default bio here"
}

console.log("Pretend we've written this to the database: "); 
console.log(userToSave);

