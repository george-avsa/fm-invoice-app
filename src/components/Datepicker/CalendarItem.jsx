import { useDispatch } from "react-redux"
import { pickDate } from "../../store/form";
import { HeadingS } from "../UI/Texts/Heading";
import { BodyText } from "../UI/Texts/BodyText";

export function CalendarItem({classList, date, ...props}) {
    const dispatch = useDispatch();
    return (
        <div
            className={classList.join(' ')}
            onClick={() => dispatch(pickDate(date))}
        >
            <BodyText>

            {date.getDate()}
            </BodyText>
        </div>
    )
}