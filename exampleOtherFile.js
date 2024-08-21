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

let someCoolMessage = someMessage == "oranges" ? someMessage.substring(0, 2).toLocaleUpperCase() : "Default message here"; 
// 									"Bananas!" . "Ba"			."BA"

console.log(someCoolMessage);
 
// toLocaleUpperCase is a method that is attached to the string 
// a substring returns a portion of the string based on the given position 

if (someMessage == "oranges") { 
	let someCoolMessage = someMessage.substring(0, 2).toLocaleUpperCase()
} else {
	let someCoolMessage = "Default message here";
}