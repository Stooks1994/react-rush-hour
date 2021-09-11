import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './Board'
import Controls from './Controls'
import Info from './Info'
import Navigation from './Navigation'
import '../styling/Game.css'

const getRandomColorCode = escapingPiece => {
    if (escapingPiece) {
        return "#FF0000"
    }

    var red = "00";
    var green = (Math.floor(Math.random() * 255)).toString(16);
    var blue = (Math.floor(Math.random() * 255)).toString(16);

    if (green.length == 1)
        green = "0" + green;
        
    if (blue.length == 1)
        blue = "0" + blue;

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
    const [gameStarted, setGameStarted] = useState(false);

    const prepFallBack = () => {
        let fallback = {
            pieces: [
                {id:0, x:0, y:2, h:1, w:2, orientation:'HORIZONTAL', color:'red', escapingPiece:true},
                {id:1, x:2, y:0, h:3, w:1, orientation:'VERTICAL', color:'blue', escapingPiece:false},
                {id:2, x:0, y:3, h:1, w:3, orientation:'HORIZONTAL', color:'green', escapingPiece:false},
                {id:3, x:5, y:3, h:3, w:1, orientation:'VERTICAL', color:'teal', escapingPiece:false},
            ]
        }
    
        setRandomColorCodesForPieces(fallback)
        setPuzzle(fallback)
        setBasePuzzle(fallback)
    }

    const setDifficulty = difficulty => {
        setSelectedDifficulty(difficulty);
    }

    const getNewPuzzle = () => {
        switch (selectedDifficulty) {
            case "easy":
                //axios.get(`http://localhost:8081/api/getEasyPuzzle`)
                axios.get(`/api/getEasyPuzzle`)
                .then(res => {
                    setRandomColorCodesForPieces(res.data);
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                })
                .catch(err => {
                    console.log(err);
                    prepFallBack();
                })
                break;
            case "medium":
                //axios.get(`http://localhost:8081/api/getMediumPuzzle`)
                axios.get(`/api/getMediumPuzzle`)
                .then(res => {
                    setRandomColorCodesForPieces(res.data);
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                })
                .catch(err => {
                    console.log(err);
                    prepFallBack();
                })
                break;
            case "hard":
                //axios.get(`http://localhost:8081/api/getHardPuzzle`)
                axios.get(`/api/getHardPuzzle`)
                .then(res => {
                    setRandomColorCodesForPieces(res.data);
                    setPuzzle(res.data)
                    setBasePuzzle(JSON.parse(JSON.stringify(res.data)))
                })
                .catch(err => {
                    console.log(err);
                    prepFallBack();
                })
                break;
        }

        setGameStarted(true);
    }

    const resetPuzzle = () => {
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
                <Board 
                    currPuzzle={puzzle} 
                    isGameStarted={gameStarted} 
                />
            </div>
        </div>
    )
}

export default Game