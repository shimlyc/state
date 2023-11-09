import { useContext } from "react"
import { AppContext } from "./App"


function Home(){

    // const increment=()=>props.increment();
    // const decrement=()=>props.decrement();
    // const reset=()=>props.reset()
    // const color=()=>props.color()
    // const input=(e)=>{
     
        // props.input(e.target.value)

        const {value,setColor,values,setState}=useContext(AppContext)

        console.log(values,'vvv');

    return(
    <div id="yyy" style={{backgroundColor:values}}>
    <>
    
    <h1>{value}</h1>
   <button onClick={()=>setState(value+1)}>+</button>
   {value === '0'?
   <button disabled onClick={()=>setState(value-1)}>-</button>:<button onClick={()=>setState(value-1)}>-</button>
}
   <button onClick={()=>setState(0)}>reset</button>
   
   
   <button onClick={()=>setColor(values)}>color</button>
    <input type="text" placeholder="choose your colour" onChange={(e)=>{
        setColor(e.target.value)
    }} />
    </>
    </div>
    
    )
}
export default Home