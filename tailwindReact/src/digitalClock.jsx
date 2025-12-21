// mini project: digital clock using react and tailwindcss
// features: display current time (hours, minutes, seconds), update every second, styled with tailwindcss
import React, { useState, useEffect } from "react"; 


function DigitalClock(){

    const [time, setTime] = useState(new Date());

     const tick = () => {
        setTime(new Date());
    };


    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

   function formatTime(date) {
        let hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const meridem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        return `${hours}:${minutes}:${seconds} ${meridem}`;
    }
    return(<div className = "clock-container">
        <div className="clock">
            <span>{formatTime(time)}</span>
        </div>

    </div>
    );
}

export default DigitalClock;