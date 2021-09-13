import React, { useState } from "react"
import '../styling/NavBar.css'

const NavBar = props => {
    const [navSelection, setNavSelection] = useState("game")

    const selectedStyle = {
        backgroundColor: '#ffe6c4',
    }

    const unselectedStyle = {
        backgroundColor: 'Transparent'
    }

    function onContentSelection(selection) {
        setNavSelection(selection)
        props.setContentSelection(selection)
    }

    return (
        <div className='nav-bar'>
            <button 
                className='nav-bar-item' 
                onClick={() => onContentSelection("game")} 
                style={navSelection == "game" ? selectedStyle : unselectedStyle}
            >
                Game
            </button>
            <button 
                className='nav-bar-item' 
                onClick={() => onContentSelection("about")}
                style={navSelection == "about" ? selectedStyle : unselectedStyle}
            >
                About
            </button>
            <button 
                className='nav-bar-item' 
                onClick={() => onContentSelection("instructions")}
                style={navSelection == "instructions" ? selectedStyle : unselectedStyle}
                >
                Instructions
            </button>
        </div>
    )
}

export default NavBar