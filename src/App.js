import React from 'react';
import { Nav } from './components/Header/Nav';
import { InvoiceDetails } from './pages/InvoiceDetails';
import './components/UI/Texts/text.css'
import { useSelector } from 'react-redux';
import FormModal from './components/Form/FormModal';

export default function App() {

  const modalWrapper = useSelector(state => state.settings.modalWrapper);

  const theme = useSelector(state => state.settings.theme);

  return (
    <div className={`wrapper wrapper--${theme}`}>
      <Nav></Nav>
      <FormModal></FormModal>
      <InvoiceDetails></InvoiceDetails>
      {modalWrapper && <style type="text/css">{"html {overflow: hidden}"}</style>}
    </div>
  )
}
