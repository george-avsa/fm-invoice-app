import React, { useEffect, useRef, useState } from "react";
import "./datepicker.css";
import "./input.css";
import generateMonth from "../../calendarFunction/generateMonth";
import arrowLeft from "./../../images/arrowLeft.svg";
import { HeadingM, HeadingS } from "../texts/Heading";

function monthToText(mothDate) {
    const fullDateText = mothDate.toString();
    const dateMatch = fullDateText.match(/\w+\s(\w+)\s\d+\s(\d+)/);
    return `${dateMatch[1]} ${dateMatch[2]}`;
}

function Datepicker({ label, ...props }) {
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

    const calendarRef = useRef(null);

    const monthDate = new Date(2023, 1, 1);

    const [monthText, setMonthText] = useState("");

    useEffect(() => {
        setMonthText(monthToText(monthDate));
        const height = calendarRef.current.getBoundingClientRect().height;
        calendarRef.current.style.bottom = `-${Number.parseInt(height) + 10}px`;
    }, [monthDate]);

    return (
        <div className='field'>
            {dropdown && (
                <div className='dropdowns' ref={calendarRef}>
                    <div className='calendar__controls'>
                        <img src={arrowLeft} alt='' />
                        <HeadingS>{monthText}</HeadingS>
                        <img src={arrowLeft} alt='arrowRight' />
                    </div>
                    <div className='calendar__body'>
                        {generateMonth(monthDate).map((date) => {
                            return (
                                <div
                                    className='calendar__item'
                                    style={
                                        !date.clickable
                                            ? { opacity: ".5" }
                                            : null
                                    }
                                >
                                    {date.date.getDate()}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <div className='field__label'>{label}</div>
            <div
                className='field__input'
                onClick={(e) => handleDropdown(e)}
                ref={fieldRef}
            ></div>
        </div>
    );
}

export { Datepicker };
