import React,{ useState, useEffect } from "react";
function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    function addCount(){
        setCount(c => c+1);
    }
    function changeColor(){
        setColor( color === "red" ? "green" : "red");
    }
    useEffect( () => {
        document.title = `Count is ${count} ${color}`;   

    },[count])
    return(
        <>
        <p style={{ color: color }}>Count: {count}</p>
        <button onClick={addCount}>Increase Count</button>
        <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent;