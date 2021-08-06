import { is } from "@babel/types";
import React, { useState } from "react";
import Draggable from "react-draggable";

const Tile = (props) => {
    const [isOccupied, setIsOccupied] = useState(props.coords.isOccupied);

    const xCoord = props.coords.x;
    const yCoord = props.coords.y;

    const clickHandler = () => {
        setIsOccupied(!isOccupied)
        props.updateBoardState(xCoord, yCoord, !isOccupied);
    }

    if (isOccupied) {
        return ( 
            <Draggable axis='x' bounds='parent'>
                <td style={{backgroundColor:'red'}} onClick={clickHandler}></td>
            </Draggable>
        )
    }

    return (
        <td onClick={clickHandler}></td>
    )
}

export default Tile;