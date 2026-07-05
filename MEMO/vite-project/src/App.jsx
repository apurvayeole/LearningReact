import React, { useState, useMemo, useCallback } from 'react';
import Sum from './Sum';

function App() {
    const [count, setCount] = useState(0);

    const handleOnClick = useCallback(() => {
        setCount((prev) => prev + 1);
        console.log('Click function called!');
    }, []);

    const displayName = useMemo(() => {
        let name = "APURVA";
        console.log("display name called");
        return name;
    }, [name]);
    console.log('App called');

    return (
        <>
            <h2>Counter:</h2>
            <p>Count: {count}</p>
            <button onClick={handleOnClick}>Increase</button>
            <p>My name is : {displayName}</p>
            <Sum n = {count}/>
        </>
    );
}

export default App;