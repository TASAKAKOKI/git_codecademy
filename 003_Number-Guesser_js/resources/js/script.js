let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);
// const dif = (input, target) => {
//     if (input >= target) {
//         return input - target;
//     }
//     else {
//         return target - input;
//     }
// };
// above function can be replaced by 'Math.abs()'
const compareGuesses = (user, pc, target) => (Math.abs(user - target) > Math.abs(pc - target))? false : true;

const updateScore = winner => {
    if (winner == 'human') {
        humanScore += 1;
    }
    else if (winner == 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => currentRoundNumber += 1;
