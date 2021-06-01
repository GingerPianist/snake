import React, { useState, useEffect } from "react";
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
import ServerList from "./ServerList";

import { useGlobalState } from "../utils/GlobalState";

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
    //const [currentScreen, setCurrentScreen] = useState("startScreen");
    const [score, setScore] = useState(-1);
    const [snakeSpeed, setSnakeSpeed] = useState(200);
    const { setCurrentLanguage } = useGlobalState();

    useEffect(() => {
        document.addEventListener("keydown", keyPress);

        return () => {
            document.removeEventListener("keydown", keyPress);
        };
    }, []);

    function keyPress(event) {
        console.log(event.key);
        switch (event.key) {
            case "f":
                setCurrentLanguage("french");
                break;
            case "l":
                setCurrentLanguage("polish");
                break;
            case "e":
                setCurrentLanguage("english");
                break;
        }
    }

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
                {/*currentScreen === "serverList" && <ServerList />*/}
            </div>
        </ThemeProvider>
    );
}

export default App;
