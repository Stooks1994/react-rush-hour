import Timer from './Timer'
import '../styling/Controls.css'

const Controls = props => {

    const getNewPuzzle = () => {
        props.onGetNewPuzzle();
    }

    const resetPuzzle = () => {
        props.onResetPuzzle();
    }

    return (
        <div className='controls'>
            <button className='controls-button' onClick={getNewPuzzle}>New Puzzle</button>
            <button className='controls-button' onClick={resetPuzzle}>Reset</button>
        </div>
    )
}

export default Controls;