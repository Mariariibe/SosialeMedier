// Definerer konstanter og variabler

const riktigTall = Math.floor(Math.random() * 100) + 1;
let forsøk = 0;
let resultatElement = document.getElementById("resultat");
let forsøkElement = document.getElementById("forsøk");
const gjetteSkjema = document.getElementById("gjette-skjema");
const hangmanBilde = document.getElementById("hangman-img");

// Gjette-skjema, preventDefault hindrer at siden laster inn på nytt, const gjett henter verdi fra IDen "gjettet", dette blir til et tall. 0 er standardverdi.
//forsøk++ fører til at gjetteforsøk øker med 1 for hver gang man gjetter.

gjetteSkjema.addEventListener("submit", function (event) {
    event.preventDefault();
    const gjett = parseInt(document.getElementById("gjettet").value) || 0;
    console.log("Du gjettet " + gjett)
    forsøk++;

    // Hvis man gjetter for lavt, får man beskjed om at tallet er høyere.

    if (gjett < riktigTall) {
        resultatElement.innerHTML = "For lavt! <span class='pil-opp'>&#8593;</span>";
        hangmanBilde.src = "bilder/hangman-" + forsøk + ".svg";
        document.body.style.backgroundColor = "rgb(255, " + (255 - 40 * forsøk) + ", 0)";
    }

    // Hvis man gjetter for høyt, får man beskjed om at tallet er lavere.

    else if (gjett > riktigTall) {
        resultatElement.innerHTML = "For høyt! <span class='pil-ned'>&#8595;</span>";
        hangmanBilde.src = "bilder/hangman-" + forsøk + ".svg";
        document.body.style.backgroundColor = "rgb(255, " + (255 - 40 * forsøk) + ", 0)";
    }

    // Hvis man ikke gjetter for høyt eller for lavt har man riktig tall! 
    // Da blir skjermen grønn og man får vite hvor mange forsøk man brukte på å gjette riktig tall.
    // Gjetteskjemaet forsvinner slik at man ikke kan gjette på nytt, man får også en "riktiglyd" og skjermen blir grønn.

    else {
        resultatElement.textContent = "Gratulerer! Du gjettet riktig tall på " + forsøk + " forsøk.";
        document.body.style.backgroundColor = "green";
        gjetteSkjema.style.display = "none";
        forsøkElement.textContent = "Antall Forsøk: " + forsøk;
        var audio = document.getElementById("riktiglyd");
        audio.play();
    }

    // Lager en varsel fra JS om at man bare har ett forsøk igjen på å gjette riktig svar. Legger også til "heartbeat" lyd for å skape et spenningsmoment.

    if (forsøk == 6 && gjett !== riktigTall) {
        alert("Du har bare ett forsøk igjen, velg med omhu!");
        var audio = document.getElementById("heartbeat");
        audio.play()
    }

    // Hvis man bruker 7 forsøk og ikke har fått riktig svar, får man beskjed om at det er Game over. Skjermen blir rød, og man får en "feillyd". 
    // I tillegg forsvinner submit/gjette-skjemaet, slik at man ikke kan gjette flere ganger.

    if (forsøk >= 7 && gjett !== riktigTall) {
        resultatElement.textContent = "Game over! Riktig tall var " + riktigTall + ".";
        document.body.style.backgroundColor = "red";
        gjetteSkjema.style.display = "none";
        var audio = document.getElementById("feillyd");
        audio.play();
    }
});


