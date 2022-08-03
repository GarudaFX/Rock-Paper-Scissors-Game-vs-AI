const myScore = document.getElementById("your-score");
const aiScore = document.getElementById("ai-score");
const myDisplay = document.getElementById("your-display");
const aiDisplay = document.getElementById("ai-display");
const winnerDisplay = document.getElementById("winner");
const buttons = document.querySelectorAll(".button");
const reset = document.getElementById("reset");

const val = {
    "rock" : 0,
    "paper" : 1,
    "scissors" : 2
}


const ai = ["Rock","Paper","Scissors"];
let myChoice = 0;

buttons.forEach(button => {
    button.onclick = () => {
        myChoice = Number(val[button.value])
        randomAI(ai);
        gameScorer();
    }
})

const func = (myChoice) => {
   return myChoice;
}

const randomAI = (ai) => {
    const length = 3
    const randomNumber = Math.floor(Math.random() * length);
    
    return ai[randomNumber];
}

const gameScorer = () => {
    let myChoiceDisplay = "",
    aiChoiceDisplay = "",
    winner = "",
    myPoint = 0, aiPoint = 0 

    if(func(myChoice) == 0 && randomAI(ai) == "Paper") {
        //If I choose  Rock and AI Choose paper == AI WIN
        //score
        aiPoint++;
        //displays
        myChoiceDisplay = "Rock"
        aiChoiceDisplay = "Paper"
        winner = "AI"
       
    } else if(func(myChoice) == 0 && randomAI(ai) == "Scissors") {
        //If I choose Rock and AI Choose Scissors == I Win
        //score
        myPoint++;
        //displays
        myChoiceDisplay = "Rock"
        aiChoiceDisplay = "Scissors"
        winner = "You"
        myScore.innerText = `${myPoint}`;
    } else if(func(myChoice) == 1 && randomAI(ai) == "Rock") {
         //If I choose Paper and AI Choose Rock  == I Win
        //score
        myPoint++;
        //displays
        myChoiceDisplay = "Paper"
        aiChoiceDisplay = "Rock"
        winner = "You"
    } else if(func(myChoice) == 1 && randomAI(ai) == "Scissors") {
        //If I choose Paper and AI Choose Scissors  == AI Win
        //score
        aiPoint++;
        //displays
        myChoiceDisplay = "Paper"
        aiChoiceDisplay = "Scissors"
        winner = "AI"
    } else if(func(myChoice) == 2 && randomAI(ai) == "Rock") {
        //If I choose Scissors and AI Choose Scissors  == AI Win
        //score
        aiPoint++;
        //displays
        myChoiceDisplay = "Scissors"
        aiChoiceDisplay = "Rock"
        winner = "AI"
    } else if(func(myChoice) == 2 && randomAI(ai) == "Paper") {
        //If I choose Scissors and AI Choose Paper  == I Win
        //score
        myScore++;
        //displays
        myChoiceDisplay = "Scissors"
        aiChoiceDisplay = "Paper"
        winner = "You"
    } else if(func(myChoice) == 0 && randomAI(ai) == "Rock") {
         //If I choose Rock and AI Choose Rock  == Tie
        //displays
        myChoiceDisplay = "Scissors"
        aiChoiceDisplay = "Paper"
        winner = "No one"
    } else if(func(myChoice) == 1 && randomAI(ai) == "Paper") {
         //If I choose Paper and AI Choose Paper  == Tie
        //score
        //displays
        myChoiceDisplay = "Paper"
        aiChoiceDisplay = "Paper"
        winner = "No one"
    } else {
         //If I choose Scissors and AI Choose Scissors  == Tie
        //score
        //displays
        myChoiceDisplay = "Scissors"
        aiChoiceDisplay = "Scissors"
        winner = "No one"
    }

    aiScore.innerText = `${aiPoint}`;
    myScore.innerText = `${myPoint}`;
    myDisplay.innerText = "You choose " + myChoiceDisplay
    aiDisplay.innerText = "AI choose " + aiChoiceDisplay
    winnerDisplay.innerText = winner + " win!";
}

reset.onclick = () => {
    resetGame();
}

const resetGame = () => {
    aiScore.innerText = 0
    myScore.innerText = 0
    myDisplay.innerText = ""
    aiDisplay.innerText = ""
    winnerDisplay.innerText = ""
}


