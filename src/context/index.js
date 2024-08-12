import React from "react";
import { createContext, useState } from "react";

export const UIContext = createContext({
    searchKey: "",
    setSearchKey: () => {},
    searchedData: [],
    setSearchedData: () => {},
    isFormSubmitted: false,
    setIsFormSubmitted: () => {}
});

export default function ContextProvider({children}) {
    const [ searchKey, setSearchKey ] = useState("");
    const [ searchedData, setSearchedData ] = useState([]);
    const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);

    const data = {
        searchKey,
        setSearchKey,
        searchedData,
        setSearchedData,
        isFormSubmitted,
        setIsFormSubmitted
    }
    return(
        <UIContext.Provider value={data}>
            {children}
        </UIContext.Provider>
    )
}
