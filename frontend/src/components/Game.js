import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './Board'
import Controls from './Controls'
import '../styling/Game.css'

const Game = () => {
    const [puzzle, setPuzzle] = useState({pieces: []})
    const [isMounted, setIsMounted] = useState(false)

    /*
    useEffect(() => {
        axios.get(`http://localhost:8081/getEasyPuzzle`)
            .then(res => {
                setPuzzle(res.data)
            })
            .catch(error => {
                console.log(error)
            })

        setIsMounted(true)
    })
    */

    const setDifficulty = difficulty => {
        switch (difficulty) {
            case "easy":
                axios.get(`http://localhost:8081/getEasyPuzzle`)
                .then(res => {
                    //setPuzzle(res.data)
                    setPuzzle(() => {
                        return res.data
                    })
                })
                break;
            case "medium":
                axios.get(`http://localhost:8081/getMediumPuzzle`)
                .then(res => {
                    setPuzzle(res.data)
                })
                break;
        }
    }

    return (
        <div className='game'>
            <Controls onChangeDifficultySelector={setDifficulty}/>
            <div className='game'>
                <Board currPuzzle={puzzle} />   
            </div>
        </div>
    )
}

export default Game