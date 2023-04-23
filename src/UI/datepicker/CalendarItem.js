import { useDispatch } from "react-redux"
import { pickDate } from "../../store";

export function CalendarItem({classList, date, ...props}) {
    const dispatch = useDispatch();
    return (
        <div
            className={classList.join(' ')}
            onClick={() => dispatch(pickDate(date))}
        >
            {date.getDate()}
        </div>
    )
}