import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import Admin from '@/pages/Admin';
import '@/i18n';
import '@/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-cms" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-right" theme="dark" richColors />
    </div>
  );
}

export default App;