// //Render de discos
// const renderDisc = ({
//     size = 100,
//     val = 0,
// }) => {
//     const disc = document.createElement('div');
//     disc.style.width = `${size}px`;
//     disc.style.height = `${size}px`;
//     disc.style.borderRadius = `${size / 2}px`;
//     disc.style.opacity = val === 0 ? 0.0 : 1.0;
//     disc.style.backgroundColor = val === 1 ? 'black' : 'white';
//     return disc;
// }

//Render de casillas.
const renderBox = ({
    size = 75,
    val = 0,
}) => {
    const box = document.createElement('div');
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
    const { playerOneTurn, playing_board } = state;

    const board = document.createElement('div');
    board.style.display = 'flex';
    board.style.flexWrap = 'wrap';
    board.style.backgroundColor = 'green';
    board.style.width = '600px';
    board.style.height = '600px';

    playing_board.map(
        (col, iCol) => col.map(
            (value, iRow) => renderBox({
                val: value,
            })
        ).forEach(
            box => board.appendChild(box),
        )
    );

    const boton = document.createElement('button');
    boton.style.width = '250px';
    boton.style.fontSize = '20px';
    boton.innerText = 'Siguiente';

    boton.onclick = () => {
        state.playerOneTurn = !state.playerOneTurn;
        root.innerHTML = '';
        render(root, state);
    };

    mount.appendChild(board);
    mount.appendChild(boton);
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
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

test_board.map(
    (col, iCol) => col.map(
        (val, iRow) => console.log(val)
    ))