import React from "react";
import "./input.css";
import { useSelector } from "react-redux";
import { BodyText } from "../Texts/BodyText";
import Label from "./Label";

function Input(
    { 
        label, 
        value='',
        id='',
        onChange = () => {}, 
        additionalClass="", 
        fullW=false, 
        padding0=false, 
        ...props 
    }) {
    const theme = useSelector(state => state.settings.theme);

    return (
        <div className={`field ${fullW ? 'field--full-w' : ''} ${additionalClass}`} {...props}>
            <Label grey>{label}</Label>
            <input 
                className={`field__input field__input--${theme} 
                ${padding0 
                    ? 'field__input--padding' 
                    : ''}`
                } 
                onChange = {onChange}
                value={value}
                data-id={id}
            />
        </div>
    );
}

export { Input };
