import React, { useState, useEffect } from "react"
import Piece from "./Piece";
import '../styling/Board.css'

const BOARD_SIZE = 6;

const TEST_PUZZLE = {
    pieces: [
        {id:0, x:0, y:0, size:2, orientation: 'HORIZONTAL', color:'red'},
        {id:1, x:0, y:1, size:2, orientation: 'VERTICAL', color:'pink'},
        {id:2, x:3, y:5, size:3, orientation: 'HORIZONTAL', color:'blue'},
        {id:3, x:5, y:0, size:1, orientation: 'HORIZONTAL', color:'green'}
    ]
};

const Board = () => {
    const [isMounted, setIsMounted] = useState(false);

    const populateBoardFromPuzzle = puzzlePieces => {
        return puzzlePieces.map(piece => (
            <Piece 
                key={piece.id} 
                pieceProps={piece} 
                allPieces={puzzlePieces} 
                onFinishedDragging={updatePiecesOnBoard} 
            />)
        )
    }

    const updatePiecesOnBoard = (id, newBin) => {
        setPiecesOnBoard((prevState) => {
            let newState = prevState;

            newState.forEach(element => {
                if (element.id === id) {
                    if (element.orientation == 'HORIZONTAL') {
                        element.x = newBin;
                    } else if (element.orientation == 'VERTICAL') {
                        element.y = newBin;
                    }
                }
            })

            console.log(newState)

            return newState;
        })
    }

    const [piecesOnBoard, setPiecesOnBoard] = useState(TEST_PUZZLE.pieces);

    useEffect(() => {setIsMounted(true)})

    console.log(isMounted);

    return (
        <div id='main-board' className='board'>
            {isMounted && populateBoardFromPuzzle(piecesOnBoard)}
        </div>
    )
}

export default Board