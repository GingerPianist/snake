import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import GameTable from "./GameTable";
import GameToolbar from "./GameToolbar";
import { red, lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles({
    main: {
        margin: "auto",
    },
});

const colors = {
    snake: red[500],
    apple: lightGreen[400],
    grid: "lightgrey",
};

function GameScreen({ gameOver, snakeSpeed, setSnakeSpeed }) {
    const classes = useStyles();
    const height = 20;
    const width = 40;
    const [grid, setGrid] = useState([]);

    const head = useRef([0, 0]);
    const snakeGrid = useRef([]);
    const direction = useRef([0]);
    const snakeLength = useRef(4);
    const apple = useRef([0, 0]);
    const [pause, setPause] = useState(false); //false - nie ma pauzy true-jest pauza

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
        if (pause === false) handle = setInterval(gameTick, snakeSpeed);

        return () => {
            clearInterval(handle);
        };
    }, [pause, snakeSpeed]);

    useEffect(() => {
        document.addEventListener("keydown", keyPress);

        return () => {
            document.removeEventListener("keydown", keyPress);
        };
    }, []);

    function gameTick() {
        if (direction.current.length > 1) direction.current.shift();
        switch (direction.current[0]) {
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
                                gridCopy[i] = [...oldGrid[i]];
                                gridCopy[i][j] = colors.grid;
                            }
                        }
                    }
                }

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

                gridCopy[head.current[0]] = [...gridCopy[head.current[0]]];
                gridCopy[head.current[0]][head.current[1]] = colors.snake;

                return gridCopy;
            });
        }
    }

    function keyPress(event) {
        let temp = direction.current[direction.current.length - 1];
        switch (event.key) {
            case "ArrowRight":
                if (temp !== 2) direction.current.push(0);
                break;
            case "ArrowUp":
                if (temp !== 3) direction.current.push(1);
                break;
            case "ArrowLeft":
                if (temp !== 0) direction.current.push(2);
                break;
            case "ArrowDown":
                if (temp !== 1) direction.current.push(3);
                break;
            case "p":
                setPause((oldPause) => !oldPause);
                break;
            default:
                break;
        }
    }

    /*function changePause() {
        setPause((oldPause) => (oldPause === 1 ? 0 : 1));
    }*/

    return (
        <div className={classes.main}>
            <GameToolbar
                pause={pause}
                setPause={setPause}
                snakeSpeed={snakeSpeed}
                setSnakeSpeed={setSnakeSpeed}
                score={snakeLength.current}
            />
            <GameTable grid={grid} />
        </div>
    );
}

export default GameScreen;
