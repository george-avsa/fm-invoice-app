import { useDispatch, useSelector } from "react-redux";
import { Item } from "./Item";
import { Empty } from "./Empty";
import { useEffect } from "react";
import { fetchInvoices } from "../../store/invoices";


export function List() {
    const invoiceList = useSelector(store => store.invoiceList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices()) 
    }, [])

    useEffect(() => {
        console.log(invoiceList);
    }, [invoiceList])

    return (
        <div className="invoice-list__content">
            {invoiceList.length ? invoiceList.map(a => (
                <Item {...a}></Item>
            )) : <Empty></Empty>}
        </div>
    );
} 