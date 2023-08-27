import { useSelector } from "react-redux";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";
import './details.css';
import DetailsInformation from "./DetailsInformation";
import OrderList from "./OrderList";
import OrderTotal from "./OrderTotal";

function Details() {

    const theme = useSelector(state => state.settings.theme);

    return (
        <div className={`details details--${theme}`}>
            <DetailsInformation></DetailsInformation>
            <div className="order">
                <OrderList></OrderList>
                <OrderTotal></OrderTotal>  
            </div>
        </div>
    );
}

export default Details;