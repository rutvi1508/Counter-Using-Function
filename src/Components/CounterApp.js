import React, { useState } from 'react';
import '../Components/CounterAppCss.css'

function Counter() {
    const [counter, setCounter] = useState(0);

    //increase number
    const increase = () => {
        setCounter(count => count + 1)
    };

    //decrease counter
    const decrease = () => {
        setCounter(count => count - 1)
    };

    //reset counter
    const reset = () => {
        setCounter(0)
    }

    return (
        <div>
            <div className="counter">
                <h1>React Counter With Function</h1>
                <span className="counter_output">You clicked {counter} times</span>
                <div className="btn_container">
                    <button className="control_btn" onClick={increase}>+</button>
                    <button className="control_btn" onClick={decrease}>-</button>
                    <button className="reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}



export default Counter;