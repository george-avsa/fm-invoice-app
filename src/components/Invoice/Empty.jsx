import { BodyText } from "../UI/Texts/BodyText";
import { HeadingL } from "../UI/Texts/Heading";
import invoiceEmpty from "./../../images/invoiceEmpty.svg";

export function Empty() {
    return (
        <div className="invoice-list__empty">
            <img src={invoiceEmpty} alt="" />
            <HeadingL style={{marginBottom: "22px"}}>There is nothing here</HeadingL>
            <BodyText grey style={{textAlign: "center"}}>Create an invoice by clicking the <br/> <b>New Invoice</b> button and get started</BodyText>
        </div>
    );
}