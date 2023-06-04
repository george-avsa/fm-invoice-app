import { useSelector } from 'react-redux';
import '../components/Invoice/invoiceList.css';
import { BodyText } from '../components/UI/Texts/BodyText';
import { HeadingL } from '../components/UI/Texts/Heading';
import { ButtonToAdd } from '../components/UI/Buttons/ButtonToAdd';
import { InvoiceList } from '../components/Invoice/InvoiceList';
import { Filter } from '../components/UI/Filter/Filter';

export function Invoice(props) {
    const invoiceAmount = useSelector(state => state.invoiceList.length);

    return (
        <div className='invoice-list'>
            <div className="invoice-list__header">
                <div className="invoice-list__page-name">
                    <HeadingL>Invoices</HeadingL>
                    <BodyText grey>{invoiceAmount ? `There are ${invoiceAmount} total invoices` : 'No invoices'}</BodyText>
                </div>
                <Filter></Filter>
                <ButtonToAdd>New Invoice</ButtonToAdd>
            </div>
            <InvoiceList></InvoiceList>
        </div>
    );
}