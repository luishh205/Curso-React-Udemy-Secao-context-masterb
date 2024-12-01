import './Home.css';
//import { Link } from 'react-router-dom';
// //import { useEffect } from "react";
// import { useFetch } from '../hooks/useFetch';
// import { url } from '../services/url';
//import SearchForm from '../components/SearchForm';
//import  { CounterContext }  from '../context/CounterContext.js';
//import { useContext } from 'react';
import ChangeCounter from '../components/ChangeCounter.js';
import { useCounterContext } from '../hooks/useCounterContext.js';
import { useTitleColorContext } from '../hooks/useTitleColorContext.js';

const Home = () => {
  // const { counter } = useContext(CounterContext);

const { color, dispatch } = useTitleColorContext();

const seTitleColor = (color) =>{
  dispatch({type: color})
}

//hook refatorado
const {counter} = useCounterContext();

  return (
    <div>
      {/* <SearchForm/> */}
      <h1 style={{color: color}}>Home</h1>
      <h1>contador {counter}</h1>
      <ChangeCounter/>
      <div>
        <button onClick={()=>{seTitleColor("RED")}}>Vermelho</button>
        <button onClick={()=>{seTitleColor("BLUE")}}>Azul</button>
      </div>
    </div>
  )
}

export default Home