import React, { useState } from "react";

function KonwersjaStopni({ celsjusz, setCelsjusz }) {
    const kelvin = parseFloat(celsjusz) + 273;
    const fahrenheit = (celsjusz / 5) * 9 + 32;

    function wpisywanieCelsjusz(event) {
        const temperatura = event.target.value;
        setCelsjusz(temperatura);
    }

    return (
        <div>
            <input type="text" onChange={wpisywanieCelsjusz} value={celsjusz} />
            <input type="text" value={kelvin} />
            <input type="text" value={fahrenheit} />
        </div>
    );
}

export default KonwersjaStopni;
