import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <App />
    <Footer />
  </>
);