import Board from './Board'
import Controls from './Controls'
import '../styling/Game.css'

const Game = () => {
    return (
        <div className='game'>
            <Controls />
            <div className='game'>
                <Board />    
            </div>
        </div>
    )
}

export default Game