const h1 = <h1 id="topic">HELLO APU</h1>;
const h2 = <h2 id="topic2">HIII</h2>;

const element = (
    <div>
        <h1>HELLO</h1>
        <h6>APU</h6>
    </div>
)

function App(name){
    return(
        <div>React Component App {name}</div>
    )
}

//we can pass any value int, string, bool, array but not object = {name:"Apurva", age:18}.
//in {} we can pass text/element.
const age = 10;
const trial2 = <div>you are {age>10 ? "an aduld" : "a kid"}</div>
const trial = <div>This is {"Apurva"}</div>


const names = ["Jhon", "Jane", "Alice","Bob"];

const n = (
    <ul>
        {names.map(name=><li>{name}</li>)}
    </ul>
)


function Show(props){
    return(
        <h1>Hello Coder Army {props.name} {props.age}</h1>
    )
}
// passing key value pairs
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
// root.render(App("Apu"));
// root.render(trial2);
root.render(<Show name="Apurva" age={12}></Show>);