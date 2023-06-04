import React, { useEffect, useRef, useState } from "react";
import "../Input/input.css";
import SelectDropdown from "./SelectDropdown";

function Select({ label, ...props }) {
    // use redux for 
    const options = ["Lorem", "Ipsum", "Ipsum"];
    const [fieldValue, setFieldValue] = useState(options[0]);
    // end

    const [dropdown, setDropdown] = useState(false);
    const fieldRef = useRef(null);

    useEffect(() => {
        window.onclick = (e) => {
            if (
                e.target.contains(fieldRef.current) &&
                e.target !== fieldRef.current
            ) {
                setDropdown(false);
            }
        };
    }, []);

    function handleDropdown(e) {
        setDropdown(true);
    }

    function selectValue(e) {
        const value = e.target.innerText;
        if (!!value) {
            setFieldValue(value);
            setDropdown(false);
        }
    }

    return (
        <div className='field' {...props}>
            {dropdown && (
                <SelectDropdown options={options} selectValue={selectValue}></SelectDropdown>
            )}
            <div className='field__label'>{label}</div>
            <div
                className='field__input'
                onClick={(e) => handleDropdown(e)}
                ref={fieldRef}
            >
                {fieldValue}
            </div>
        </div>
    );
}

export { Select };
