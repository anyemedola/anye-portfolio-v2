import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Oldsite from './components/OldSite/Oldsite';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Oldsite />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
