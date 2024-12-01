// import { useContext } from 'react';
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from '../hooks/useCounterContext';
import './Cadastro.css';

const Cadastro = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div className='Cadastro'>
      <h1>Counter</h1>
      <h2>{counter}</h2>
    </div>
  )
}

export default Cadastro
