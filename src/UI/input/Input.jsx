import React from "react";
import "./input.css";

function Input({ label }) {
    return (
        <div className='field'>
            <div className='field__label'>{label}</div>
            <input className='field__input' />
        </div>
    );
}

export { Input };
