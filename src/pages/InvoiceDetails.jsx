import './invoiceDetails.css';
import arrow from './../images/arrowLeft.svg';
import { HeadingM, HeadingS } from '../components/UI/Texts/Heading';
import { BodyText } from '../components/UI/Texts/BodyText';
import { InvoiceStatus } from '../components/Invoice/InvoiceStatus';
import { InvoiceManage } from '../components/Invoice/InvoiceManage';
import '../components/Invoice/invoiceList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dateToText } from '../calendarFunction/dateToText';
import { Button } from '../components/UI/Buttons/Button';
import { fetchInvoices } from '../store/invoices';

export function InvoiceDetails(props) {

    const invoice = useSelector(state => state.invoiceList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices()) 
    }, [])

    return (
        <div className='invoice-details'>
           <div className='go-back'>
                <img src={arrow} alt="" />
                <HeadingS>Go back</HeadingS>
           </div>
           <InvoiceManage></InvoiceManage>
           <div className='invoice-information'>
                {invoice.length && (
                    <>
                        <div className="customer-information">
                            <div class="invoice-identifier">
                                <HeadingS>#{invoice[0].id}</HeadingS>
                                <BodyText grey="true" style={{marginTop:'8px'}}>Graphic Design</BodyText>
                            </div>
                            <div class="bill-from">
                                {Object.values(invoice[0].billFrom).map(info => (
                                    <BodyText grey="True" style={{textAlign: 'right', lineHeight: '20px'}}>
                                        {info}
                                    </BodyText>
                                ))}
                            </div>

                            <div>
                                <BodyText grey="true" style={{marginBottom:'8px'}}>Invoice Date</BodyText>
                                <HeadingS>{dateToText(new Date(invoice[0].createdAt), 'text')}</HeadingS>
                            </div>
                            <div className='customer-adress'>
                                <BodyText grey="true" style={{marginBottom:'8px'}}>Bill to</BodyText>
                                <HeadingS>{invoice[0].clientName}</HeadingS>
                                <>
                                    {Object.values(invoice[0].clientAddress).map(info => (
                                        <BodyText grey="True" style={{lineHeight: '20px'}}>
                                            {info}
                                        </BodyText>
                                    ))}
                                </>
                            </div>
                            <div class="customer-contacts">
                                <BodyText grey="true" style={{marginBottom:'8px'}}>Sent to</BodyText>
                                <HeadingS>{invoice[0].clientEmail}</HeadingS>
                            </div>
                            <div>
                                <BodyText grey="true" style={{marginBottom:'8px'}}>Payment Due</BodyText>
                                <HeadingS>{dateToText(new Date(invoice[0].paymentDue), 'text')}</HeadingS>
                            </div>
                        </div>
                        <div className="customer-purchase">
                           <table className="customer-purchase__list">
                                <tr>
                                    <th colSpan="2">
                                        <BodyText grey="true" style={{textAlign: 'left'}}>Item name</BodyText>
                                    </th>
                                    <th>
                                        <BodyText grey="true">QTY.</BodyText>
                                    </th>
                                    <th>
                                        <BodyText grey="true" style={{textAlign: 'right'}}>Price</BodyText>
                                    </th>
                                    <th>
                                        <BodyText grey="true" style={{textAlign: 'right'}}>Total</BodyText>
                                    </th>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <HeadingS>Banner Design</HeadingS>
                                    </td>
                                    <td>
                                        <HeadingS style={{textAlign: 'center', color: '#7E88C3'}}>1</HeadingS>
                                    </td>
                                    <td>
                                        <HeadingS style={{textAlign: 'right', color: '#7E88C3'}}>£ 156.00</HeadingS>
                                    </td>
                                    <td>
                                        <HeadingS style={{textAlign: 'right'}}>£ 156.00</HeadingS>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <HeadingS>Banner Design</HeadingS>
                                    </td>
                                    <td>
                                        <HeadingS style={{textAlign: 'center', color: '#7E88C3'}}>1</HeadingS>
                                    </td>
                                    <td>
                                        <HeadingS style={{textAlign: 'right', color: '#7E88C3'}}>£ 156.00</HeadingS>
                                    </td>
                                    <td>
                                        <HeadingS style={{textAlign: 'right'}}>£ 156.00</HeadingS>
                                    </td>
                                </tr>
                           </table>
                           <div className="customer-purchase__total">
                                <BodyText style={{color: '#FFFFFF'}}>Amount Due</BodyText>
                                <HeadingM style={{color: '#FFFFFF'}}>£ 556.00</HeadingM>
                           </div>
                        </div>
                    </>
                )}
           </div>
        </div>
    );
}