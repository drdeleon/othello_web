// 
function validation(row, column, playerOneTurn, state_board) {
    return checkHorizontal() && checkVertical() && checkPrimaryDiagonal() && checkSecondaryDiagonal()
};

function checkPrimaryDiagonal(row, column, playerOneTurn, state_board, delta) {

};

function checkSecondaryDiagonal(row, column, playerOneTurn, state_board, delta) {

};

//Chequeo recursivo de linea horizontal.
function checkHorizontal(row, column, playerOneTurn, state_board, delta) {
    let current_row = row;
    let current_col = column;
    let isValid = false;
    let endIndex = current_col;

    const next_val = state_board[current_row][current_col + delta];
    //Jugador número uno.
    if (playerOneTurn) {
        if (next_val === -1) {
            checkHorizontal(current_row, current_col + delta, playerOneTurn, state_board, delta);
        } else if (next_val === 1) {
            isValid = true;
            endIndex = current_col;
        };
    }
    //Jugador número dos. 
    else {
        if (state_board[current_row][current_col + delta] === 1) {
            checkHorizontal(current_row, current_col + delta, playerOneTurn, state_board, delta);
        } else {
            endIndex = current_col;
        };
    }
    console.log('Indice final', endIndex);
};

//Chequeo recursivo de lineal vertical
function checkVertical(row, column, playerOneTurn, state_board, delta) {
    let current_row = row;
    let current_col = column;
    let isValid = false;
    let endIndex = current_col;

    //Jugador número uno.
    if (playerOneTurn) {
        if (state_board[current_row + delta][current_col] === -1) {
            checkHorizontal(current_row + delta, current_col, playerOneTurn, state_board, delta);
        } else {
            endIndex = current_col;
        };
    }
    //Jugador número dos. 
    else {
        if (state_board[current_row + delta][current_col] === 1) {
            checkHorizontal(current_row + delta, current_col, playerOneTurn, state_board, delta);
        } else {
            endIndex = current_col;
        };
    }
    console.log('Indice final', endIndex);
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
    disc.style.opacity = val === 0 ? 0.0 : 1.0;
    disc.style.backgroundColor = val === 1 ? 'black' : 'white';

    box.appendChild(disc);
    return box;
}

const render = (mount, state) => {
    //playerOneTurn y Board
    let { playerOneTurn, playing_board } = state;

    console.log(playing_board);

    const board = document.createElement('div');
    board.style.display = 'flex';
    board.style.flexWrap = 'wrap';
    board.style.backgroundColor = 'green';
    board.style.width = '600px';
    board.style.height = '600px';

    playing_board.map(
        (row, iRow) => row.map(
            (value, iCol) => renderBox({

                val: value,
                iCol: iCol,
                iRow: iRow
            })
        ).forEach(
            box => {
                board.appendChild(box);
                box.onclick = () => {
                    const row = box.getAttribute("row_index");
                    const col = box.getAttribute("col_index");

                    playing_board[row][col] = playerOneTurn ? 1 : -1;
                    state.playerOneTurn = !state.playerOneTurn;
                    root.innerHTML = '';
                    render(root, state);
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

const test_board = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]


checkHorizontal(3, 3, false, test_board, 1);