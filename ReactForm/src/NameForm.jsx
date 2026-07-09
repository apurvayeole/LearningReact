import {useState, useEffect} from 'react';
function NameForm(){
    // const [name, setName] = useState("");
    // return(
    //     <>
    //     <div>
    //         <input type="text" value = {name}
    //         onChange = {(e) => setName(e.target.value)}/>
    //         <p>You typed : {name}</p>
    //         <button onClick={() => setName("")}>clear</button>
    //     </div>
    //     </>
    // )
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("formData");
        try {
            return saved ? JSON.parse(saved) : {name:"", email:"", password:""};
        } catch {
            return {name:"", email:"", password:""};
        }
    });

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData))
    },[formData]);


    const [error, setError] = useState("");
    function handleChange(e) {
        const {name, value} = e.target; //object destruction
        setFormData((prev) => ({
            ...prev,
            [name]:value,
        }));
    }

    async function handleSubmit(e){
        e.preventDefault();
        setError("");
        // console.log("submitted data:",formData);
        // try{
        const response = await fetch("http://localhost:3000/signup", {
            method : "POST",
            headers:{
                "Content-Type" :"application/json",
                "authorization":"Bearer qwertyuiop1234567890"
            },
            body: JSON.stringify(formData),
        });
        // if(!response.ok){
        //     throw new Error (`Server error: ${response.status}`);
        // }

        const data = await response.json();
        console.log("server responded with: " , data);
    // }catch(error){
    //    setError(error.message);
    //     // console.log("Something went wrong:", error.message);
    // }
}
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input type = "text" name="name" placeholder='
            name'
             value={formData.name}
             onChange={handleChange}/>

            <input type="email" name="email" placeholder='
            email'
            value={formData.email}
            onChange={handleChange}/>

            <input type="password" name="password" placeholder='
            password'
            value={formData.password}
            onChange={handleChange}/>
            <button onClick={() => {handleSubmit}}>Submit</button>
            </form>
            <p style={{color:"red"}}>{error}</p>
        </div>
        </>
    )
}

export default NameForm;