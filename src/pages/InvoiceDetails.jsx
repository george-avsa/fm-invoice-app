import './invoiceDetails.css';
import arrow from './../images/arrowLeft.svg';
import { HeadingM, HeadingS } from '../components/UI/Texts/Heading';
import { BodyText } from '../components/UI/Texts/BodyText';
import '../components/Invoice/invoiceList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dateToText } from '../calendarFunction/dateToText';
import { fetchInvoices } from '../store/invoices';
import { Link } from 'react-router-dom';
import { Manager } from '../components/Invoice/Manager';
import Details from '../components/Invoice/Details';

export function InvoiceDetails(props) {

    const invoice = useSelector(store => store.invoiceList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices()) 
    }, [])

    const theme = useSelector(state => state.settings.theme);

    

    return (
        <div className='invoice-details'>
           <Link to="/" className='go-back'>
                <img src={arrow} alt="" />
                <HeadingS>Go back</HeadingS>
           </Link>
           <Manager></Manager>
           <Details></Details>
        </div>
    );
}