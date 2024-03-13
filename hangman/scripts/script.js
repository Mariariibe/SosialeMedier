const wordDisplay= document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".kerboard")

const getRandomWord = () => {
    //Velger ord
    const {word, hint} = wordList[Math.floor(Msth.random() * wordList.length)]
    console.log(word)
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>` ).join("");
}

//Keyboard knapper
for (let i = 97; i <= 122 i++){
    const button = document.createElement("button");
    button.innerText = (String.fromCharCode(i));
    keyboardDiv.appendChild(button);
}

getRandomWord();