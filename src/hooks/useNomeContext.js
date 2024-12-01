import { useContext} from 'react';
import { NomeContext } from '../context/NomeContext';

export const useNomeContext = () => {

    const context = useContext(NomeContext);

    if(!context){
        console.log("Context 'NomeContext' nao encontrado!")
    }
    
    return context;
};