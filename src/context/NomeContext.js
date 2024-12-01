import { createContext, useState } from 'react';

export const NomeContext = createContext();

export const NomeContextProvider = ({children}) => {

    const [ nome, setNome ] = useState("iniciou o context")

    return(
        <NomeContext.Provider value={{ nome, setNome }}>
            {children}
        </NomeContext.Provider>
    )
}