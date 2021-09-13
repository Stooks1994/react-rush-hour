import '../styling/Info.css'

const Info = props => {
    const infoString = `A clone of the board game, Rush Hour, made using React.js and Go`;
    
    return (
        <div className='info-container'>
            <div className='info'>
                <div className='info-row'><h1>RUSH HOUR</h1></div>
                <div className='info-row'>{infoString}</div>
                <div className='info-row'>
                    <a href="https://github.com/ian-anderson94/react-rush-hour" target="_blank">View Code</a>
                    <a href="https://www.michaelfogleman.com/rush/" target="_blank">Puzzles sourced from Michael Fogleman</a>
                </div>
            </div>
        </div>
    )
}

export default Info