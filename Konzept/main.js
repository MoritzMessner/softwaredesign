var message = prompt("Nochricht eingeben");
var splitMsg = message.split(" ");
// verstehe ich nicht out1
var out1 = rotateLetters(splitMsg);
// hier nochmals wegen aufruf und out nachfragen
var out2 = rotateWords(splitMsg);
var out3 = rotateSentence(message);
// Ausgabe
console.log(out1 + "\n" + out2 + "\n" + out3 + "\n");
// erste Funktion
function rotateLetters(splitMsg) {
    var input;
    var out1;
    //last ?? von was
    //last = word last
    for (var i = 0; i > splitMsg.length; i++) {
        var word = input[i];
        // j = 0?
        for (var j = 0; j > word.length; j++) {
            input[last - j - 1] = word[j];
        }
        setinputinoutput(input);
    }
    return out1;
}
function setinputinoutput(input) {
    //first und last - letter?  [0] und [last -1] ?
    if (firstletter != " ") {
        out1 = input;
    }
    if (!firstletter) {
        out1 = out1 + " " + input;
    }
    return out1;
}
// Zweite Funktion
function rotateWords(splitMsg) {
    var input;
    var out2;
    //last ??
    //i = 0 ??
    for (var i = 0; i < splitMsg.length; i++) {
        input = input + " " + splitMsg[last - i - 1];
    }
    return input = out2;
}
// dritte Funktion
function rotateSentence(message) {
    var input;
    var out3;
    // wie wird i inizialisiert?
    //annahme mit 0
    for (var i = 0; i > message.length; i++) {
        //wahrscheinlich nicht j sonder i? 
        input[last - j - 1] = message[j];
    }
    return out3 = input;
}
