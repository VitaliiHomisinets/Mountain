import React from 'react'

import Equipment from './Page/Equipment';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Page/Home';
import Account from './Page/Account';
import Map from './ReadMore/Map';
import Level from './ReadMore/Level';
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/Account" element={<Account />} />
      <Route path="/Map" element={<Map />} /> 
      <Route path="/Level" element={<Level />} /> 
      <Route path="/Equipment" element={<Equipment />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}
