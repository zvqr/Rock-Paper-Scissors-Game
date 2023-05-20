var choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock-btn').addEventListener('click', function() {
    playGame('rock');
});
document.getElementById('paper-btn').addEventListener('click', function() {
    playGame('paper');
});
document.getElementById('scissors-btn').addEventListener('click', function() {
    playGame('scissors');
});

function playGame(userChoice) {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result;

    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('message').innerText = 'Computer chose ' + computerChoice + '. ' + result;
}
