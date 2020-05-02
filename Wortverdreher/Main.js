"use strict";
let input = prompt("Bitte einen Satz eingeben");
let revertedChars = reverseChars(input);
reverseBySpace(input);
reverseBySpace(revertedChars);
// Funktion um Buchstaben in Satz zu spiegeln
function reverseChars(input) {
    let reverseString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reverseString += input.charAt(i);
    }
    console.log(reverseString);
    return reverseString;
}
//Funktion um  Woerter in einerm Satz zu spiegeln, anhand eines Leeszeichens
function reverseBySpace(sentece) {
    let reversedSentence = ((sentece.split(" ")).reverse()).join(" ");
    console.log(reversedSentence);
}
//# sourceMappingURL=Main.js.map