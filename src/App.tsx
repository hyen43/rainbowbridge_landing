import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Survey from './components/Survey';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Process />
      <Survey />
      <Footer />
    </div>
  );
}

export default App;