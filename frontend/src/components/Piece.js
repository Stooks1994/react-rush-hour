import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable';

const BOARD_SIZE = 6;
const SIZE_MOD = 100 / BOARD_SIZE;

const AXIS = {
    x: 'x',
    y: 'y'
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
                if (x >= otherPiece.x && y >= otherPiece.y && y < otherPiece.y + otherPiece.h) {
                    left = parseInt(0 - ((x - (otherPiece.x + otherPiece.w)) * tileSize))
                } else if (x < otherPiece.x && y >= otherPiece.y && y < otherPiece.y + otherPiece.h) {
                    right = parseInt((otherPiece.x * tileSize) - ((x + w) * tileSize))
                }
            } else if (axis == AXIS.y) {
                if (y >= otherPiece.y && x >= otherPiece.x && x < otherPiece.x + otherPiece.w) {
                    top = parseInt(0 - ((y - (otherPiece.y + otherPiece.h)) * tileSize))
                } else if (y < otherPiece.y && x >= otherPiece.x && x < otherPiece.x + otherPiece.w) {
                    bottom = parseInt((otherPiece.y * tileSize) - ((y + h) * tileSize))
                }
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

    let bounds = calculateBounds(id, x, y, h, w, allPieces, axis)

    return (
        <Draggable axis={axis} bounds={bounds} onStop={coordHandler} position={{x:0, y:0}}>
            <div id={id} style={{
                position:'absolute', 
                left:`${xPos}%`, 
                top:`${yPos}%`, 
                height:`${height}%`, 
                width:`${width}%`, 
                backgroundColor:`${color}`,
                borderRadius:'15px'
            }} />
        </Draggable>
    )
}

const Piece = props => {
    const passNewBinToParent = () => {
        let currElement = document.getElementById(props.pieceProps.id)

        let boardPx = document.getElementById('main-board').getBoundingClientRect().width
        let vals = currElement.style.transform.match(/-?[0-9]+/gm)
        let tileSize = boardPx / BOARD_SIZE;

        if (vals.length == 1 && vals[0] != "0") {
            // Only has transform in X direction
            let xTransform = Number(vals[0])
            let newOffset = currElement.offsetLeft + xTransform
            let newBin = 0

            if (newOffset <= 0.5 * tileSize) {
                newBin = 0;
            } else if (newOffset <= 1.5 * tileSize && newOffset > 0.5 * tileSize) {
                newBin = 1;
            } else if (newOffset <= 2.5 * tileSize && newOffset > 1.5 * tileSize) {
                newBin = 2;
            } else if (newOffset <= 3.5 * tileSize && newOffset > 2.5 * tileSize) {
                newBin = 3;
            } else if (newOffset <= 4.5 * tileSize && newOffset > 3.5 * tileSize) {
                newBin = 4;
            } else {
                newBin = 5;
            }

            props.onFinishedDragging(props.pieceProps.id, newBin)
        } else if (vals.length == 2) {
            // Has transforms for both X and Y directions -- X will be 0
            let yTransform = Number(vals[1])
            let newOffset = currElement.offsetTop + yTransform
            let newBin = 0

            if (newOffset <= 0.5 * tileSize) {
                newBin = 0;
            } else if (newOffset <= 1.5 * tileSize && newOffset > 0.5 * tileSize) {
                newBin = 1;
            } else if (newOffset <= 2.5 * tileSize && newOffset > 1.5 * tileSize) {
                newBin = 2;
            } else if (newOffset <= 3.5 * tileSize && newOffset > 2.5 * tileSize) {
                newBin = 3;
            } else if (newOffset <= 4.5 * tileSize && newOffset > 3.5 * tileSize) {
                newBin = 4;
            } else {
                newBin = 5;
            }
            
            props.onFinishedDragging(props.pieceProps.id, newBin)
        }
    }

    let currPiece = props.pieceProps.orientation == 'HORIZONTAL' 
        ? preparePiece(props.pieceProps.id, props.pieceProps.x, props.pieceProps.y, props.pieceProps.h, props.pieceProps.w, props.allPieces, 'x', props.pieceProps.color, passNewBinToParent)
        : preparePiece(props.pieceProps.id, props.pieceProps.x, props.pieceProps.y, props.pieceProps.h, props.pieceProps.w, props.allPieces, 'y', props.pieceProps.color, passNewBinToParent);

    return currPiece;
}

export default Piece;