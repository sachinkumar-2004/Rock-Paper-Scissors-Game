let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id"); 
        playgame(userChoice);        
    })
    
})

const playgame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    //generate computer choice
    const compChoice = gencompChoice();
    console.log("Computer Choice = ",compChoice);
    

    if(userChoice === compChoice){
        // draw game
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("You lose");
        msg.innerText = `You Lose! ${compChoice } beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const gencompChoice = () => {
    // rock,paper,scissor
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];


}

const drawGame = (userChoice) =>{
    console.log("game was draw.");
    msg.innerText = `Game was draw!! Both choose ${userChoice}`;
    msg.style.backgroundColor = "black";

}