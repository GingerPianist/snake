import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

function GameTable({ grid }) {
    const classes = useStyles();

    return (
        <div>
            <table>
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
