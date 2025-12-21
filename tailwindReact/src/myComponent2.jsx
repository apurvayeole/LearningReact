//onchange : event handler used primarily with form elements
//           ex: input, select, textarea
//           Triggers a function every time the value of the input changes.
//           Commonly used to capture user input in real-time.


//updater functions: a function passed as an argument to setState() to update the state based on the previous state.
//                   Useful when the new state depends on the previous state value.
//                   Ensures that the state updates correctly even with asynchronous state updates.
//                   Example: setCount(prevCount => prevCount + 1);
//                   Here, prevCount represents the previous state value of count.
//                   This approach prevents potential issues that may arise from stale state values.
//                   It is especially important in scenarios where multiple state updates may occur in quick succession.
//                   Using updater functions helps maintain consistency and accuracy in state management.
//                   It is a best practice to use updater functions when the new state relies on the previous state.
//                   This ensures that the state updates correctly and avoids potential bugs in the application.
import React, { useState} from 'react';

function Mycomponent2() {
    const [name, setName] = useState("Jane");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [shipping, setShipping] = useState(false);
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }
    function handleCommentChange(e) {
        setComment(e.target.value);
    }
    function handlePaymentMethodChange(e) {
        setPaymentMethod(e.target.value);
    }
    function handleShippingChange(e) {
        setShipping(e.target.checked);
    }

    //updater function
    const [count, setCount] = useState(0);

    function incrementCount() {
        // setCount(count + 1);
        // setCount(count + 1);
        //cant use this approach as state updates are asynchronous
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder='enter something'/>
            <p>Comment: {comment}</p>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>
            <p>Payment Method: {paymentMethod}</p>
             <label>
                <input type="checkbox" checked={shipping} onChange={handleShippingChange} />
                Expedited Shipping
            </label>

            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
        </div>
    );
}
export default Mycomponent2;