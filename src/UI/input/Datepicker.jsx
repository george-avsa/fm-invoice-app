import React, { useEffect, useRef, useState } from "react";
import "./datepicker.css";
import "./input.css";
import generateMonth from "../../calendarFunction/generateMonth";

function Datepicker({ label, ...props }) {
    // use redux for this
    const options = ["Lorem", "Ipsum"];
    const [fieldValue, setFieldValue] = useState(options[0]);
    // end

    const [dropdown, setDropdown] = useState(true);
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
            <div className='dropdowns'>
                {generateMonth(new Date(2023, 2, 2)).map((date) => {
                    return (
                        <div
                            className='calendar__item'
                            style={!date.clickable ? { opacity: ".5" } : null}
                        >
                            {date.date.getDate()}
                        </div>
                    );
                })}
            </div>
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

export { Datepicker };
