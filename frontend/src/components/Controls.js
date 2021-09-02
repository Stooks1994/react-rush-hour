import Timer from './Timer'
import '../styling/Controls.css'

const Controls = props => {
    const dropdownChangeHandler = event => {
        props.onChangeDifficultySelector(event.target.value)
    }

    const getNewPuzzle = () => {
        props.onGetNewPuzzle();
    }

    const resetPuzzle = () => {
        props.onResetPuzzle();
    }

    return (
        <div className='controls'>
            <select onChange={dropdownChangeHandler}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            <button onClick={getNewPuzzle}>New Puzzle</button>
            <button onClick={resetPuzzle}>Reset</button>
        </div>
    )
}

export default Controls;