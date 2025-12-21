import react, {useState} from 'react';

function MyComponent3(){
    const [car, setCar] = useState({year:2018,
                                    company:'Toyota', 
                                    model:'Corolla'});
    const [food, setFood] = useState(["Pizza", "Pasta", "Salad"]);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        if(newFood.trim() !== ''){
            setFood(food => [...food, newFood]);
            document.getElementById('foodInput').value = '';
        }
    }

    function handleRemoveFood(index){
        setFood(food => food.filter((_, i) => i !== index));
    }

    function handleYearChange(e){
        setCar(car =>({...car, year: e.target.value}));

    }
    function handleCompanyChange(e){
        setCar(car =>({...car, company: e.target.value}));
    }
    function handleModelChange(e){
        setCar(car =>({...car, model: e.target.value}));

    }
    return(
        <>
        <div>
            <p>My Car Details:  {car.year} {car.company} {car.model}</p>
            <input type="number" value ={car.year} onChange={handleYearChange} />
            <input type="text" value ={car.company} onChange={handleCompanyChange} />
            <input type="text" value ={car.model} onChange={handleModelChange} />
        </div>

        <div>
            <p>My Favorite Food:</p>
            <ul>
                {food.map((foodItem, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>{foodItem}</li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Add Food Item" />
            <button onClick={handleAddFood}>Add Food</button>
            {/* <button onClick={handleRemoveFood}>Remove Food</button> */}
        </div>
        </>
    );
}

export default MyComponent3;