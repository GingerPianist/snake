import React, { useState } from "react";
import { Typography, makeStyles, Button, TextField } from "@material-ui/core";

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

        textAlign: "center",
    },
    title: {
        color: "red",
    },
});

function GameOverScreen({ score, endGame, showRanking }) {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [showTextField, setShowTextField] = useState(true);

    const saveScore = () => {
        setShowTextField(false);

        const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");
        ranking.push({ name: username, score });
        localStorage.setItem("ranking", JSON.stringify(ranking));

        showRanking();
    };

    return (
        <div className={classes.main}>
            <Typography variant="h1" className={classes.title}>
                You lost!
            </Typography>
            <Button variant="contained" onClick={endGame}>
                Play again
            </Button>
            <Button variant="contained" onClick={showRanking}>
                Best scores
            </Button>

            <Typography>Your score is {score}</Typography>

            {showTextField && (
                <TextField
                    label="Your name"
                    variant="outlined"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" && saveScore()}
                />
            )}
        </div>
    );
}

export default GameOverScreen;
