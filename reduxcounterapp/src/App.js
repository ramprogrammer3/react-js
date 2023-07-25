import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/CounterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}> + </button>
        <div> {count} </div>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>
    </div>
  )
}

export default App