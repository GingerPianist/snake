import React from "react";
import { Typography, makeStyles, CssBaseline, Button } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        width: "100vw",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
    },
    main: {
        margin: "auto",

        display: "flex",
        flexShrink: 1,
        flexDirection: "column",
    },
    title: {
        color: "red",
    },
});

function StartScreen({ startGame }) {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Typography variant="h1" className={classes.title}>
                Snake
            </Typography>
            <Button variant="contained" onClick={startGame}>
                Play Classic Snake
            </Button>
        </div>
    );
}

export default StartScreen;
