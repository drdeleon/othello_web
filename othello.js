// Chequea si el movimiento es válido.
function validation(row, column, playerOneTurn, state_board, flip) {
    if (flip === false) {
        if (state_board[row][column] === 0) {
            return checkHorizontal(row, column, playerOneTurn, state_board, 1, false) ||
                checkVertical(row, column, playerOneTurn, state_board, 1, false) ||
                checkPrimaryDiagonal(row, column, playerOneTurn, state_board, 1, false) ||
                checkSecondaryDiagonal(row, column, playerOneTurn, state_board, 1, false) ||
                checkHorizontal(row, column, playerOneTurn, state_board, -1, false) ||
                checkVertical(row, column, playerOneTurn, state_board, -1, false) ||
                checkPrimaryDiagonal(row, column, playerOneTurn, state_board, -1, false) ||
                checkSecondaryDiagonal(row, column, playerOneTurn, state_board, -1, false)
        } else {
            return false;
        }
    } else {
        if (checkHorizontal(row, column, playerOneTurn, state_board, 1, false)) {
            checkHorizontal(row, column, playerOneTurn, state_board, 1, true);
        }
        if (checkVertical(row, column, playerOneTurn, state_board, 1, false)) {
            checkVertical(row, column, playerOneTurn, state_board, 1, true);
        }
        if (checkPrimaryDiagonal(row, column, playerOneTurn, state_board, 1, false)) {
            checkPrimaryDiagonal(row, column, playerOneTurn, state_board, 1, true);
        }
        if (checkSecondaryDiagonal(row, column, playerOneTurn, state_board, 1, false)) {
            checkSecondaryDiagonal(row, column, playerOneTurn, state_board, 1, true);
        }
        if (checkHorizontal(row, column, playerOneTurn, state_board, -1, false)) {
            checkHorizontal(row, column, playerOneTurn, state_board, -1, true);
        }
        if (checkVertical(row, column, playerOneTurn, state_board, -1, false)) {
            checkVertical(row, column, playerOneTurn, state_board, -1, true);
        }
        if (checkPrimaryDiagonal(row, column, playerOneTurn, state_board, -1, false)) {
            checkPrimaryDiagonal(row, column, playerOneTurn, state_board, -1, true);
        }
        if (checkSecondaryDiagonal(row, column, playerOneTurn, state_board, -1, false)) {
            checkSecondaryDiagonal(row, column, playerOneTurn, state_board, -1, true);
        }

        return state_board;
    }
};


