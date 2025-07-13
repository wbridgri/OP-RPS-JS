



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

function playGame () {
    
    let humanScore = 0;
    let computerScore = 0;
    let message = ''
    function playRound (humanChoice, computerChoice) {
        if(humanChoice !== computerChoice) {
            if(humanChoice == 'rock') {
                if(computerChoice == 'paper') {
                    computerScore++
                    message = `You Lose! ${computerChoice} beats ${humanChoice}. You: ${humanScore} CPU: ${computerScore}`

                }else {
                    humanScore++
                    message = `You Win! ${humanChoice} beats ${computerChoice}. You: ${humanScore} CPU: ${computerScore}`
                }
            } else if(humanChoice == 'paper') {
                if(computerChoice == 'rock') {
                    humanScore++
                    message = `You Win! ${humanChoice} beats ${computerChoice}. You: ${humanScore} CPU: ${computerScore}`
                }else {
                    computerScore++
                    message = `You Lose! ${computerChoice} beats ${humanChoice}. You: ${humanScore} CPU: ${computerScore}`

                }
            }else {
                if(computerChoice == 'rock') {
                    computerScore++
                    message = `You Lose! ${computerChoice} beats ${humanChoice}. You: ${humanScore} CPU: ${computerScore}`

                } else {
                    humanScore++
                    message = `You Win! ${humanChoice} beats ${computerChoice}. You: ${humanScore} CPU: ${computerScore}`

                }
            }
            return message
        } else {
            return 'Tie'
        }
    };
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
}
return (humanScore >= computerScore ? console.log(`You win! ${humanScore}`) : console.log(`You lose ${computerScore}`))
};

playGame();











