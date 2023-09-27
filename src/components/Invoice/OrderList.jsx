import { useEffect, useState } from "react";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";
import { useSelector } from "react-redux";

const tableTitle = [{
    name:'Item name',
    quantity:'QTY.',
    price:'Price',
    total:'Total',
}];

function OrderList({invoice}) {

    const theme = useSelector(state => state.settings.theme);

    return (
        <div className={`order__list order__list--${theme}`}>
            {tableTitle.concat(invoice.items).map(item => (
                <>
                    <div className="list__name">
                        { item.total === 'Total' 
                            ? <BodyText>{item.name}</BodyText> 
                            : <HeadingS>{item.name}</HeadingS> 
                        }
                    </div>
                    <div className="list__quantity">
                        { item.total === 'Total' 
                            ? <BodyText>{item.quantity}</BodyText> 
                            : <HeadingS>{item.quantity}</HeadingS> 
                        }
                    </div>
                    <div className="list__price">
                        { item.total === 'Total' 
                                ? <BodyText>{item.price}</BodyText> 
                                : <HeadingS>{item.price}</HeadingS> 
                        }
                    </div>
                    <div className="list__price">
                        { item.total === 'Total' 
                            ? <BodyText>Total</BodyText> 
                            : <HeadingS>{item.total}</HeadingS> 
                        }
                        </div>
                </>
            ))}
        </div>
    );
}

export default OrderList;