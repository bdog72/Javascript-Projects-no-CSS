const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');

let winner = [0, 0];

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
  let playerSelection = e.target.innerText;
  // let computerSelection = Math.floor(Math.random() * 5 + 1);
  let computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = 'Rock';
  } else if (computerSelection < 0.67) {
    computerSelection = 'Paper';
  } else {
    computerSelection = 'Scissors';
  }
  console.log(playerSelection, computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
  console.log(result);
  if (result == 'Player') {
    result += ' wins!';
    winner[0]++;
  } else if (result == 'Computer') {
    result += ' wins!';
    winner[1]++;
  } else {
    result = 'results in a tie match';
  }
  score.innerHTML = 'Player 1[' + winner[0] + '] Player 2[' + winner[1] + ']';
  messenger(
    playerSelection + ' vs ' + computerSelection + '<br><br>' + result + '</b>'
  );
}

function messenger(mes) {
  message.innerHTML = mes;
}

function checkWinner(player, computer) {
  if (player === computer) {
    return 'Draw';
  }
  if (player === 'Rock') {
    if (computer === 'Paper') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
  if (player === 'Paper') {
    if (computer === 'Scissors') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
  if (player === 'Scissors') {
    if (computer === 'Rock') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
}
