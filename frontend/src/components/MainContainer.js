import React, { useState } from 'react'

import Game from "./Game"
import Info from './Info'
import NavBar from "./NavBar"
import Instructions from './Instructions'
import '../styling/MainContainer.css'

const MainContainer = () => {
    const [contentSelection, setContentSelection] = useState("game");

    function contentSelectionHandler(selection) {
        setContentSelection(selection)
    }

    let mainSectionContent = <Game />

    switch (contentSelection) {
        case "about":
            mainSectionContent = <Info />
            break
        case "game":
            mainSectionContent = <Game />
            break
        case "instructions":
            mainSectionContent = <Instructions />
    }

    return (
        <div className='main-container'>
            <NavBar 
                setContentSelection={contentSelectionHandler}
            />
            {mainSectionContent}
        </div>
    )
}

export default MainContainer