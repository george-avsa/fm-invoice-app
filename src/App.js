import React, { useEffect } from 'react';
import { Nav } from './components/Header/Nav';
import { Invoice } from './pages/Invoice';
import { InvoiceDetails } from './pages/InvoiceDetails';
import './components/UI/Texts/text.css'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ModalPrompt from './components/Modal/ModalPrompt';
import Modal from './components/Modal/ModalPrompt';
import Message from './components/UI/Message/Message';
import Success from './components/UI/Message/Success';

export default function App() {

  const modalWrapper = useSelector(state => state.settings.modalWrapper);

  const theme = useSelector(state => state.settings.theme);

  useEffect(() => {
    const html = document.querySelector('html');
    html.style.backgroundColor = theme ? '#141625' : '#F8F8FB';
  }, [theme]);

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
