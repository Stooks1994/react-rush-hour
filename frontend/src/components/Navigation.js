import '../styling/Navigation.css'

const Navigation = props => {
    const decrementBoardState = () => {
        props.onUndo()
    }

    const incrementBoardState = () => {
        props.onRedo();
    }

    return (
        <div className='navigation'>
            <div className='left-arrow' onClick={decrementBoardState}><b>&#x27F5;</b></div>
            <div className='counter'>Counter</div>
            <div className='right-arrow' onClick={incrementBoardState}><b>&#x27F6;</b></div>
        </div>
    )
}

export default Navigation