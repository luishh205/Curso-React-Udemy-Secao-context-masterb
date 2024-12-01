import "./About.css"
// import { useContext } from 'react';
// import { CounterContext } from "../context/CounterContext";
//import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from '../hooks/useTitleColorContext.js';
import { useNomeContext } from '../hooks/useNomeContext.js';
import { ChangeNome } from "../components/ChangeNome.js";

const Nome = () => {
//const { counter } = useContext(CounterContext);

const { color } = useTitleColorContext();

//const { counter } = useCounterContext();

const { nome } = useNomeContext();

  return (
    <div>
      <h1 style={{ color: color }}>Nome</h1>
      <h2>{nome}</h2>
      <ChangeNome/>
    </div>
  )
}

export default Nome