import React from 'react';
import { Nav } from './components/Header/Nav';
import { InvoiceDetails } from './pages/InvoiceDetails';
import './components/UI/Texts/text.css'
import { useSelector } from 'react-redux';
import { Invoice } from './pages/Invoice';

export default function App() {

  const modalWrapper = useSelector(state => state.settings.modalWrapper);

  return (
    <div className='wrapper'>
      <Nav></Nav>
      <Invoice></Invoice>
      {modalWrapper && <style type="text/css">{"html {overflow: hidden}"}</style>}
    </div>
  )
}
