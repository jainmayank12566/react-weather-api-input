import {Sayhello} from './api/sayhello';
import { useRef, useState } from 'react';
function App(){
    const[data,setdata]=useState("");
    const inputone=useRef();
    // async function handleclick(e){
    //     e.preventDefault();
    //     const data12=await Sayhello(inputone.current.value);
    //     console.log(data12);
    // }
    //or
    function handleclick(e){
        e.preventDefault();
        Sayhello(inputone.current.value)
        .then((val)=>{
            console.log(val);
        })
    }
    return(
        <form>
            <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} ref={inputone}/>
            <button onClick={handleclick}>add</button>
        </form>
    )
}
export default App;