import '../styling/Info.css'

const Info = props => {
    const infoString = "Get the red block to the end of its row"

    return (
        <div className='info'>
            <div className='info-row'><h1>RUSH HOUR</h1></div>
            <div className='info-row'>{infoString}</div>
            <div className='info-row'>
                <a href="https://github.com/Stooks1994/react-rush-hour" target="_blank">View Code</a>
                <a href="https://www.michaelfogleman.com/rush/" target="_blank">Puzzles sourced from Michael Fogleman</a>
            </div>
        </div>
    )
}

export default Info