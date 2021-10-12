
import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import Ppage from './Pages/PrincipalPage/Ppage'
import About from './Pages/AboutUs/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'


import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route path='/' exact component={Ppage}/>
      <Route path='/about' exact component={About}/>
      <Route path='/services' exact component={Services}/>
      <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Footer/>
    
    </Router>
  );
}

export default App;
