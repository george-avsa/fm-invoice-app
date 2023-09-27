import { dateToText } from "../../calendarFunction/dateToText";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";

function DetailedInformation({invoice}) {
    return (
        <div className="details__information">
                <div className="details__id">
                    <HeadingS>#{invoice.id}</HeadingS>
                    <BodyText grey>{invoice.name}</BodyText>
                </div>
                <div className="details__legal-adress">
                    <BodyText grey>{invoice.billFrom.street}</BodyText>
                    <BodyText grey>{invoice.billFrom.city}</BodyText> 
                    <BodyText grey>{invoice.billFrom.postCode}</BodyText>
                    <BodyText grey>{invoice.billFrom.country}</BodyText>
                </div>
                <div className="details__invoice-date">
                    <BodyText grey>Invoice Date</BodyText>
                    <HeadingS>{invoice.createdAt}</HeadingS>
                </div>
                <div className="details_customer-adress">
                    <HeadingS>Bill To</HeadingS>
                    <BodyText grey>{invoice.billTo.fullname}</BodyText>
                    <BodyText grey>{invoice.billTo.street}</BodyText>
                    <BodyText grey>{invoice.billTo.city}</BodyText>
                    <BodyText grey>{invoice.billTo.postCode}</BodyText>
                    <BodyText grey>{invoice.billTo.country}</BodyText>
                </div>
                <div className="details__customer-email">
                    <BodyText grey>Sent to</BodyText>
                    <HeadingS>{invoice.billTo.email}</HeadingS>
                </div>
            </div>
    );
}

export default DetailedInformation;