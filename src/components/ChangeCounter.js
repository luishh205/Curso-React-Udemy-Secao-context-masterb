import { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

const ChangeCounter = () => {

const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={()=> {setCounter(counter + 1) }}>Add value ao counter</button>
        {/* autera valor do context */}
    </div>
  )
}

export default ChangeCounter