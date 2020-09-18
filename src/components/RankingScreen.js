import React from "react";
import {
    Typography,
    makeStyles,
    CssBaseline,
    Button,
    TableRow,
    TableHead,
    TableContainer,
    Table,
    TableCell,
    TableBody,
} from "@material-ui/core";

function RankingScreen({ startGameAgain }) {
    const dataTable = JSON.parse(localStorage.getItem("ranking") || "[]");
    /*[
        { name: "Adam", score: 75 },
        { name: "Monika", score: 101 },
        { name: "Zosia", score: 72 },
    ];*/

    dataTable.sort((a, b) => b.score - a.score);

    return (
        <div>
            <div align="center">
                <Button variant="contained" onClick={startGameAgain}>
                    Play again
                </Button>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ranking</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Best score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTable.map(({ name, score }) => (
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell>{score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default RankingScreen;
