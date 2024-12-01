import "./About.css"
// import { useContext } from 'react';
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from '../hooks/useTitleColorContext.js';

const About = () => {
//const { counter } = useContext(CounterContext);

const { color } = useTitleColorContext();

const { counter } = useCounterContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <h1>contador {counter}</h1>
      <p>Desenvolvido por luis henrique...</p>
    </div>
  )
}

export default About