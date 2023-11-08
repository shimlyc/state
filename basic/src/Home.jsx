import { useState } from "react"

function Home(props){

const [count,setCount]=useState(6)
    return(
    
    <>
    
    
    <h1></h1>

    
    <h1>{props.data}</h1>
    <h1>{props.fun(count)}</h1>
    <h1>{props.state}</h1>
    
    
    
    </>
    
    )
}
export default Home