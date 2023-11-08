

function Home(props){

    const increment=()=>props.increment();
    const decrement=()=>props.decrement();
    const reset=()=>props.reset()
    const color=()=>props.color()
    const input=(e)=>{
     
        props.input(e.target.value)
}
    return(
    <div id="yyy" style={{backgroundColor:props.colors}}>
    <>
    
    <h1>{props.state}</h1>
   <button onClick={increment}>+</button>
   {
    props.state === 0 ?
    <button disabled onClick={decrement}>-</button>:  <button  onClick={decrement}>-</button>


   }
    <button onClick={reset}>reset</button>
    <button onClick={color}>color</button>
    <input onChange={input} type="text" />
    
    </>
    </div>
    
    )
}
export default Home