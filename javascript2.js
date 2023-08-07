function getComputerChoice(){
    const choice=["Rock","Paper","Scissors"];
    let chosen=choice[Math.floor(Math.random()*3)];
    return chosen;
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.substring(1).toLowerCase();
    computerSelection=computerSelection[0].toUpperCase()+computerSelection.substring(1).toLowerCase();

    if (playerSelection==computerSelection){
        return  `You Tied! Both chose ${playerSelection}`;
    } else if (playerSelection[0]=='R'){
        if (computerSelection[0]=='P'){
            return ("You Lose! Paper beats Rock");
        } else {
            return ("You Win! Rock beats Scissors");
        }
    } else if (playerSelection[0]=='P'){
        if (computerSelection[0]=='R'){
            return ("You Win! Paper beats Rock");
        } else{
            return ("You Lose! Scissors beats Rock")
        }
    } else if (playerSelection[0]=='S'){
        if (computerSelection[0]=='P'){
            return ("You Win! Scissors beats Paper")
        } else{
            return ("You Lose! Rock beats Scissors")
        }
    }
}
function disableButtons(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (button.id !== "reset") button.disabled=true;
    });
}
function enableButtons(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled=false;
    });
}

function isFinalScore(yourScore, computerScore){
    let finalResultText = document.querySelector("#final-result");
    let buttonReset = document.querySelector("#reset");
    if (yourScore==5){
        finalResultText.textContent="Congratulations!";
        disableButtons();
        buttonReset.textContent="Play Again";
    } else if (computerScore==5){
        finalResultText.textContent="Too bad so sad!";
        disableButtons();
        buttonReset.textContent="Play Again";
    }

}

let yourScore = 0;
let computerScore = 0;

function checkWinLose(result){
    let userScoreText = document.querySelector("#user-text");
    let computerScoreText = document.querySelector("#computer-text");
    let explanation = document.querySelector("#word-explanation");
    if (result[4]=="W"){
        yourScore++
        userScoreText.textContent=yourScore;
    } else if(result[4]=="L"){
        computerScore++
        computerScoreText.textContent=computerScore;
    }
    explanation.textContent=result;
}

function resetGame(){
    let userScoreText = document.querySelector("#user-text");
    let computerScoreText = document.querySelector("#computer-text");
    let explanation = document.querySelector("#word-explanation");
    let finalResultText = document.querySelector("#final-result");
    let buttonReset = document.querySelector("#reset");
    yourScore = 0;
    computerScore = 0;
    userScoreText.textContent=yourScore;
    computerScoreText.textContent=computerScore;
    explanation.textContent = "Restarted Game."
    finalResultText.textContent="";
    buttonReset.textContent="Reset";
    enableButtons();
}

function game(){
    let result = "";
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            if(button.id=="rock"){
                result = playRound("Rock",computerChoice);
                console.log (result);
                
            }else if (button.id=="paper"){
                result = playRound("Paper",computerChoice);
                console.log (result);
            } else if (button.id =="scissors"){
                result = playRound("Scissors", computerChoice);
                console.log (result);
            }  else{
                console.log("yo");
                resetGame();
            }
            if (button.id!="reset")checkWinLose(result);
            isFinalScore(yourScore, computerScore);

        });
    });

}
game();