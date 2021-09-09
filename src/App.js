
import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import PPage from './Components/PrincipalPage/PPage'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <PPage/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
