function Button(){

    // const handleCLick=()=>{
    //     console.log("Button clicked");
    // }
    // const handleCLick2 =(name)=>{ 
    //     console.log("Welcome "+ name);
    // }

    const handleClick3 = (event)=>{
        event.target.textContent = "Clicked";
    }


    return(
        <button onClick={(event)=>handleClick3(event)}>Click me</button>
    );
}

export default Button;