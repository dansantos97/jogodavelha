document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    for (let square of squares) {
        square.addEventListener('click', handleClick);
    }

    updateScore();

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            if (symbols[playerTime] == "o") {
                alert("O Vencedor foi o jogador 1 (O)");
                scoreP1++
                updateScore()
            } else {
                alert("O Vencedor foi o jogador 2 (X)");
                scoreP2++
                updateScore()
            }
            restartRound()
        }, 30);
    };

    if (isDraw()) {
        setTimeout(() => {
            alert("O Jogo ficou empatado");
            restartRound();
        }, 30)
    }

    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateScore() {
    let player1 = document.querySelector("#P1");
    let player2 = document.querySelector("#P2");

    player1.innerHTML = scoreP1;
    player2.innerHTML = scoreP2;
}

function restartRound() {

    board.fill('');

    for (let position = 0; position < board.length; position++) {
        updateSquare(position);
    }

    playerTime = 0
    gameOver = false
}

function restartGame() {
    restartRound();
    scoreP1 = 0;
    scoreP2 = 0;
    updateScore();
}