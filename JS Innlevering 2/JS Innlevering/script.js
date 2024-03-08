const wordList = ['javascript', 'HyperText Markup Language', 'Programmering', 'Inspect', 'Rasmus', 'Infomarsjonsteknologi'];
let selectedWord = '';
let hiddenWord = [];
let remainingAttempts = 6;
let guessedLetters = [];


function newGame() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    hiddenWord = Array.from(selectedWord).fill('_');
    remainingAttempts = 6;
    guessedLetters = [];

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('remainingAttempts').textContent = remainingAttempts;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
    document.body.style.backgroundColor = '';

    displayWord();
}

function displayWord() {
    document.getElementById('wordContainer').textContent = hiddenWord.join(' ');
}

function guessLetter() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    if (remainingAttempts > 0 && guessInput.value.length === 1) {
        const guessedLetter = guessInput.value.toLowerCase();

        message.textContent = '';

        if (!guessedLetters.includes(guessedLetter)) {
            guessedLetters.push(guessedLetter);

            if (selectedWord.includes(guessedLetter)) {
                for (let i = 0; i < selectedWord.length; i++) {
                    if (selectedWord[i] === guessedLetter) {
                        hiddenWord[i] = guessedLetter;
                    }
                }

                if (!hiddenWord.includes('_')) {
                    message.textContent = 'Gratulerer! Du har gjettet riktig ord.';
                    guessInput.disabled = true;
                    document.querySelector('button').disabled = true;
                    document.body.style.backgroundColor = 'green';
                }
            } else {
                remainingAttempts--;
            }

            updateDisplay();

            if (remainingAttempts === 0) {
                message.textContent = `Beklager, du har brukt opp alle forsøk. Riktig ord var "${selectedWord}".`;
                guessInput.disabled = true;
                document.querySelector('button').disabled = true;
                document.body.style.backgroundColor = 'red';
            }
        } else {
            message.textContent = 'Du har allerede gjettet denne bokstaven. Prøv en annen.';
        }
    }
}

// Bruk denne hangmanBilde.src = "bilder/hangman-" + forsøk + ".svg";



// Kall newGame() for å starte det første spillet
newGame();