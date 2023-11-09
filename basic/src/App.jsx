import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import InputField from './Form'
export const AppContext=createContext()
function App() {

const[state,setState]=useState(0)
const[colors,setColor]=useState('yellow')

let obj = {
  value:state,
  setState,
  values:colors,
  setColor
}
  // const increment=()=>setState(state+1);
  // const decrement=()=>  setState(state-1);
  // const reset=()=>setState(0);
  // // const color=()=>setColor('purple')
  // const input =(e)=>setColor(e)
  


let data = [
  {
    type:"email",
    placeholder:"pl",
  }, {
    type:"email",
    placeholder:"pl",
  }, {
    type:"email",
    placeholder:"pl",
  }, {
    type:"email",
    placeholder:"pl",
  }, {
    type:"email",
    placeholder:"pl",
  }, {
    type:"email",
    placeholder:"pl",
  },
]



  return (
    <div className='div'>
    <AppContext.Provider value={obj}>
     <Home   />

{ data.map((item)=>{
  return(

<InputField type={item.type} placeholder={item.placeholder} style={''}/>
  )

})

}
     
    
     
     </AppContext.Provider>
    </div>
  )
}

export default App
