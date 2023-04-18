import React, { useEffect, useRef, useState } from "react";
import "./input.css";

function Select({ label, ...props }) {
    // use redux for this
    const options = ["Lorem", "Ipsum"];
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
        <div className='field'>
            {dropdown && (
                <div className='dropdown'>
                    {options.map((option) => (
                        <div
                            className='dropdown__item'
                            onClick={(e) => selectValue(e)}
                            key={option}
                        >
                            {option}
                        </div>
                    ))}
                </div>
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
