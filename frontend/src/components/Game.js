import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './Board'
import Controls from './Controls'
import Info from './Info'
import '../styling/Game.css'

const getRandomColorCode = escapingPiece => {
    if (escapingPiece) {
        return "#FF0000"
    }

    var red = "00";
    var green = (Math.floor(Math.random() * 255)).toString(16);
    var blue = (Math.floor(Math.random() * 255)).toString(16);

    return `#${red}${green}${blue}`;
}

const setRandomColorCodesForPieces = puzzle => {
    for (var index = 0; index < puzzle.pieces.length; index++) {
        puzzle.pieces[index].color = getRandomColorCode(puzzle.pieces[index].escapingPiece);
    }
}

const Game = () => {
    const [puzzle, setPuzzle] = useState({pieces: []})
    const [basePuzzle, setBasePuzzle] = useState({pieces: []})
    const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

    const setDifficulty = difficulty => {
        setSelectedDifficulty(difficulty);
    }

    const getNewPuzzle = () => {
        switch (selectedDifficulty) {
            case "easy":
                axios.get(`http://localhost:8081/getEasyPuzzle`)
                //axios.get(`/api/getEasyPuzzle`)
                .then(res => {
                    setRandomColorCodesForPieces(res.data);
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                    //console.log(res.data);
                })
                break;
            case "medium":
                axios.get(`http://localhost:8081/getMediumPuzzle`)
                //axios.get(`/api/getMediumPuzzle`)
                .then(res => {
                    setRandomColorCodesForPieces(res.data);
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                })
                break;
            case "hard":
                axios.get(`http://localhost:8081/getHardPuzzle`)
                //axios.get(`/api/getHardPuzzle`)
                .then(res => {
                    setRandomColorCodesForPieces(res.data);
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
                <Info />
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