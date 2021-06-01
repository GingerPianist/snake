import React, { createContext, useContext, useState } from "react";
import { polish, french, english } from "../languages";

const GlobalContext = createContext("test");

// Provider
// Consumer

// <GlobalStateProvider> <App /></>

/*

<Context1>
    value1={}
    <Context2>
        value2
        App
    </Context2>
</Context1>

value1="test"

*/

const languages = {
    polish,
    english,
    french,
};

function GlobalStateProvider({ children }) {
    const [borders, setBorders] = useState(true);
    const [currentLanguage, setCurrentLanguage] = useState("english");

    return (
        <GlobalContext.Provider
            value={{
                settings: {
                    borders,
                    setBorders,
                },
                language: languages[currentLanguage],
                setCurrentLanguage,
                currentLanguage,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalState() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalContext, GlobalStateProvider, useGlobalState };
