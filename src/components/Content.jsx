import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Items from '../pages/Items';
import Gens from '../pages/Gens';
import Contact from '../pages/Contact';

export default function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Items' element={<Items />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gens' element={<Gens />} />
      </Routes>
    </BrowserRouter>
  );
}
