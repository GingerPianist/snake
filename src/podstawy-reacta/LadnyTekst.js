import React from "react";

function LadnyTekst(props) {
    const kolorekTla = props.backgroundColor;
    const kolorek = props.color;
    const napis = props.children;

    return (
        <div
            style={{
                color: kolorek,
                backgroundColor: kolorekTla,
            }}
        >
            {napis}
        </div>
    );
}

export default LadnyTekst;
