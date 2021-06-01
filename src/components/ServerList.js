import React, { useRef, useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    main: {
        margin: "auto",
        display: "flex",
        flexShrink: 1,
        flexDirection: "column",

        padding: 8,
    },
});

const ServerList = () => {
    const classes = useStyles();
    const socket = useRef();

    const [gameOverview, setGameOverview] = useState(null);

    useEffect(() => {
        socket.current = new WebSocket("ws://localhost:5000/gameOverview");
        socket.current.addEventListener("message", (message) => {
            const { type, value } = JSON.parse(message.data);
            console.log(type, value);
            switch (type) {
                case "clientId":
                    break;
                case "stateUpdate":
                    setGameOverview(value);
                    break;
            }
        });

        return () => {
            socket.current.close();
        };
    }, []);

    return (
        <Paper className={classes.main}>
            {gameOverview === null ? (
                "Loading..."
            ) : (
                <ul>
                    {Object.values(gameOverview).map(
                        ({ name, playerCount }) => (
                            <li>
                                {name}, {playerCount}
                            </li>
                        )
                    )}
                </ul>
            )}
            {/*<button onClick={testServer}>Click</button>*/}
        </Paper>
    );
};

export default ServerList;
