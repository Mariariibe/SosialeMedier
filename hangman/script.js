    document.addEventListener('DOMContentLoaded', () => {
        const wordDisplay = document.querySelector(".word-display");
        const hangmanImage = document.querySelector(".hangman-box img");
        const wrongGuessesSpan = document.querySelector(".wrong-guesses");
        const correctWordSpan = document.querySelector(".correct-word");
        const playAgainButton = document.querySelector(".play-again");

        let selectedWord = "";
        let wrongGuesses = 0;

        const wordList = [
            { word: "fakenews", hint: "Nyheter som ikke stemmer." },
            { word: "covid", hint: "En epidemi som brøyt ut i 2020 som det har oppstått mange konspirasjonsteorier rundt." },
            { word: "tillit", hint: "Noe myndighetene kan miste, når konspirasjonsteorier sprer seg."},
            { word: "spekulering", hint: "Konspirasjonsteorier er ofte basert på" },
            { word: "splittelse", hint: "Spredning av konspirasjonsteorier kan føre til ... i samfunnet." },
            { word: "gdpr", hint: "Passer på personvernet ditt på nett"}
        ];

        const getRandomWord = () => {
            const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
            document.querySelector(".hint-text b").innerText = hint;
            selectedWord = word;
            wrongGuesses = 0;
            updateHangmanImage(0);
            wrongGuessesSpan.textContent = wrongGuesses;
            wordDisplay.innerHTML = selectedWord.split("").map(() => `<li class="letter"></li>`).join("");
        }

        const updateHangmanImage = (step) => {
            hangmanImage.src = `bilder/hangman-${step}.svg`;
        }

        const checkGuess = (letter) => {
            const letters = selectedWord.split("");
            let found = false;
            for (let i = 0; i < letters.length; i++) {
                if (letters[i] === letter) {
                    wordDisplay.children[i].textContent = letter;
                    found = true;
                }
            }
            if (!found) {
                wrongGuesses++;
                updateHangmanImage(wrongGuesses);
                wrongGuessesSpan.textContent = wrongGuesses;
            }
            if (wrongGuesses === 6) {
                endGame();
            } else if (wordDisplay.textContent === selectedWord) {
                endGame(true);
            }
        }

        const endGame = (win = false) => {
            if (win) {
                alert("Gratulerer! Du gjettet riktig.");
            } else {
                correctWordSpan.textContent = selectedWord;
                document.querySelector(".game-modal").style.display = "flex";
            }
        }

        const keyboardDiv = document.querySelector(".keyboard");
        for (let i = 97; i <= 122; i++) {
            const button = document.createElement("button");
            button.textContent = String.fromCharCode(i);
            button.addEventListener("click", () => {
                if (!wordDisplay.textContent.includes(button.textContent)) {
                    checkGuess(button.textContent);
                }
            });
            keyboardDiv.appendChild(button);
        }

        playAgainButton.addEventListener("click", () => {
            document.querySelector(".game-modal").style.display = "none";
            getRandomWord();
        });

        getRandomWord();
    });
