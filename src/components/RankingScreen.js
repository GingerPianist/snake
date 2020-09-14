import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography, makeStyles, CssBaseline, Button } from "@material-ui/core";

function RankingScreen({ startGameAgain }) {
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
                            <TableCell>Nazwa gracza</TableCell>
                            <TableCell>Wynik</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell> Monika</TableCell>
                            <TableCell> 101</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    );
}

export default RankingScreen;
