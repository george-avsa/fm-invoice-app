import './invoiceDetails.css';
import arrow from './../images/arrowLeft.svg';
import { HeadingM, HeadingS } from '../components/UI/Texts/Heading';
import { BodyText } from '../components/UI/Texts/BodyText';
import '../components/Invoice/invoiceList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dateToText } from '../calendarFunction/dateToText';
import { fetchInvoices } from '../store/invoices';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Manager } from '../components/Invoice/Manager';
import Details from '../components/Invoice/Details';
import FormModal from '../components/Form/FormModal';
import ModalPrompt from './../components/Modal/ModalPrompt'
import Success from '../components/UI/Message/Success';
import { hideSuccessEdit } from '../store/settings';

export function InvoiceDetails(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices()) 
    }, [])

    const {id} = useParams();
    const invoice = useSelector(state => state.invoiceList.find(invoice => invoice.id === id)); 

    const modalPrompt = useSelector(state => state.settings.modalWrapper.modalPrompt); 

    const modalForm = useSelector(state => state.settings.modalWrapper.modalForm);
    const settedRedirect = useSelector(state => state.settings.redirect);

    const successEdit = useSelector(state => state.settings.successEdit);

    useEffect(() => {
        setTimeout(() => dispatch(hideSuccessEdit()), 3000)
    }, [successEdit]);

    return (
        <div className='invoice-details'>
            {settedRedirect && <Navigate to="/" />}
           <Link to="/" className='go-back'>
                <img src={arrow} alt="" />
                <HeadingS>Go back</HeadingS>
           </Link>
           {invoice && (
            <>
               <Manager status={invoice.status}></Manager>
               <Details invoice={invoice}></Details>
            </>
           )}
            {modalForm && <FormModal editing></FormModal>}
            {modalPrompt && <ModalPrompt></ModalPrompt>}
            {successEdit && <Success></Success>}
        </div>
    );
}