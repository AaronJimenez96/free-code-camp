//Remember that you can't modifi const variables
/*How many character have a string*/
var myName= "Aaron"; 
let myNameLength = myName.length;
console.log(myNameLength);

/*Find the first character*/
let findFirstCharacter = myName[0];
console.log(findFirstCharacter);

/*Find the letter O*/
let findSome = myName[3];
console.log(findSome);

/*Concat variable operatar plus*/
const saySomething = "Hi "+ myName + " is good see you again!";
console.log(saySomething);

/*Concat string with plus operator*/
const myStr = "This is the start. " + "This is the end.";0
console.log(myStr);

/*Contact string with equals operator*/
myName += " Jimenez Cortes";
console.log(myName);

/*Use Bracket Notation to Find the Nth-to-Last Character in a StringPassed */
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length -2]; 
console.log(secondToLastLetterOfLastName);