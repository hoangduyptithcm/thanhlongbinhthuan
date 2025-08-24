import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import ImageShowcase from './components/ImageShowcase';
import ImageGallery from './components/ImageGallery';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Features />
              <ImageShowcase />
              <ImageGallery />
              <Gallery />
              <Benefits />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
