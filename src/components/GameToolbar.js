import React, { useState, useEffect } from "react";
import {
    makeStyles,
    Typography,
    IconButton,
    Toolbar,
    AppBar,
    Tooltip,
    Slider,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    Switch,
    FormControlLabel,
} from "@material-ui/core";
import { PlayArrow, Pause, Settings } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import { useGlobalState } from "../utils/GlobalState";
import Flag from "react-world-flags";

const useStyles = makeStyles({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    appBar: {
        backgroundColor: red[900],
    },
});

function GameToolbar({ pause, setPause, snakeSpeed, setSnakeSpeed, score }) {
    const classes = useStyles();
    const { language } = useGlobalState();

    const [dialogOpen, setDialogOpen] = useState(false);

    const globalState = useGlobalState();
    const borders = globalState.settings.borders;
    const setBorders = globalState.settings.setBorders;

    useEffect(() => {
        document.addEventListener("keydown", keyPress);

        return () => {
            document.removeEventListener("keydown", keyPress);
        };
    }, []);

    function keyPress(event) {
        if (event.key === "s") {
            setDialogOpen((oldValue) => {
                setPause(!oldValue);
                return !oldValue;
            });
        }
        if (event.key === "p") {
            setDialogOpen(false);
        }
    }

    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.header}>
                    <Grid
                        container
                        spacing={2}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h6">
                                {language.toolbar.score}
                                {score}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Slider
                                value={snakeSpeed}
                                onChange={(event, sliderValue) =>
                                    setSnakeSpeed(sliderValue)
                                }
                                valueLabelDisplay="auto"
                                min={30}
                                max={500}
                            />
                        </Grid>
                        <Grid item>
                            <Flag
                                code={
                                    {
                                        polish: "pol",
                                        english: "gbr",
                                        french: "fra",
                                        german: "ger",
                                    }[globalState.currentLanguage]
                                }
                                height="16"
                            />
                        </Grid>
                        <Grid item>
                            <Tooltip title={language.toolbar.settingsTooltip}>
                                <IconButton
                                    color="inherit"
                                    onClick={() => {
                                        setDialogOpen(true);
                                        setPause(true);
                                    }}
                                >
                                    <Settings />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={language.toolbar.pauseTooltip}>
                                <IconButton
                                    onClick={() =>
                                        setPause((oldPause) => !oldPause)
                                    }
                                    color="inherit"
                                >
                                    {pause ? <PlayArrow /> : <Pause />}
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Dialog
                open={dialogOpen}
                onClose={() => {
                    setDialogOpen(false);
                    setPause(false);
                }}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>{language.settings.name}</DialogTitle>
                <DialogContent>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={borders}
                                onChange={(event) => {
                                    setBorders(event.target.checked);
                                }}
                            />
                        }
                        label={
                            borders === true
                                ? language.settings.border
                                : language.settings.noBorder
                        }
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default GameToolbar;
