import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Items from './pages/Items';
import Contact from './pages/Contact';
import Gens from './pages/Gens';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Content />} />
          <Route path='/Items' element={<Items />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Gens' element={<Gens />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}