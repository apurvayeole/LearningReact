// import { useState } from 'react'
// import './App.css'

// import List from './list.jsx';
// import Button from './button.jsx';
// import Image from "./Image"
// import Mycomponent from "./myComponent"
import MyComponent from "./useContext.jsx";
// import ColorPicker from "./assets/colorPicker"
 

// function App() {
// const Items = [{id: 1,name :"Apple", rate: 30},
//                    {id: 2,name :"Banana", rate: 80},
//                    {id: 3,name :"Cherry", rate: 63},
//                    {id: 4,name :"Date", rate: 65},
//                    {id: 5,name :"Elderberry", rate: 50}, 
//                    {id: 6,name :"Fig", rate: 40},];

// const countries = [{id: 1,name :"America", rate: 30},
//                    {id: 2,name :"China", rate: 80},
//                    {id: 3,name :"Alaska", rate: 63},
//                    {id: 4,name :"Denmark", rate: 65},
//                    {id: 5,name :"England", rate: 50}, 
//                    {id: 6,name :"Finland", rate: 40},];
//   return (
//    <>
//     {Items.length >0 ? <List items={Items} category="Fruits" /> : null}
//     {countries.length >0 && <List items={countries} category="Countries" />}
//     </>
//   )
// }

function App() {
  return (
   <>
    <MyComponent/>
   </>
  )
}
export default App
