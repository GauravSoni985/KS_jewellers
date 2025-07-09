import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Explore from './components/Explore';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>


  );
}

export default App;
