import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/admin"  element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
