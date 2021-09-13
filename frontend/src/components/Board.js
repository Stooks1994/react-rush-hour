import React, { useState, useEffect } from "react"
import Piece from "./Piece";
import '../styling/Board.css'

const getEscapeSpace = pieces => {
    let escapePiece = pieces.filter(piece => piece.escapingPiece)
    return escapePiece[0]
}

const Board = props => {
    const [isMounted, setIsMounted] = useState(false);
    const [piecesOnBoard, setPiecesOnBoard] = useState(props.currPuzzle.pieces);
    const escapeSpace = getEscapeSpace(props.currPuzzle.pieces);

    useEffect(() => {
        setPiecesOnBoard(props.currPuzzle.pieces);
    },[props.currPuzzle.pieces])

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

    if (props.isGameStarted) {
        return (
            <div id='main-board' className='board'>
                {isMounted && populateBoardFromPuzzle(piecesOnBoard)}
            </div>
        )
    } else {
        return (
            <div id='main-board' className='empty-board'>
                <div>Click the New Puzzle button to get started</div>
            </div>  
        )
    }
}

export default Board