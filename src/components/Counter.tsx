//React component to show counter
import React, {useContext} from 'react';
import {counter} from '../signals/counterState';
import { complexSignal } from '../signals/counterState';
import { signal, computed } from "@preact/signals-react";
import CounterContext  from '../context/CounterContext';

const Increment = () => {
  console.log('Increment Rendered')
    return (
      <div>
        <button onClick={()=>counter.value = counter.value + 1}>Icrement signal</button>
      </div>
    )
  }

const Counter = () => {
  console.log('Counter Rendered')
  const {count, setCount} = useContext(CounterContext);
  // const aVal = computed(() => complexSignal.value.a);
  
  return (
    <div>
      <h1>Counter</h1>
      Complex Signal {JSON.stringify(complexSignal.value)}
      <br />
      complexSignal.value.a {complexSignal.value.a}
      <br />
      <button onClick={()=>complexSignal.value = {...complexSignal.value, a: complexSignal.value.a + 1}}> UPDATE Complex</button>
      <hr />
      <p>Signal Count: {counter.value}</p>
      <Increment />
      <hr />
      <button onClick={()=>setCount(count + 1)}>Context Count {count}</button>
    </div>
  );
}

export default Counter;