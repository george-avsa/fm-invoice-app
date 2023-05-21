import { useDispatch, useSelector } from "react-redux";
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceEmpty } from "./InvoiceEmpty";
import { useEffect } from "react";
import { fetchInvoices } from "../../store";


export function InvoiceList() {
    const invoiceList = useSelector(store => store.invoiceList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices()) 
    }, [])

    return (
        <div className="invoice-list__content">
            {invoiceList.length ? invoiceList.map(a => (
                <InvoiceItem {...a}></InvoiceItem>
            )) : <InvoiceEmpty></InvoiceEmpty>}
        </div>
    );
} 