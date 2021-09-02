import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './Board'
import Controls from './Controls'
import '../styling/Game.css'

const Game = () => {
    const [puzzle, setPuzzle] = useState({pieces: []})
    const [basePuzzle, setBasePuzzle] = useState({pieces: []})
    const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

    /*
    const setDifficulty = difficulty => {
        switch (difficulty) {
            case "easy":
                //axios.get(`http://localhost:8081/getEasyPuzzle`)
                axios.get(`/api/getEasyPuzzle`)
                .then(res => {
                    //setPuzzle(res.data)
                    setPuzzle(() => {
                        return res.data
                    })
                })
                break;
            case "medium":
                //axios.get(`http://localhost:8081/getMediumPuzzle`)
                axios.get(`/api/getMediumPuzzle`)
                .then(res => {
                    setPuzzle(res.data)
                })
                break;
        }
    }
    */

    const setDifficulty = difficulty => {
        setSelectedDifficulty(difficulty);
    }

    const getNewPuzzle = () => {
        switch (selectedDifficulty) {
            case "easy":
                axios.get(`http://localhost:8081/getEasyPuzzle`)
                //axios.get(`/api/getEasyPuzzle`)
                .then(res => {
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                })
                break;
            case "medium":
                axios.get(`http://localhost:8081/getMediumPuzzle`)
                //axios.get(`/api/getMediumPuzzle`)
                .then(res => {
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                })
                break;
        }
    }

    const resetPuzzle = () => {
        console.log(basePuzzle)
        setPuzzle(JSON.parse(JSON.stringify(basePuzzle)));
    }

    return (
        <div className='game'>
            <div className='not-game'>
                <Controls 
                    onChangeDifficultySelector={setDifficulty}
                    onGetNewPuzzle={getNewPuzzle}
                    onResetPuzzle={resetPuzzle}
                />
            </div>
            <div className='game'>
                <Board currPuzzle={puzzle} />   
            </div>
        </div>
    )
}

export default Game