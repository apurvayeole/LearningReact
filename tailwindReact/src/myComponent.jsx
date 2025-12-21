import React, { useState } from 'react';

function Mycomponent() {
    const [name, setname]=useState();
    const [age, setage]=useState(20);
    const [isemployed, setisemployed]=useState(false);

    const updatName = ()=> {
        setname("Doremon");
    }

    const increaseAge = ()=> {
        setage(age + 1);
    }

    const toggleEmployed = ()=> {
        setisemployed(!isemployed);
    }
    return(
        <div>

            <h1>{name}</h1>
            <button onClick={updatName}>Update Name</button>
            <h2>{age}</h2>
            <button onClick={increaseAge}>Increase Age</button>
            <p>Is Employed : {isemployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployed}>Toggle Employed</button>
        </div>
    );
}

export default Mycomponent;