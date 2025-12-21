function Items(){
    const product1 = "Laptop";
    const product2 = "Mobile";
    const product3 = "Tablet";

    return(
        <>
        <h2>Products</h2>
        <ul>
            <li>{product1.toLocaleUpperCase(  )}</li> {/* use {} to use js in jsx in return statement */}
            <li>{product2}</li>
            <li>{product3}</li>
        </ul>
        </>
    );
}

export default Items;