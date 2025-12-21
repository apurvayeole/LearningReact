import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  // let counter = 10;

  const add = () => {
    if(counter >= 20) return;
      console.log(counter);
    setCounter(counter + 1);

  }
  const decrease = () => {
    if(counter <= 0) return;
    console.log(counter);
    setCounter(counter - 1);
  }
  return (
    <>
<h1>counter { counter }</h1>
<button onClick={add}>Increase</button>

<button onClick={decrease}>Decrease</button>
</>
  )
}

export default App
