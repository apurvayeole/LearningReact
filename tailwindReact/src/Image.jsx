function Image(){
const imgUrl = "./src/assets/chritmas2.jpg";
// const handleClick = () => {
//     alert("Merry Christmas and Happy New Year!");
// }
const handleClick2 = (e) => {
    e.target.style.display = "none";
}
return(<img onClick={(e)=>handleClick2(e)} src={imgUrl} alt="Christmas Image"/>);
}

export default Image;