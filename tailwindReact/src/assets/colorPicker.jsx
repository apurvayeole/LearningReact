import React, { useState } from 'react';
function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    function handleClorChange(e){
        setColor(e.target.value);
    }
  return (
    <div className="color-picker-container">
      <h2 >Color Picker</h2>
      <p>Pick a color</p>
      <input type="color" value={color} onChange={handleClorChange}></input>
      <p>Selected Color: {color}</p>
    </div>
  );
}
export default ColorPicker;