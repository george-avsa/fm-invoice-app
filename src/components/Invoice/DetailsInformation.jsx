import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";

function DetailsInformation() {
    return (
        <div className="details__information">
                <div className="details__id">
                    <HeadingS>#XM9141</HeadingS>
                    <BodyText grey>Graphic Design</BodyText>
                </div>
                <div className="details__legal-adress">
                    <BodyText grey>19 Union Terrace</BodyText>
                    <BodyText grey>London</BodyText> 
                    <BodyText grey>E1 3EZ</BodyText>
                    <BodyText grey>United Kingdom</BodyText>
                </div>
                <div className="details__invoice-date">
                    <BodyText grey>Invoice Date</BodyText>
                    <HeadingS>21 Aug 2021</HeadingS>
                </div>
                <div className="details_customer-adress">
                    <HeadingS>Bill To</HeadingS>
                    <BodyText grey>Alex Grim</BodyText>
                    <BodyText grey>84 Church Way</BodyText>
                    <BodyText grey>Bradford</BodyText>
                    <BodyText grey>BD1 9PB</BodyText>
                    <BodyText grey>United Kingdom</BodyText>
                </div>
                <div className="details__customer-email">
                    <BodyText grey>Sent to</BodyText>
                    <HeadingS>alexgrim@mail.com</HeadingS>
                </div>
            </div>
    );
}

export default DetailsInformation;