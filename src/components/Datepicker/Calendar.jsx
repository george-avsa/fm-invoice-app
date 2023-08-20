import { useDispatch, useSelector } from "react-redux";
import arrowLeft from "./../../images/arrowLeft.svg";
import generateMonth from "../../calendarFunction/generateMonth";
import { useEffect, useRef } from "react";
import monthToText from "../../calendarFunction/monthToText";
import { CalendarItem } from "./CalendarItem";
import { HeadingS } from "../UI/Texts/Heading";
import { decrementMonth, inrementMonth } from "../../store/form";

export function DatepickerDropdown(props) {
    const dispatch = useDispatch();
    const monthDate = useSelector(state => state.form.monthDate);
    const datePicked = useSelector(state => state.form.datePicked);

    const dropdownRef = useRef(null);

    const theme = useSelector(state => state.settings.theme);

    useEffect(() => {
        const height = dropdownRef.current.offsetHeight;
        dropdownRef.current.style.bottom = `-${height + 20}px`;
    }, [monthDate])

    return (
        <div className={`dropdowns dropdowns--${theme}`} {...props} ref={dropdownRef}>
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