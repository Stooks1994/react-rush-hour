import Tile from './Tile'
import '../styling/BoardRow.css'

const BoardRow = (props) => {
    const updateBoardState = (xCoord, yCoord, isOccupied) => {
        props.updateBoardState(xCoord, yCoord, isOccupied);
    }

    return (
        <tr className='row'>
            <Tile coords={props.ids[0]} updateBoardState={updateBoardState} />
            <Tile coords={props.ids[1]} updateBoardState={updateBoardState} />
            <Tile coords={props.ids[2]} updateBoardState={updateBoardState} />
            <Tile coords={props.ids[3]} updateBoardState={updateBoardState} />
            <Tile coords={props.ids[4]} updateBoardState={updateBoardState} />
            <Tile coords={props.ids[5]} updateBoardState={updateBoardState} />
        </tr>
    )
}

export default BoardRow