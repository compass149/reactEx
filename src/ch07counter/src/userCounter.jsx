import React, { useState } from "react";

function UserCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const inceaseCount = () => setCount((count) => count +1);
    const deceaseCount = () => setCount((count) => Math.max(count-1,0));

    return [count, inceaseCount, deceaseCount];
}

export default UserCounter;