import React from "react";
import "./input.css";

function Input({ label, additionalClass="", fullW=false, padding0=false, ...props }) {
    return (
        <div className={'field ' + additionalClass + (fullW ? 'field--full-w' : '')} {...props}>
            <div className='field__label' style={{marginBottom: (label ? '8px' : '0px')}}>{label}</div>
            <input className='field__input' style={{
                padding: padding0 ? '12px 0px' : '12px 20px', 
                textAlign: padding0 ? 'center' : 'left'
            }}/>
        </div>
    );
}

export { Input };
