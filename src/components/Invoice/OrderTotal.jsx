import { useSelector } from "react-redux";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingM } from "../UI/Texts/Heading";
import { useParams } from "react-router-dom";

function OrderTotal({
    total
}) {

    const theme = useSelector(state => state.settings.theme);

    return (
        <div className={`order__total order__total--${theme}`}>
            <BodyText style={{color: '#fff'}}>Amount Due</BodyText>
            <HeadingM style={{color: '#fff'}}>20.000</HeadingM>
        </div>
    );
}

export default OrderTotal;