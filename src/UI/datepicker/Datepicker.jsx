import React, { useEffect, useRef, useState } from "react";
import "./datepicker.css";
import "./../input/input.css";
import { useSelector } from "react-redux";
import { DatepickerDropdown } from "./Calendar";
import { dateToText } from "../../calendarFunction/dateToText";
import calendarIcon from "./../../images/calenfarIcon.svg"

function Datepicker({ label, ...props }) {

    const datePicked = useSelector(state => state.form.datePicked);

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

    return (
        <div className='field'>
            {dropdown && <DatepickerDropdown></DatepickerDropdown>}
            <div className='field__label'>Issue Date</div>
            <div
                className='field__input'
                onClick={(e) => handleDropdown(e)}
                ref={fieldRef}
            >
                <img src={calendarIcon} alt="" />
                {dateToText(datePicked)}
            </div>
        </div>
    );
}

export { Datepicker };
