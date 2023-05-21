import { BodyText } from "../texts/BodyText";
import { HeadingL } from "../texts/Heading";
import invoiceEmpty from "./../../images/invoiceEmpty.svg";
import './invoiceEmpty.css';

export function InvoiceEmpty() {
    return (
        <div className="invoice-list__empty">
            <img src={invoiceEmpty} alt="" />
            <HeadingL style={{marginBottom: "22px"}}>There is nothing here</HeadingL>
            <BodyText style={{textAlign: "center"}}>Create an invoice by clicking the <br/> <b>New Invoice</b> button and get started</BodyText>
        </div>
    );
}