import React, { useState } from 'react'
import Draggable from 'react-draggable';

const BOARD_SIZE = 6;
const SIZE_MOD = 100 / BOARD_SIZE;

const AXIS = {
    x: 'x',
    y: 'y'
}

const calculateBoundsFromOtherPiece = (parentBound, currPos, otherPos, otherSize) => {

}

const calculateBounds = (id, x, y, h, w, allPieces, axis) => {
    let boardBoundingRect = document.getElementById('main-board').getBoundingClientRect();
    let tileSize = boardBoundingRect.width / BOARD_SIZE;

    let left = parseInt(0 - (x * tileSize));
    let top = parseInt(0 - (y * tileSize));
    let right = parseInt(boardBoundingRect.width - ((w + x) * tileSize));
    let bottom = parseInt(boardBoundingRect.height - ((h + y) * tileSize));
    
    allPieces.forEach(otherPiece => {
        if (id != otherPiece.id) {
            if (axis == AXIS.x) {
                if (x >= otherPiece.x && y >= otherPiece.y && y <= otherPiece.y + otherPiece.size) {
                    left = parseInt(0 - ((x - (otherPiece.x + otherPiece.size)) * tileSize))
                } else if (x <= otherPiece.x && y >= otherPiece.y && y <= otherPiece.y + otherPiece.size) {
                    right = parseInt(boardBoundingRect.width - ((w + x + otherPiece.size) * tileSize))
                }
            } else if (axis == AXIS.y) {

            }
        }
    })

    return {
        left: left, 
        top: top, 
        right: right, 
        bottom: bottom
    }
}

const preparePiece = (id, x, y, h, w, allPieces, axis, color, coordHandler) => {
    let xPos = x * SIZE_MOD;
    let yPos = y * SIZE_MOD;
    let height = h * SIZE_MOD;
    let width = w * SIZE_MOD;
    
    return (
        <Draggable axis={axis} bounds={calculateBounds(id, x, y, h, w, allPieces, axis)} onStop={coordHandler}>
            <div id={id} style={{
                position:'absolute', 
                left:`${xPos}%`, 
                top:`${yPos}%`, 
                height:`${height}%`, 
                width:`${width}%`, 
                backgroundColor:`${color}`,
            }} />
        </Draggable>
    )
}

const Piece = props => {
    const [currX, setCurrX] = useState(props.pieceProps.x);
    const [currY, setCurrY] = useState(props.pieceProps.y);

    const passNewBinToParent = () => {
        let currElement = document.getElementById(props.pieceProps.id)

        let boardPx = document.getElementById('main-board').getBoundingClientRect().width
        let vals = currElement.style.transform.match(/-?[0-9]+/gm)

        if (vals.length == 1) {
            // Only has transform in X direction
            let xTransform = Number(vals[0])
            let newOffset = currElement.offsetLeft + xTransform
            let newBin = boardPx / newOffset

            switch(Math.trunc(newBin)) {
                case 0: 
                    newBin = 5
                    break;
                case 1:
                    newBin = 4
                    break;
                case 2:
                    newBin = 3
                    break;
                case 3:
                    newBin = 2
                    break;
                case 4:
                    newBin = 1
                    break;
                case 5:
                    newBin = 0
                    break;
                default:
                    newBin = 0
            }
        
            props.onFinishedDragging(props.pieceProps.id, newBin)
        } else {
            // Has transforms for both X and Y directions -- X will be 0
            let yTransform = Number(vals[1])
            let newOffset = currElement.offsetTop + yTransform

            let newBin = boardPx / newOffset

            switch(Math.trunc(newBin)) {
                case 0: 
                    newBin = 5
                    break;
                case 1:
                    newBin = 4
                    break;
                case 2:
                    newBin = 3
                    break;
                case 3:
                    newBin = 2
                    break;
                case 4:
                    newBin = 1
                    break;
                case 5:
                    newBin = 0
                    break;
                default:
                    newBin = 0
            }
            
            props.onFinishedDragging(props.pieceProps.id, newBin)
        }
    }

    let currPiece = props.pieceProps.orientation == 'HORIZONTAL' 
        ? preparePiece(props.pieceProps.id, currX, currY, 1, props.pieceProps.size, props.allPieces, 'x', props.pieceProps.color, passNewBinToParent)
        : preparePiece(props.pieceProps.id, currX, currY, props.pieceProps.size, 1, props.allPieces, 'y', props.pieceProps.color, passNewBinToParent);

    return currPiece;
}

export default Piece;