function getComputerChoice(){
    const choice=["Rock","Paper","Scissors"];
    let chosen=choice[Math.floor(Math.random()*3)];
    return chosen;
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.substring(1).toLowerCase();
    computerSelection=computerSelection[0].toUpperCase()+computerSelection.substring(1).toLowerCase();

    if (playerSelection==computerSelection){
        return  `It's a tie! You both chose ${playerSelection}`;
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

function game(){
    let yourScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let user = prompt("Rock, Paper, Scissors?");
        let result = playRound(user,getComputerChoice());
        console.log(result);
        if (result[4]=="W"){
            yourScore++
        } else if(result[4]=="L"){
            computerScore++
        }
    }
    let finalResult;
    if(yourScore>computerScore){
        finalResult = `You won ${yourScore}: ${computerScore}`;
    }else if (yourScore<computerScore){
        finalResult = `You lost ${yourScore}: ${computerScore}`;
    }else{
        finalResult= "You tied!"
    }
    return finalResult;
}

console.log(game());