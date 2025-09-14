import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import WorkExperience from './components/pages/WorkExperience';
import Portfolio from './components/pages/Portfolio';
import ContactMe from './components/pages/ContactMe';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/work-experience' element={<WorkExperience/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact-me' element={<ContactMe/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;