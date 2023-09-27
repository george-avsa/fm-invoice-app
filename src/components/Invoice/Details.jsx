import { useSelector } from "react-redux";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";
import './details.css';
import DetailedInformation from "./DetailedInformation";
import OrderList from "./OrderList";
import OrderTotal from "./OrderTotal";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Details({invoice}) {

    const theme = useSelector(state => state.settings.theme);
    
    return (
        <div className={`details details--${theme}`}>
            <DetailedInformation invoice={invoice}></DetailedInformation>
            <div className="order">
                <OrderList invoice={invoice}></OrderList>
                <OrderTotal></OrderTotal>  
            </div>
        </div>
    );
}

export default Details;