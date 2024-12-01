import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () =>{

    const context = useContext(TitleColorContext);

    if(!context){
        console.log("Erro no useTitleColorContext");
    }

    return context;
}