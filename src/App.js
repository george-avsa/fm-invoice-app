import React from 'react';
import { Datepicker } from './UI/datepicker/Datepicker';
import { Select } from './UI/Select/Select';
import { Nav } from './UI/header/Nav';
import { InvoiceDetails } from './pages/InvoiceDetails';
import { Invoice } from './pages/Invoice';
import './UI/texts/text.css'
import FormModal from './components/FormModal';

export default function App() {
  return (
    <div className='wrapper'>
      <Nav></Nav>
      <FormModal></FormModal>
      <InvoiceDetails></InvoiceDetails>
      {/* <Invoice></Invoice> */}
    </div>
  )
}
