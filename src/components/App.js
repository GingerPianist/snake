import React, { useState } from "react";
import {
    makeStyles,
    CssBaseline,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import RankingScreen from "./RankingScreen";

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: grey,
    },
});

const useStyles = makeStyles({
    wrapper: {
        width: "100vw",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
    },
});

function App() {
    const classes = useStyles();
    const [currentScreen, setCurrentScreen] = useState("startScreen");
    const [score, setScore] = useState(-1);

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
                <CssBaseline />

                {currentScreen === "startScreen" && (
                    <StartScreen
                        startGame={() => setCurrentScreen("gameScreen")}
                    />
                )}
                {currentScreen === "gameScreen" && (
                    <GameScreen
                        gameOver={(realScore) => {
                            setScore(realScore);
                            setCurrentScreen("gameOverScreen");
                        }}
                    />
                )}
                {currentScreen === "gameOverScreen" && (
                    <GameOverScreen
                        score={score}
                        endGame={() => setCurrentScreen("gameScreen")}
                        showRanking={() => setCurrentScreen("rankingScreen")}
                    />
                )}
                {currentScreen === "rankingScreen" && (
                    <RankingScreen
                        startGameAgain={() => setCurrentScreen("gameScreen")}
                    />
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
