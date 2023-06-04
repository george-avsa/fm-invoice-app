import React from "react";
import "./input.css";
import { useSelector } from "react-redux";

function Input({ label, additionalClass="", fullW=false, padding0=false, ...props }) {
    const theme = useSelector(state => state.settings.theme);

    return (
        <div className={'field ' + additionalClass + (fullW ? 'field--full-w' : '')} {...props}>
            <div className='field__label' style={{marginBottom: (label ? '8px' : '0px')}}>{label}</div>
            <input className={'field__input field__input--' + theme} style={{
                padding: padding0 ? '12px 0px' : '12px 20px', 
                textAlign: padding0 ? 'center' : 'left'
            }}/>
        </div>
    );
}

export { Input };
