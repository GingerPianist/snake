import React, { useEffect, useState, useRef } from "react";
import {
    makeStyles,
    Typography,
    IconButton,
    Toolbar,
    AppBar,
} from "@material-ui/core";
import { PlayArrow, Pause } from "@material-ui/icons";
import GameTable from "./GameTable";
import { red, lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles({
    main: {
        margin: "auto",
        //textAlign: "center",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: red[900],
    },
});

const colors = {
    snake: red[500],
    apple: lightGreen[400],
    grid: "lightgrey",
};

function GameScreen({ gameOver }) {
    const classes = useStyles();
    const height = 20;
    const width = 40;
    const [grid, setGrid] = useState([]);

    const head = useRef([0, 0]);
    const snakeGrid = useRef([]);
    const direction = useRef(0);
    const snakeLength = useRef(4);
    const apple = useRef([0, 0]);
    const [pause, setPause] = useState(0); //0 - nie ma pauzy 1-jest pauza

    useEffect(() => {
        apple.current[0] = Math.floor(Math.random() * height);
        apple.current[1] = Math.floor(Math.random() * width);

        const tempGrid = [];
        snakeGrid.current = [];
        for (let i = 0; i < height; i++) {
            const row = [];
            const snakeRow = [];
            for (let j = 0; j < width; j++) {
                if (i === apple.current[0] && j === apple.current[1])
                    row.push(colors.apple);
                else row.push(colors.grid);
                snakeRow.push(0);
            }
            tempGrid.push(row);
            snakeGrid.current.push(snakeRow);
        }
        setGrid(tempGrid);
    }, []);

    useEffect(() => {
        let handle;
        if (pause === 0) handle = setInterval(gameTick, 200);
        document.addEventListener("keydown", keyPress);

        return () => {
            clearInterval(handle);
            document.removeEventListener("keydown", keyPress);
        };
    }, [pause]);

    /*function setCell(row, column, color) {
        //USUNĄĆ TĘ FUNKCJĘ I WŁOŻYĆ JĄ DO GAMETICKA!
        const gridCopy = [...grid];
        gridCopy[row] = [...gridCopy[row]]; //zmieniamy wskaznik do zmienionego wiersza tak, aby poinformowac Reacta o zmianie wartosci
        gridCopy[row][column] = color;
        setGrid(gridCopy);
        console.log(row, column, color, gridCopy);
    }*/

    function gameTick() {
        switch (direction.current) {
            case 0: //w prawo
                head.current[1]++;
                break;
            case 1: //w gore
                head.current[0]--;
                break;
            case 2: //w lewo
                head.current[1]--;
                break;
            case 3: //w dol
                head.current[0]++;
                break;
            default:
                break;
        }
        head.current[0] += height;
        head.current[0] %= height;

        head.current[1] += width;
        head.current[1] %= width;

        if (snakeGrid.current[head.current[0]][head.current[1]] !== 0) {
            gameOver(snakeLength.current);
        } else {
            setGrid((oldGrid) => {
                const gridCopy = [...oldGrid];

                for (let i = 0; i < height; i++) {
                    for (let j = 0; j < width; j++) {
                        if (snakeGrid.current[i][j] !== 0) {
                            --snakeGrid.current[i][j];
                            if (snakeGrid.current[i][j] === 0) {
                                gridCopy[i] = [...oldGrid[i]]; //zmieniamy wskaznik do zmienionego wiersza tak, aby poinformowac Reacta o zmianie wartosci
                                gridCopy[i][j] = colors.grid;
                                //setGrid(gridCopy);
                            }
                        }
                    }
                }

                /*
                1) sprawdź czy głowa === jabłuszko
                2) zwiększ długość
                3) zrób nowe jabłuszko w miejscu gdzie nie ma węża
                4) dodaj nowe jabłuszko
                */

                snakeGrid.current[head.current[0]][head.current[1]] =
                    snakeLength.current;

                if (
                    head.current[0] === apple.current[0] &&
                    head.current[1] === apple.current[1]
                ) {
                    snakeLength.current++;

                    if (snakeLength.current < height * width) {
                        do {
                            apple.current[0] = Math.floor(
                                Math.random() * height
                            );
                            apple.current[1] = Math.floor(
                                Math.random() * width
                            );
                        } while (
                            snakeGrid.current[apple.current[0]][
                                apple.current[1]
                            ] !== 0
                        );

                        gridCopy[apple.current[0]] = [
                            ...gridCopy[apple.current[0]],
                        ];
                        gridCopy[apple.current[0]][apple.current[1]] =
                            colors.apple;
                    } else {
                        apple.current = [-1, -1];
                    }
                }

                //setCell(head.current[0], head.current[1], "red");
                //const gridCopy = [...grid];
                gridCopy[head.current[0]] = [...gridCopy[head.current[0]]]; //zmieniamy wskaznik do zmienionego wiersza tak, aby poinformowac Reacta o zmianie wartosci
                gridCopy[head.current[0]][head.current[1]] = colors.snake;

                return gridCopy;
            });
        }
    }

    function keyPress(event) {
        switch (event.key) {
            case "ArrowRight":
                if (direction.current !== 2) direction.current = 0;
                break;
            case "ArrowUp":
                if (direction.current !== 3) direction.current = 1;
                break;
            case "ArrowLeft":
                if (direction.current !== 0) direction.current = 2;
                break;
            case "ArrowDown":
                if (direction.current !== 1) direction.current = 3;
                break;
            case "p":
                changePause();
                break;
            default:
                break;
        }
    }

    function changePause() {
        if (pause === 1) setPause(0);
        else setPause(1);
    }

    return (
        <div className={classes.main}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.header}>
                    <Typography variant="h6">
                        Your score is: {snakeLength.current}
                    </Typography>
                    <div className={classes.grow}></div>
                    <IconButton onClick={changePause} color="inherit">
                        {pause === 1 ? <PlayArrow /> : <Pause />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <GameTable grid={grid} />
        </div>
    );
}

export default GameScreen;
