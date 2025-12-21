//useEffect() = react hook that tells react to do this code when:
// 1. when the component mounts
// 2. when the component updates
// 3. when the component re-renders

//useEffect(() => {}) // runs on every render
//useEffect(() => {}, []) // runs only on the first render
//useEffect(() => {}, [stateVariable]) // runs on the first render and when the stateVariable changes
import { useState, useEffect } from "react";

function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

     function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Event Listener Added");
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

   
    return(
        <>
        <p>Width: {width}, Height: {height}</p>
        </>
    );
}

export default MyComponent;