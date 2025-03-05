import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/signupPage';
import Aboutpage from './landing_page/about/Aboutpage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Futurepage from './landing_page/future/Futurepage';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/about" element={<Aboutpage/>} />
    <Route path="/pricing" element={<PricingPage/>} />
    <Route path="/support" element={<SupportPage/>} />
    <Route path="/future" element={<Futurepage/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
);

