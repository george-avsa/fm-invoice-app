import { useDispatch, useSelector } from "react-redux";
import arrowLeft from "./../../images/arrowLeft.svg";
import { decrementMonth, incrementMonth, inrementMonth } from "../../store";
import { HeadingS } from "../texts/Heading";
import generateMonth from "../../calendarFunction/generateMonth";
import { useEffect, useRef } from "react";
import monthToText from "../../calendarFunction/monthToText";
import { CalendarItem } from "./CalendarItem";

export function DatepickerDropdown(props) {
    const dispatch = useDispatch();
    const monthDate = useSelector(state => state.form.monthDate);
    const datePicked = useSelector(state => state.form.datePicked);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const height = dropdownRef.current.offsetHeight;
        dropdownRef.current.style.bottom = `-${height + 20}px`;
    }, [monthDate])

    return (
        // <div onClick={() => dispatch(decrementMonth())}>{monthDate?.toString()}</div>
        <div className='dropdowns' ref={dropdownRef}>
            <div className='calendar__controls'>
                <img src={arrowLeft} alt='' onClick={() => dispatch(decrementMonth())} />
                <HeadingS>{ monthToText(monthDate) }</HeadingS>
                <img src={arrowLeft} alt='arrowRight' onClick={() => dispatch(inrementMonth())} />
            </div>
            <div className='calendar__body'>
                {generateMonth(monthDate).map((date) => {
                    const classList = ['calendar__item'];
                    !date.clickable && classList.push('calendar__item--transparent');
                    date.today && classList.push('calendar__item--today'); 
                    date.date - datePicked === 0 && classList.push('calendar__item--picked');
                    return <CalendarItem date={date.date} classList={classList}>{date.date.getDate()}</CalendarItem>
                })}
            </div>
        </div>
);
}