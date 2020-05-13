namespace KonzeptGedicht {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
    let verses: string[] = [];
    let subjectLength: number = subjects.length; //better plural for subjects

    for (let i: number = 0; i < subjectLength; i++) {
        getVers();
    }

    for (let element of verses) {
        console.log(element);
    }

    function getVers(): void {
        let randomeSubjectNumber: number = Math.floor(Math.random() * subjects.length);
        let randomeSubject: string = subjects[randomeSubjectNumber];
        subjects.splice(randomeSubjectNumber, 1);

        let randomeVerbsNumber: number = Math.floor(Math.random() * verbs.length);
        let randomeVerb: string = verbs[randomeVerbsNumber];
        verbs.splice(randomeVerbsNumber, 1);

        let randomeObjectNumber: number = Math.floor(Math.random() * objects.length);
        let randomeObject: string = objects[randomeObjectNumber];
        objects.splice(randomeObjectNumber, 1);

        let verse: string = randomeSubject + " " + randomeVerb + " " + randomeObject;

        verses.push(verse.trim());
    }

}
