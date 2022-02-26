let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("definite.mp3");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const newGameBegin = () =>{
    audio.play();
    window.location.reload();
}
const startGame = () => {
    audio.play();
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};
// start new game
const startNewGame = () =>{
    audio.play();
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true)
}

// main logic of our app
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    audio.play();

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High 🙄";
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 😣";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "Hurrey!😎";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose ! correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose ! correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "Hurrey!😎";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    audio.play();
    document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};
const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};