import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter'
import './App.css'
import TestComponent from './TestComponent'
import CounterContext from './context/CounterContext';

function App() {
  const [count, setCount] = useState(0)
  const value = { count, setCount };

  console.log('App Rendered')
  return (
    <div className="App">
      <CounterContext.Provider value={value}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Counter />
      <h1>Vite + React!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </CounterContext.Provider>
    </div>
    
  )
}

export default App
