"use strict";
var KonzeptGedicht;
(function (KonzeptGedicht) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
    let verses = [];
    let subjectLength = subjects.length;
    for (let i = 0; i < subjectLength; i++) {
        getVers();
    }
    for (let element of verses) {
        console.log(element);
    }
    function getVers() {
        let randomeSubjectNumber = Math.floor(Math.random() * subjects.length);
        let randomeSubject = subjects[randomeSubjectNumber];
        subjects.splice(randomeSubjectNumber, 1);
        let randomeVerbsNumber = Math.floor(Math.random() * verbs.length);
        let randomeVerb = verbs[randomeVerbsNumber];
        verbs.splice(randomeVerbsNumber, 1);
        let randomeObjectNumber = Math.floor(Math.random() * objects.length);
        let randomeObject = objects[randomeObjectNumber];
        objects.splice(randomeObjectNumber, 1);
        let verse = randomeSubject + " " + randomeVerb + " " + randomeObject;
        verses.push(verse.trim());
    }
})(KonzeptGedicht || (KonzeptGedicht = {}));
//# sourceMappingURL=main.js.map