import { useEffect, useState } from "react"

export default function Usestate(){

    const [number,setnum] = useState(0);

    const [count ,setcount]=useState(-1);

    useEffect(()=>setcount(count+1),[number])
    
    return (
        <>
            <div>
                <button className="btn" onClick={() => setnum(number-1) }>-</button>
                
                <span>{number}</span>
                <button className="btn" onClick={() => setnum(number+1)}>+</button><br/>
                
                <button className="btn">click times {count}</button>
            </div>
        
        </>
    );

}