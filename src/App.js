import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
