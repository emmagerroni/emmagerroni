// Array di alternative per le vittorie
const winPhrases = [
    "Hai vinto! (ma fortunato nel gioco, sfortunato in amore...)",
    "Avrai anche vinto, ma tutta fortuna!",
    "Mi hai battuto :/"
];

// Array di alternative per le sconfitte
const losePhrases = [
    "Hai perso...(ma sfortunato nel gioco, fortunato in amore!)",
    "Ho vinto, ma posso concederti la rivincita.",
    "Hai perso, ti meriti un premio di consolazione, cioccolatino?"
];

// Array di alternative per i pareggi
const drawPhrases = [
    "1 a 1, palla al centro",
    "Daje, se nessuno ha vinto vuol dire che dobbiamo continuare a giocare!",
    "Pari! Mannaggia..."
];

function getRandomPhrase(phrasesArray) {
    const randomIndex = Math.floor(Math.random() * phrasesArray.length);
    return phrasesArray[randomIndex];
}

function computerPlay() {
    const choices = ['sasso', 'carta', 'forbice'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerSelection) {
    const computerSelection = computerPlay();
    let result;

    if (playerSelection === computerSelection) {
        result = getRandomPhrase(drawPhrases);
    } else if (
        (playerSelection === "sasso" && computerSelection === "forbice") ||
        (playerSelection === "carta" && computerSelection === "sasso") ||
        (playerSelection === "forbice" && computerSelection === "carta")
    ) {
        result = getRandomPhrase(winPhrases);
    } else {
        result = getRandomPhrase(losePhrases);
    }

    // Nasconde le immagini
    const choices = document.querySelectorAll('.choice');
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.display = 'none';
    }

    // Mostra il risultato
    document.getElementById("result").innerText = `${result}`;
    document.getElementById("choiceText").innerText = `Hai scelto ${playerSelection}. Io ${computerSelection}.`;
    document.getElementById("choiceText").style.display = 'inline-block';
}

function toggleChoicesVisibility() {
    var choices = document.querySelectorAll('.choice');
    for (var i = 0; i < choices.length; i++) {
        choices[i].style.display = 'none';
    }
    document.getElementById('choiceText').style.display = 'inline-block';

    // Mostra il pulsante "rigioca"
    document.getElementById('refreshButton').style.display = 'inline-block';
}

function refreshPage() {
    window.location.reload();
}
