// function makeElement (tag, attributes, children){
//     const element = document.createElement(tag);
//     element.textContent = children;
// }

// const element1 = document.createElement('h1');
// element1.textContent = "Hello";
// element1.classnmae = "element";
// element1.style.color="red";
// element1.style.backgroundColor="black";

// const element2 = document.createElement('h2');
// element2.textContent = "World";
// element1.classnmae = "element";
// element2.style.color="pink";
// element2.style.backgroundColor="blue";


const element1 = React.createElement("h1",{classname:"element", id:"first",style:{color:"pink",backgroundColor:"black"}} ,"Hello");
const element2 = React.createElement("div",{classname:"element", id:"second", style:{color:"cyan",backgroundColor:"purple"}}, "this is div")
// const root = document.getElementById("root");

const div = React.createElement('div',null, element1, element2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
// ReactDOM.render(element1,root);
// ReactDOM.render(element2,root);