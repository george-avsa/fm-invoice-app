
import arrowLeft from "./../../images/arrowLeft.svg";
import { dateToText } from "../../calendarFunction/dateToText";
import { HeadingS } from "../UI/Texts/Heading";
import { BodyText } from "../UI/Texts/BodyText";
import { Status } from "./Status";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Item({
    id,
    createdAt,
    clientName,
    total,
    status,
}) {
    const theme = useSelector(state => state.settings.theme);

    return (
        <Link to={`/details/${id}`} id={id} className={`invoice-item invoice-item--${theme}`}>
            <div style={{
                display: 'flex', 
                alighItems: 'center', 
                width: '210px', 
                justifyContent: "space-between", 
                alignItems: 'center'
            }}>
                <HeadingS>#{id}</HeadingS>
                <BodyText grey>Due {dateToText(new Date(createdAt), 'text')}</BodyText>
            </div>
            <BodyText style={{flexGrow: "1"}} grey>{clientName}</BodyText>
            <HeadingS style={{flexGrow: "1", textAlign: "right"}}>£ {Number(total).toFixed(2)}</HeadingS>
            <Status status={status}></Status>
                <img src={arrowLeft} />
        </Link>
    );
}