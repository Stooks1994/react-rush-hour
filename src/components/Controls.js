import Timer from './Timer'

const Controls = props => {
    return (
        <div>
            <Timer />
            <button>New Puzzle</button>
            <button>Reset</button>
            <button>Instructions</button>
        </div>
    )
}

export default Controls;