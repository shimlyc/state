import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {

const[state,setState]=useState(0)
const[colors,setColor]=useState(' ')


  const increment=()=>setState(state+1);
  const decrement=()=>  setState(state-1);
  const reset=()=>setState(0);
  // const color=()=>setColor('purple')
  const input =(e)=>setColor(e)
  

  return (
    <div className='div'>
    
     <Home  input={input} colors={colors}  reset={reset} increment={increment} decrement={decrement} state={state} />
    
    </div>
  )
}

export default App
