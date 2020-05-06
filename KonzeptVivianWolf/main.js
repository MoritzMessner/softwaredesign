"use strict";
var KonzeptVivian;
(function (KonzeptVivian) {
    let subject = ["das Auge", "die Stadt", "das Trauma", "der Weltuntergang", "die Kunst", "die Leere", "die Erinnerung", "die Flucht"];
    let verb = ["läuft", "sieht", "erscheint", "wütet", "stiehlt", "vergeht", "blutet", "hypnotisiert"];
    let object = ["umher", "auf den Zerfall hin", "im Traum", "in den Gedanken", "sich durch die Tortur", "durch den Tag", "durch einen Ozean des Grauens", "."];
    getVerse();
    function getVerse() {
        while (subject.length > 0) {
            let vers = "";
            let i = Math.floor(Math.random() * 2) + 1;
            console.log(i);
            if (i === 1) {
                // B
                i = Math.floor(Math.random() * verb.length);
                vers = verb[i] + " ";
                verb.splice(i, 1);
                i = Math.floor(Math.random() * subject.length);
                vers += subject[i] + " ";
                subject.splice(i, 1);
                i = Math.floor(Math.random() * object.length);
                vers += object[i] + "?";
                object.splice(i, 1);
                if (vers.indexOf(".") != -1) {
                    vers.replace(".", "");
                }
                console.log(vers);
            }
            else if (i === 2) {
                // A
                i = Math.floor(Math.random() * subject.length);
                vers = subject[i] + " ";
                subject.splice(i, 1);
                i = Math.floor(Math.random() * verb.length);
                vers += verb[i] + " ";
                verb.splice(i, 1);
                i = Math.floor(Math.random() * object.length);
                vers += object[i] + ", ";
                object.splice(i, 1);
                console.log(vers);
            }
        }
    }
})(KonzeptVivian || (KonzeptVivian = {}));
//# sourceMappingURL=main.js.map