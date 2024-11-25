import React, {useEffect, useState} from "react";
import userCounter from "./userCounter";

const MAX_CAPACITY = 10;

function Accomodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, inceaseCount, deceaseCount] = userCounter(0)

    useEffect(() => {
        console.log("================================");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`)
    });

    useEffect(()=> {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    },[count]);

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={inceaseCount} disabled={isFull}>입장</button>
            <button onClick={deceaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}
export default  Accomodate;