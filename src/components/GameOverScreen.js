import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        height: '100vh',

        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        margin: 'auto',

        display: 'flex',
        flexShrink: 1,
        flexDirection: 'column',
    },
    title: {
        color: 'red',
    },
})

function GameOverScreen({ endGame }) {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Typography variant="h1" className={classes.title}>
                You lost!
            </Typography>
            <Button variant="contained" onClick={endGame}>
                Play again
            </Button>
        </div>
    )
}

export default GameOverScreen
