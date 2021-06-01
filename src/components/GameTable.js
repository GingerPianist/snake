import React from "react";
import { makeStyles } from "@material-ui/core";
import { useGlobalState } from "../utils/GlobalState";

const useStyles = makeStyles({});

function GameTable({ grid }) {
    const classes = useStyles();

    const globalState = useGlobalState();
    const borders = globalState.settings.borders;

    return (
        <div>
            <table
                style={{
                    borderSpacing: borders === true ? "1px" : "0px",
                }}
            >
                <tbody>
                    {grid.map((row) => (
                        <tr>
                            {row.map((color) => (
                                <td
                                    style={{
                                        height: 30,
                                        width: 30,
                                        backgroundColor: color,
                                    }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GameTable;
