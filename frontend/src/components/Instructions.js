import '../styling/Instructions.css'

const Instructions = () => {
    const infoString = `Get the red block to the end of its row\n   - Pieces move along a single axis\n   - 1x1 blocks are stationary`;

    return (
        <div className='instr-container'>
            <div className='instr'>
                <div className='instr-row'><h1>INSTRUCTIONS</h1></div>
                <div className='instr-row'>{infoString}</div>
            </div>
        </div>
    )
}

export default Instructions