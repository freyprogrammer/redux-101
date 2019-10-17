import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const logged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {logged ? <h1>TEST IF LOGGED</h1>: ''}
    </div>
  );

}

export default App;
