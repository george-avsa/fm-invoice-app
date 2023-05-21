import { useSelector } from 'react-redux';
import { ButtonToAdd } from '../UI/buttons/Button';
import { Filter } from '../UI/filter/Filter';
import { InvoiceList } from '../UI/invoice/InvoiceList';
import { BodyText } from '../UI/texts/BodyText';
import { HeadingL, HeadingS } from '../UI/texts/Heading';
import './../UI/invoice/invoiceList.css';

export function Invoice(props) {
    const invoiceAmount = useSelector(state => state.invoiceList.length);

    return (
        <div className='invoice-list'>
            <div className="invoice-list__header">
                <div className="invoice-list__page-name">
                    <HeadingL>Invoices</HeadingL>
                    <BodyText color="grey">{invoiceAmount ? `There are ${invoiceAmount} total invoices` : 'No invoices'}</BodyText>
                </div>
                <Filter></Filter>
                <ButtonToAdd>New Invoice</ButtonToAdd>
            </div>
            <InvoiceList></InvoiceList>
        </div>
    );
}