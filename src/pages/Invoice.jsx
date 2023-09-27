import { useDispatch, useSelector } from 'react-redux';
import '../components/Invoice/invoiceList.css';
import { BodyText } from '../components/UI/Texts/BodyText';
import { HeadingL } from '../components/UI/Texts/Heading';
import { ButtonToAdd } from '../components/UI/Buttons/ButtonToAdd';
import { List } from '../components/Invoice/List';
import { Filter } from '../components/UI/Filter/Filter';
import FormModal from '../components/Form/FormModal';
import { stopRedirect, toggleFormModal } from '../store/settings';
import Modal from '../components/Modal/ModalPrompt';
import { useEffect } from 'react';

export function Invoice(props) {
    const invoiceAmount = useSelector(state => state.invoiceList.length);

    const modalForm = useSelector(state => state.settings.modalWrapper.modalForm);

    const dispatch = useDispatch();
    function showFormModal () {
        dispatch(toggleFormModal());
    }

    useEffect(() => {
        dispatch(stopRedirect());
    }, []);

    return (


        <>
        <div className='invoice-list'>
            <div className="invoice-list__header">
                <div className="invoice-list__page-name">
                    <HeadingL>Invoices</HeadingL>
                    <BodyText grey>{invoiceAmount ? `There are ${invoiceAmount} total invoices` : 'No invoices'}</BodyText>
                </div>
                <Filter></Filter>
                <ButtonToAdd onClick={() => showFormModal()}>New Invoice</ButtonToAdd>
            </div>
            <List></List>
            {modalForm && <FormModal></FormModal>}
        </div>
        {/* <Modal></Modal> */}
        </>
    );
}