import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import LadnyTekst from "./LadnyTekst";
import KonwersjaStopni from "./KonwersjaStopni";

function App() {
    const [value, setValue] = useState(0);
    const [licznik2, setLicznik2] = useState(0);
    const [speed, setSpeed] = useState(0.5);
    const [tabelkaKolorow, setKolory] = useState(["green", "yellow", "purple"]);
    const [celsjusz, setCelsjusz] = useState(-273);

    let array = [
        "#000000",
        "red",
        "pink",
        "blue",
        "white",
        "#091238",
        "rgb(35 72 228)",
    ];

    const tabelkaImion = [
        ["Monika", "Adam", "Jagoda"],
        ["Kuba", "Damian", "Igor"],
        ["Jacek", "Mateusz", "Konrad"],
    ];

    function kliknieto() {
        console.log("kilk!");
        //setValue(value + 1);
        setValue((oldValue) => oldValue + 1);
        setLicznik2((staryLicznik) => (staryLicznik + 1) % array.length);
    }

    function kliknieto2() {
        setValue(0);
    }

    function speedChange() {
        setSpeed(5);
        setTimeout(() => {
            setSpeed(2);
        }, 5000);
    }

    function wpisywanie(event) {
        //  console.log(event.target.name, event.target.value);
        const kolumna = event.target.name;
        const tekst = event.target.value;

        setKolory((staraTabelka) => {
            const nowaTabelka = [...staraTabelka];
            nowaTabelka[kolumna] = tekst;

            return nowaTabelka;
        });
    }

    //(warunek) ? (jeżeli prawda) : (jeżeli fałsz)
    // cout << ((blad) ? ("NIE") : ("TAK"));

    // (warunek) && wartość

    /*useEffect(() => {
        const handle = setInterval(() => {
            kliknieto();
        }, 1000 / speed);

        return () => {
            clearInterval(handle);
        };
    }, [speed]);*/

    return (
        <div className="App">
            <header className="App-header">
                <KonwersjaStopni
                    celsjusz={celsjusz}
                    setCelsjusz={setCelsjusz}
                />
                <LadnyTekst color={celsjusz < 0 ? "grey" : "yellow"}>
                    {celsjusz < 0 ? "Jest zimno" : "Jest ciepło"}
                </LadnyTekst>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {array.slice(0, licznik2 + 1).map((wartosc) => (
                    <LadnyTekst color={wartosc} key={wartosc}>
                        Oto kolorek
                    </LadnyTekst>
                ))}
                <LadnyTekst color={array[licznik2]}>Kolorowe słowo</LadnyTekst>
                <LadnyTekst color="red" backgroundColor="blue">
                    {value}
                </LadnyTekst>
                {value >= 100 && value < 150 && (
                    <LadnyTekst color="lime">
                        Gratulacje! Wytrwałeś 100 kliknięć
                    </LadnyTekst>
                )}
                <button onClick={kliknieto}>Kilknij mnie!</button>
                <button onClick={kliknieto2}>wyzeruj licznik nr 1</button>
                <button onClick={speedChange}>przyspiesz na 5 sekund</button>
                <LadnyTekst color="red" backgroundColor="blue">
                    Napis
                </LadnyTekst>
                <table>
                    <thead>
                        <tr>
                            {tabelkaKolorow.map((nazwaKoloru, numerKolumny) => (
                                <td>
                                    <input
                                        type="text"
                                        name={numerKolumny}
                                        onChange={wpisywanie}
                                        value={nazwaKoloru}
                                    />
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tabelkaImion.map((wiersz, index) => (
                            <tr key={index}>
                                {wiersz.map((imie, columnIndex) => (
                                    <td key={imie}>
                                        <LadnyTekst
                                            color={tabelkaKolorow[columnIndex]}
                                        >
                                            {imie}
                                        </LadnyTekst>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
