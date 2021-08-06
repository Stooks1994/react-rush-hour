import React, { useState } from "react"
import Piece from "./Piece";
import BoardRow from "./BoardRow"
import '../styling/Board.css'

const BOARD_WIDTH = 6;
const BOARD_HEIGHT = 6;

const TEST_PUZZLE = {
    pieces: [
        {id:0, x:0, y:0, size:2, orientation: 'HORIZONTAL', color:'red'},
        {id:1, x:0, y:1, size:2, orientation: 'VERTICAL', color:'pink'},
        {id:2, x:3, y:5, size:3, orientation: 'HORIZONTAL', color:'blue'}
    ]
};

const initializeEmptyBoard = () => {
    let board = []

    for (let cols = 0; cols < BOARD_WIDTH; cols++) {
        board.push([]);

        for (let rows = 0; rows < BOARD_HEIGHT; rows++) {
            board[cols].push({x:cols, y:rows, isOccupied:false});
        }
    }

    return board
}

const Board = () => {
    const [boardState, setBoardState] = useState(initializeEmptyBoard());

    const populateBoardFromPuzzle = puzzle => {
        return puzzle.pieces.map(piece => <Piece key={piece.id} pieceProps={piece} updateCoords={updateOccupiedSpaces} />)
    }

    const updateOccupiedSpaces = () => {
        
    }

    let pieces = populateBoardFromPuzzle(TEST_PUZZLE);

    return (
        <div id='main-board' className='board'>
            {pieces}
        </div>
    )
}

/*
const BOARD_WIDTH = 6;
const BOARD_HEIGHT = 6;

const initializeEmptyBoard = () => {
    let board = []

    for (let cols = 0; cols < BOARD_WIDTH; cols++) {
        board.push([]);

        for (let rows = 0; rows < BOARD_HEIGHT; rows++) {
            board[cols].push({x:cols, y:rows, isOccupied:false});
        }
    }

    return board
}

const Board = () => {
    const [boardState, setBoardState] = useState(initializeEmptyBoard());

    const updateBoardState = (xCoord, yCoord, isOccupied) => {
        let newState = boardState;
        newState[xCoord][yCoord].isOccupied = isOccupied;

        setBoardState(newState);
    }

    return (
        <table className='board'>
            <tbody className='board__tbody'>
                <BoardRow ids={boardState[0]} updateBoardState={updateBoardState} />
                <BoardRow ids={boardState[1]} updateBoardState={updateBoardState} />
                <BoardRow ids={boardState[2]} updateBoardState={updateBoardState} />
                <BoardRow ids={boardState[3]} updateBoardState={updateBoardState} />
                <BoardRow ids={boardState[4]} updateBoardState={updateBoardState} />
                <BoardRow ids={boardState[5]} updateBoardState={updateBoardState} />
            </tbody>
        </table>
    )
}
*/
export default Board