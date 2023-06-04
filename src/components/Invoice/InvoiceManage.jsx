import { Button } from "../UI/Buttons/Button";
import { BodyText } from "../UI/Texts/BodyText";
import { InvoiceStatus } from "./InvoiceStatus";

export function InvoiceManage() {
    return (
        <div className="invoice-managment">
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