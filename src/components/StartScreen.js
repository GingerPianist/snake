import React, { useEffect, useState, useRef } from "react";
import {
    Typography,
    makeStyles,
    CssBaseline,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { useGlobalState } from "../utils/GlobalState";
import Flag from "react-world-flags";

const useStyles = makeStyles({
    main: {
        margin: "auto",
        display: "flex",
        flexShrink: 1,
        flexDirection: "column",
    },
    title: {
        color: "red",
    },
});

function StartScreen({ startGame }) {
    const classes = useStyles();
    const { language } = useGlobalState();
    const [menuOpen, setMenuOpen] = useState(false);
    const { setCurrentLanguage } = useGlobalState("wartoscdomyslna?");

    const languageButtonRef = useRef();

    function openMenu() {
        setMenuOpen(true);
    }
    function closeMenu() {
        setMenuOpen(false);
    }
    return (
        <div className={classes.main}>
            <Typography variant="h1" className={classes.title}>
                Snake
            </Typography>

            <Button variant="contained" onClick={startGame}>
                {language.title.startButton}
            </Button>

            <Button
                variant="contained"
                onClick={() => {
                    //zrób instrukcję
                }}
            >
                {language.title.instruction}
            </Button>

            <Button
                variant="contained"
                onClick={openMenu}
                ref={languageButtonRef}
            >
                {language.title.languageButton}
            </Button>
            <Menu
                //menuOpen={menuOpen}
                open={Boolean(menuOpen)}
                onClose={closeMenu}
                anchorEl={languageButtonRef.current}
                //size="m"
            >
                <MenuItem
                    onClick={() => {
                        setCurrentLanguage("polish");
                        setMenuOpen(false);
                    }}
                >
                    <ListItemIcon>
                        <Flag code="pol" height="12" />
                    </ListItemIcon>
                    <ListItemText primary="Polski" />
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setCurrentLanguage("english");
                        setMenuOpen(false);
                    }}
                >
                    <ListItemIcon>
                        <Flag code="gbr" height="12" />
                    </ListItemIcon>
                    <ListItemText primary="English" />
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setCurrentLanguage("french");
                        setMenuOpen(false);
                    }}
                >
                    <ListItemIcon>
                        <Flag code="fra" height="12" />
                    </ListItemIcon>
                    <ListItemText primary="Français" />
                </MenuItem>
            </Menu>
        </div>
    );
}

export default StartScreen;
