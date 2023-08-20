import React, { useEffect, useRef, useState } from "react";
import "../Input/input.css";
import SelectDropdown from "./SelectDropdown";
import { useDispatch, useSelector } from "react-redux";
import { closeSelect, openSelect } from "../../../store/form";

function Select({ label, ...props }) {
    // use redux for 
    const options = ["Lorem", "Ipsum", "Ipsum", "Ipsum", "Ipsum"];
    const [fieldValue, setFieldValue] = useState(options[0]);
    // end

    const dropdown = useSelector(state => state.form.dropdowns.select);
    const dispatch = useDispatch();

    const fieldRef = useRef(null);

    useEffect(() => {
        window.onclick = (e) => {
            if (
                e.target.contains(fieldRef.current) &&
                e.target !== fieldRef.current
            ) {
                dispatch(closeSelect());
            }
        };
    }, []);

    function handleDropdown(e) {
        dispatch(openSelect());
    }
    
    function selectValue(e) {
        const value = e.target.innerText;
        if (!!value) {
            setFieldValue(value);
            dispatch(closeSelect());
        }
    }

    const theme = useSelector(state => state.settings.theme);

    return (
        <div className='field' {...props}>
            {dropdown && (
                <SelectDropdown options={options} selectValue={selectValue}></SelectDropdown>
            )}
            <div className='field__label' style={{color: '#7E88C3'}}>{label}</div>
            <div
                className={`field__input field__input--${theme}`}
                onClick={(e) => handleDropdown(e)}
                ref={fieldRef}
            >
                {fieldValue}
            </div>
        </div>
    );
}

export { Select };
