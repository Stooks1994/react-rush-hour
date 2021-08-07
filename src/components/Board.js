import React, { useState } from "react"
import Piece from "./Piece";
import BoardRow from "./BoardRow"
import '../styling/Board.css'

const BOARD_SIZE = 6;

const TEST_PUZZLE = {
    pieces: [
        {id:0, x:0, y:0, size:2, orientation: 'HORIZONTAL', color:'red'},
        {id:1, x:0, y:1, size:2, orientation: 'VERTICAL', color:'pink'},
        {id:2, x:3, y:5, size:3, orientation: 'HORIZONTAL', color:'blue'}
    ]
};

const initializeBoardFromPuzzle = (puzzle) => {
    let board = []

    for (let cols = 0; cols < BOARD_SIZE; cols++) {
        board.push([]);

        for (let rows = 0; rows < BOARD_SIZE; rows++) {
            board[cols].push({x:cols, y:rows, isOccupied:false, id:null});
        }
    }

    const markAsOccupied = (board, id, x, y, size, orientation) => {
        if (orientation == 'HORIZONTAL') {
            for (let i = 0; i < size; i++) {
                board[x + i][y].isOccupied = true;
                board[x + i][y].id = id;
            }
        } else {
            for (let j = 0; j < size; j++) {
                board[x][y + j].isOccupied = true;
                board[x][y + j].id = id;
            }
        }
    }

    puzzle.pieces.map(piece => markAsOccupied(board, piece.id, piece.x, piece.y, piece.size, piece.orientation))

    return board
}

const Board = () => {
    const populateBoardFromPuzzle = (puzzle, occupiedSpaces) => {
        return puzzle.pieces.map(piece => <Piece key={piece.id} pieceProps={piece} occupied={occupiedSpaces} updateCoords={updateOccupiedSpaces} />)
    }

    const populatePiecesFromOccupiedSpaces = (puzzle, occupiedSpaces) => {

    }

    const updateOccupiedSpaces = (id, x, y, orientation, size) => {
        /*
        const markAsUnoccupied = (element, targetId) => {
            if (element.id == targetId) {
                element.isOccupied = false;
                element.id = null;
            }
        }

        setOccupiedSpaces((prevState) => {
            let newState = prevState;

            newState.forEach(row => row.forEach(element => markAsUnoccupied(element, id)))
    
            if (orientation == 'HORIZONTAL') {
                if (x + size <= BOARD_SIZE) {
                    for (let i = 1; i < size; i++) {
                        newState[BOARD_SIZE - i][y].isOccupied = true;
                        newState[BOARD_SIZE - i][y].id = id;
                    }
                } else {
                    for (let i = 0; i < size; i++) {
                        newState[x + i][y].isOccupied = true;
                        newState[x + i][y].id = id;
                    }
                }
            } else {
                if (y + size <= BOARD_SIZE) {
                    for (let j = 1; j < size; j++) {
                        newState[x][BOARD_SIZE - j].isOccupied = true;
                        newState[x][BOARD_SIZE - j].id = id;
                    }
                } else {
                    for (let j = 0; j < size; j++) {
                        newState[x][y + j].isOccupied = true;
                        newState[x][y + j].id = id;
                    }
                }
            }

            return newState;
        })
        */
    }

    const [occupiedSpaces, setOccupiedSpaces] = useState(initializeBoardFromPuzzle(TEST_PUZZLE));

    let pieces = populateBoardFromPuzzle(TEST_PUZZLE, occupiedSpaces);

    return (
        <div id='main-board' className='board'>
            {pieces}
        </div>
    )
}

export default Board