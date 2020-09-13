import React, { useState } from 'react'
import { makeStyles, CssBaseline } from '@material-ui/core'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import GameOverScreen from './GameOverScreen'

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        height: '100vh',

        display: 'flex',
        flexDirection: 'column',
    },
})

function App() {
    const classes = useStyles()
    const [currentScreen, setCurrentScreen] = useState('startScreen')

    return (
        <div className={classes.wrapper}>
            <CssBaseline />
            {currentScreen === 'startScreen' && (
                <StartScreen startGame={() => setCurrentScreen('gameScreen')} />
            )}
            {currentScreen === 'gameScreen' && (
                <GameScreen
                    gameOver={() => setCurrentScreen('gameOverScreen')}
                />
            )}
            {currentScreen === 'gameOverScreen' && (
                <GameOverScreen
                    endGame={() => setCurrentScreen('gameScreen')}
                />
            )}
        </div>
    )
}

export default App
