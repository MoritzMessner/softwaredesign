let input: string = prompt("Bitte einen Satz eingeben");
let revertedChars: string = reverseChars(input);
reverseBySpace(input);
reverseBySpace(revertedChars);

// Funktion um Buchstaben in Satz zu spiegeln
function reverseChars(input: string): string {
    let reverseString: string = "";
    for (let i: number = input.length - 1; i >= 0; i--) {
        reverseString += input.charAt(i);
    }
    console.log(reverseString);
    return reverseString;
}

//Funktion um  Woerter in einerm Satz zu spiegeln, anhand eines Leeszeichens
function reverseBySpace(sentece: string): void {
    let reversedSentence: string = ((sentece.split(" ")).reverse()).join(" ");
    console.log(reversedSentence);
} 