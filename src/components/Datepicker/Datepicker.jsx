import React, { useEffect, useRef, useState } from "react";
import "./datepicker.css";
import "./../UI/Input/input.css";
import { useDispatch, useSelector } from "react-redux";
import { DatepickerDropdown } from "./Calendar";
import { dateToText } from "../../calendarFunction/dateToText";
import calendarIcon from "./../../images/calenfarIcon.svg"
import Label from "../UI/Input/Label";
import { closeDatepicker, openDatepicker } from "../../store/form";

function Datepicker({ label, ...props }) {

    const datePicked = useSelector(state => state.form.datePicked);

    const dispatch = useDispatch();

    const dropdownVisible = useSelector(state => state.form.dropdowns.datepicker);

    const [dropdown, setDropdown] = useState(false);
    const fieldRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', (e) => {
                if (
                    e.target.contains(fieldRef.current) &&
                    e.target !== fieldRef.current
                ) {
                    dispatch(closeDatepicker());
                }
            })
        }, [fieldRef]);
    
    function handleDropdown(e) {
        dispatch(openDatepicker())
    }

    const inputClassList = [
        'field__input'
    ];

    dropdown && inputClassList.push('field__input--focused')

    const theme = useSelector(state => state.settings.theme);

    return (
        <div className='field' {...props}>
            {dropdownVisible && <DatepickerDropdown></DatepickerDropdown>}
            <Label grey>Issue Date</Label>
            <div
                className={`field__input field__input--${theme}`}
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
