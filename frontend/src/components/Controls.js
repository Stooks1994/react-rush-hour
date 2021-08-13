import Timer from './Timer'

const Controls = props => {
    const dropdownChangeHandler = event => {
        props.onChangeDifficultySelector(event.target.value)
    }

    return (
        <div>
            <select onChange={dropdownChangeHandler}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            <Timer />
            <button>New Puzzle</button>
            <button>Reset</button>
            <button>Instructions</button>
        </div>
    )
}

export default Controls;