let currentPlayer = "X";

const board = document.getElementById('game');

const xSelections = [];
const oSelections = [];
const answers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function drawBoard() {
  const rows = 3;
  const columns = 3;

  let cellId = 1;

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < columns; j++) {
      const column = document.createElement('td');
      column.id = cellId;
      column.addEventListener('click', handleClick);

      row.appendChild(column);
      cellId++;
    }

    board.appendChild(row);
  }
}

// add symbol to innerHTM
// switch players
// remove clickListener
// check for winner
function handleClick(e) {
  const selectedTile = e.target;
  selectedTile.innerHTML = currentPlayer;

  if (currentPlayer === "X") {
    xSelections.push(parseInt(selectedTile.id));
  } else {
    oSelections.push(parseInt(selectedTile.id));
  }

  selectedTile.removeEventListener('click', handleClick);

  let isWin = checkWinner();

  if (!isWin) {
    switchPlayers();

    if (xSelections.length + oSelections.length === 9) {
      alert('This game is a draw.');
      endGame();
    }
  } else {
    alert(`${currentPlayer} has won!`);
    endGame();
  }
}

function checkWinner() {
  let winner = false;
  let selections;

  if (currentPlayer === "X") {
    selections = xSelections;
  } else {
    selections = oSelections;
  }

  if (selections.length <= 2) return false;

  // check if selections is a subset of any answers array
  for (let i = 0; i < answers.length; i++) {
    const currentAnswer = answers[i];
    winner = currentAnswer.every((answer) => selections.includes(answer));
    if (winner) break;
  }

  return winner;
}

function switchPlayers() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function endGame() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  drawBoard();
}

window.onload = function() {
  drawBoard();
};
