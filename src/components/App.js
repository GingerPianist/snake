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
    const [snakeSpeed, setSnakeSpeed] = useState(200);

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
                        snakeSpeed={snakeSpeed}
                        setSnakeSpeed={setSnakeSpeed}
                    />
                )}
                {currentScreen === "gameOverScreen" && (
                    <GameOverScreen
                        score={score}
                        endGame={() => {
                            setCurrentScreen("gameScreen");
                            setSnakeSpeed(200);
                        }}
                        showRanking={() => setCurrentScreen("rankingScreen")}
                        snakeSpeed={snakeSpeed}
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
