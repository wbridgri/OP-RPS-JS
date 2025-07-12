let humanScore = 0;
let computerScore = 0;






function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    if(randNum == 0) {
        return "rock"
    } else if (randNum == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}



function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function playRound (humanChoice, computerChoice) {
    let message = ''
    if(humanChoice !== computerChoice) {
        if(humanChoice == 'rock') {
            if(computerChoice == 'paper') {
                computerScore++
                message = `${computerChoice} beats ${humanChoice}. You: ${humanScore} CPU: ${computerScore}`
                return message
            }else {
                humanScore++
                message = `${humanChoice} beats ${computerChoice}. You: ${humanScore} CPU: ${computerScore}`
                return message
            }
        } else if(humanChoice == 'paper') {
            if(computerChoice == 'rock') {
                humanScore++
                message = `${humanChoice} beats ${computerChoice}. You: ${humanScore} CPU: ${computerScore}`
                return message
            }else {
                computerScore++
                message = `${computerChoice} beats ${humanChoice}. You: ${humanScore} CPU: ${computerScore}`
                return message
            }
        }else {
            if(computerChoice == 'rock') {
                computerScore++
                message = `${computerChoice} beats ${humanChoice}. You: ${humanScore} CPU: ${computerScore}`
                return message
            } else {
                humanScore++
                message = `${humanChoice} beats ${computerChoice}. You: ${humanScore} CPU: ${computerScore}`
                return message
            }
        }

    } else {
        return 'Tie'
    }


};




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();





const round = playRound( humanSelection, computerSelection);
console.log(round)




