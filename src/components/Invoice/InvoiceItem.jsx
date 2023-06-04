
import arrowLeft from "./../../images/arrowLeft.svg";
import { dateToText } from "../../calendarFunction/dateToText";
import { HeadingS } from "../UI/Texts/Heading";
import { BodyText } from "../UI/Texts/BodyText";
import { InvoiceStatus } from "./InvoiceStatus";

export function InvoiceItem({
    id,
    createdAt,
    clientName,
    total,
    status
}) {
    return (
        <div className="invoice-item invoice-item--light">
            <div style={{
                display: 'flex', 
                alighItems: 'center', 
                width: '210px', 
                justifyContent: "space-between", 
                alignItems: 'center'
            }}>
                <HeadingS>#{id}</HeadingS>
                <BodyText>Due {dateToText(new Date(createdAt), 'text')}</BodyText>
            </div>
            <BodyText style={{flexGrow: "1"}}>{clientName}</BodyText>
            <HeadingS style={{flexGrow: "1", textAlign: "right"}}>£ {Number(total).toFixed(2)}</HeadingS>
            <InvoiceStatus status={status}></InvoiceStatus>
            <img src={arrowLeft} />
        </div>
    );
}