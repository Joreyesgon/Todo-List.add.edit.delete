import React, { useState } from 'react';
import './test.css';

const Test = () => {
    const [inputValue, setInputValue] = useState ("");

const validateInput = () => {
    if(inputValue === "") alert("He, this is empty!!");
    else alert("Everything is fine here!")
};

const handleChange = (e) => {
    setInputValue(e.target.value)
}

    return(
        <div className="test">
            <input type="text" onChange={handleChange} value={inputValue}></input>
            <button onClick={validateInput}>Click to validate</button>
        </div>
    )
};

export default Test;