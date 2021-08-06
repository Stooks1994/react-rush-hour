import React, { useState } from 'react'
import Draggable from 'react-draggable';

//const BOARD_PX = document.getElementById('main-board').getBoundingClientRect.width;
//console.log(BOARD_PX);
const BOARD_SIZE = 6;
const SIZE_MOD = 100 / BOARD_SIZE;

const preparePiece = (id, x, y, h, w, axis, color, coordHandler) => {
    let xPos = x * SIZE_MOD;
    let yPos = y * SIZE_MOD;
    let height = h * SIZE_MOD;
    let width = w * SIZE_MOD;

    return (
        <Draggable axis={axis} bounds='parent' onStop={coordHandler}>
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

    const passNewCoordsToParent = () => {
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
        
            //setCurrX(newBin)
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
            
        }

        //props.updateCoords(props.pieceProps.id, currX, currY);
    }

    let currPiece = props.pieceProps.orientation == 'HORIZONTAL' 
        ? preparePiece(props.pieceProps.id, currX, currY, 1, props.pieceProps.size, 'x', props.pieceProps.color, passNewCoordsToParent)
        : preparePiece(props.pieceProps.id, currX, currY, props.pieceProps.size, 1, 'y', props.pieceProps.color, passNewCoordsToParent);

    return currPiece;
}

export default Piece;