//HORIZONTAL
function checkHorizontal(row, column, playerOneTurn, state_board, delta, flip, count = 0) {

    const next_val = state_board[row][column + delta];

    //Player 1
    if (playerOneTurn === true) {
        if (flip === false) { //No flip
            if (next_val === -1) {
                count = count + 1;
                return checkHorizontal(row, column + delta, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === 1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === -1) {
                state_board[row][column + delta] = 1;
                return checkHorizontal(row, column + delta, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
    //Player 2 
    else {
        if (flip === false) { //No flip
            if (next_val === 1) {
                count = count + 1;
                return checkHorizontal(row, column + delta, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === -1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === 1) {
                state_board[row][column + delta] = -1;
                return checkHorizontal(row, column + delta, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
};

//VERTICAL
function checkVertical(row, column, playerOneTurn, state_board, delta, flip, count = 0) {
    //Programación defensiva
    if (state_board[row + delta] === undefined) {
        return false;
    }

    const next_val = state_board[row + delta][column];

    //Player 1
    if (playerOneTurn === true) {
        if (flip === false) { //No flip
            if (next_val === -1) {
                count = count + 1;
                return checkVertical(row + delta, column, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === 1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === -1) {
                state_board[row + delta][column] = 1;
                return checkVertical(row + delta, column, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
    //Player 2 
    else {
        if (flip === false) { //No flip
            if (next_val === 1) {
                count++;
                return checkVertical(row + delta, column, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === -1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === 1) {
                state_board[row + delta][column] = -1;
                return checkVertical(row + delta, column, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
};

//MAIN DIAGONAL
function checkPrimaryDiagonal(row, column, playerOneTurn, state_board, delta, flip, count = 0) {
    //Programación defensiva
    if (state_board[row + delta] === undefined) {
        return false;
    }

    const next_val = state_board[row + delta][column + delta];

    //Player 1
    if (playerOneTurn === true) {
        if (flip === false) { //No flip
            if (next_val === -1) {
                count = count + 1;
                return checkPrimaryDiagonal(row + delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === 1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === -1) {
                state_board[row + delta][column + delta] = 1;
                return checkPrimaryDiagonal(row + delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
    //Player 2 
    else {
        if (flip === false) { //No flip
            if (next_val === 1) {
                count++;
                return checkPrimaryDiagonal(row + delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === -1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === 1) {
                state_board[row + delta][column + delta] = -1;
                return checkPrimaryDiagonal(row + delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
};

//MAIN DIAGONAL
function checkSecondaryDiagonal(row, column, playerOneTurn, state_board, delta, flip, count = 0) {
    //Programación defensiva
    if (state_board[row - delta] === undefined) {
        return false;
    }

    const next_val = state_board[row - delta][column + delta];

    //Player 1
    if (playerOneTurn === true) {
        if (flip === false) { //No flip
            if (next_val === -1) {
                count++;
                return checkSecondaryDiagonal(row - delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === 1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === -1) {
                state_board[row - delta][column + delta] = 1;
                return checkSecondaryDiagonal(row - delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
    //Player 2 
    else {
        if (flip === false) { //No flip
            if (next_val === 1) {
                count++;
                return checkSecondaryDiagonal(row - delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            } else if (next_val === -1 && count > 0) {
                return true;
            } else { //En caso no haya posibilidad de voltear fichas.
                return false;
            }
        } else { // Con flip
            if (next_val === 1) {
                state_board[row - delta][column + delta] = -1;
                return checkSecondaryDiagonal(row - delta, column + delta, playerOneTurn, state_board, delta, flip, count);
            }
        }
    }
};

//Render de casillas.
const renderBox = ({
    iCol = 0,
    iRow = 0,
    size = 75,
    playerOneTurn = true,
    isValid = false,
    val = 0,
}) => {
    let opacity_val;
    let bg_color;

    if (val === 0) {
        if (isValid) {
            opacity_val = 0.25;
            bg_color = playerOneTurn ? 'black' : 'white';
        } else {
            opacity_val = 0.0;
        }
    } else {
        opacity_val = 1.00;
        bg_color = val === 1 ? 'black' : 'white';
    }


    const box = document.createElement('div');
    box.setAttribute("col_index", `${iCol}`);
    box.setAttribute("row_index", `${iRow}`);
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.display = 'flex';
    box.style.height = `${size}px`;
    box.style.outline = 'solid';
    box.style.backgroundColor = 'green'

    const disc = document.createElement('div');
    disc.style.width = `${size-8}px`;
    disc.style.alignSelf = 'center';
    disc.style.justifySelf = 'center';
    disc.style.height = `${size-8}px`;
    disc.style.borderRadius = `${size / 2}px`;
    disc.style.opacity = opacity_val;
    disc.style.backgroundColor = bg_color;

    box.appendChild(disc);
    return box;
}

const render = (mount, state) => {
    //playerOneTurn y Board
    let { playerOneTurn, playing_board } = state;

    const board = document.createElement('div');
    board.style.display = 'flex';
    board.style.alignSelf = 'center';
    board.style.justifySelf = 'center';
    board.style.flexWrap = 'wrap';
    board.style.backgroundColor = 'green';
    board.style.width = '600px';
    board.style.height = '600px';

    playing_board.map(
        (row, iRow) => row.map(
            (value, iCol) => renderBox({
                playerOneTurn: playerOneTurn,
                val: value,
                iCol: iCol,
                iRow: iRow,
                isValid: validation(iRow, iCol, playerOneTurn, playing_board, false),
            })
        ).forEach(
            box => {
                board.appendChild(box);
                box.onclick = () => {
                    const row = parseInt(box.getAttribute("row_index"));
                    const col = parseInt(box.getAttribute("col_index"));

                    if (validation(row, col, playerOneTurn, playing_board, false) === true) {
                        validation(row, col, playerOneTurn, playing_board, true);
                        playing_board[row][col] = playerOneTurn ? 1 : -1;
                        state.playerOneTurn = !state.playerOneTurn;
                        root.innerHTML = '';
                        render(root, state);

                    }

                }
            },
        )
    );

    mount.appendChild(board);
};


const APP_STATE = {
    playerOneTurn: true,
    playing_board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

//Conexión con dom.
const root = document.getElementById('root');

render(root, APP_STATE);