import React, { useState, useEffect } from "react"
import Piece from "./Piece";
import '../styling/Board.css'

const BOARD_SIZE = 6;

const TEST_PUZZLE = {
    pieces: [
        {id:0, x:0, y:2, h:1, w:2, orientation:'HORIZONTAL', color:'red', escapingPiece:true},
        {id:1, x:2, y:0, h:3, w:1, orientation:'VERTICAL', color:'blue', escapingPiece:false},
        {id:2, x:0, y:3, h:1, w:3, orientation:'HORIZONTAL', color:'green', escapingPiece:false},
        {id:3, x:5, y:3, h:3, w:1, orientation:'VERTICAL', color:'teal', escapingPiece:false},
    ]
}

const getEscapeSpace = pieces => {
    let escapePiece = pieces.filter(piece => piece.escapingPiece)
    return escapePiece[0]
}

const Board = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [piecesOnBoard, setPiecesOnBoard] = useState(TEST_PUZZLE.pieces);
    const escapeSpace = getEscapeSpace(TEST_PUZZLE.pieces);

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
            let newState = prevState.slice();

            newState.forEach(element => {
                if (element.id === id) {
                    if (element.orientation == 'HORIZONTAL') {
                        element.x = newBin;
                    } else if (element.orientation == 'VERTICAL') {
                        element.y = newBin;
                    }
                }
            })

            return newState;
        })

        if (id == escapeSpace.id && newBin + escapeSpace.w > 5) {
            alert('you win')
        }
    }
    
    useEffect(() => {setIsMounted(true)})

    return (
        <div id='main-board' className='board'>
            {isMounted && populateBoardFromPuzzle(piecesOnBoard)}
        </div>
    )
}

export default Board