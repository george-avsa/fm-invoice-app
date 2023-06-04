import { useSelector } from "react-redux";
import { Button } from "../UI/Buttons/Button";
import { BodyText } from "../UI/Texts/BodyText";
import { InvoiceStatus } from "./InvoiceStatus";

export function InvoiceManage() {
    const theme = useSelector(state => state.settings.theme);
    return (
        <div className={`invoice-managment invoice-managment--${theme}`}>
            <div className="invoice-managment__status">
                <BodyText grey={true} >Status</BodyText>
                <InvoiceStatus status="pending"></InvoiceStatus>
            </div>
            <Button color="grey">Edit</Button>
            <Button color="red">Delete</Button>
            <Button color="purple">Mark as Paid</Button>
        </div>
    );
}