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
        button.disabled=true
    });
}

function updateScore(){
    
}
function game(){
    let yourScore = 0;
    let computerScore = 0;
    let result = "";
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let userScoreText = document.querySelector("#user-text");
            let computerScoreText = document.querySelector("#computer-text");
            let explanation = document.querySelector("#word-explanation");
            if(button.id=="rock"){
                result = playRound("Rock",computerChoice);
                console.log (result);
                
            }else if (button.id=="paper"){
                result = playRound("Paper",computerChoice);
                console.log (result);
            } else{
                result = playRound("Scissors", computerChoice);
                console.log (result);
            } 
            if (result[4]=="W"){
                yourScore++
                userScoreText.textContent=yourScore;
            } else if(result[4]=="L"){
                computerScore++
                computerScoreText.textContent=computerScore;
            }
            explanation.textContent=result;
            let finalResultText = document.querySelector("#final-result");
            if (yourScore==5){
                finalResultText.textContent="Congratulations!";
                disableButtons();
            } else if (computerScore==5){
                finalResultText.textContent="Too bad so sad!";
                disableButtons();
            }

        });
    });

}
game();