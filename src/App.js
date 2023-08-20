import React from 'react';
import { Nav } from './components/Header/Nav';
import { Invoice } from './pages/Invoice';
import { InvoiceDetails } from './pages/InvoiceDetails';
import './components/UI/Texts/text.css'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  const modalWrapper = useSelector(state => state.settings.modalWrapper);

  const theme = useSelector(state => state.settings.theme);

  return (
    <div className={`wrapper wrapper--${theme}`}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Invoice/>} />
        <Route path="/details/:id" element={<InvoiceDetails/>} />
      </Routes>
    </div>
  )
}
