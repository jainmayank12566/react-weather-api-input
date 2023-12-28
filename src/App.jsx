import {Sayhello} from './api/sayhello';
import {useEffect, useRef, useState} from 'react';
function App(){
    const[data,setdata]=useState("");
    const inputone=useRef();
    async function handleclick(){
        const data12=await Sayhello(inputone.current.value);
        console.log(data12);
    }
    return(
        <div>
            <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} ref={inputone}/>
            <button onClick={handleclick}>change</button>
        </div>
    )
}
export default App;