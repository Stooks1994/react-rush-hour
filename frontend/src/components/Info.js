import '../styling/Info.css'

const Info = props => {
    const infoString = "Get the red block to the end of its row"

    return (
        <div className='info'>
            <div className='info-row'><h1>RUSH HOUR</h1></div>
            <div className='info-row'>{infoString}</div>
            <div className='info-row'>Login Button Goes here</div>
        </div>
    )
}

export default Info