import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {

const[state,setState]=useState(0)

  const name=(e,e1)=>{
    console.log('function')
    setState(e,e1);
    
  }
  

  return (
    <>
    <h1>app {state}</h1>
     <Home data={'data'} fun={name} state={state}/>
    </>
  )
}

export default App
