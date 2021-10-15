import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './HeaderElements'
import logo from '../../Utils/Images/logo.png'
import './Header.css'

class Header extends React.Component {
    render() {
      return (
        <header>
          <Nav>
          <NavLink to="/">
          <img src={logo} className="LOGO" alt="Logo"/>
          </NavLink>
          <Bars/>
          <NavMenu>
            <NavLink to="/PPage" activeStyle>
            Home
            </NavLink>
            <NavLink to="/About" activeStyle>
            sobre nosotros
            </NavLink>
            <NavLink to="/Services" activeStyle>
            servicios
            </NavLink>
            <NavBtn>
            <NavBtnLink to="/Contact" activeStyle>
            Contact
            </NavBtnLink>
            </NavBtn>
            </NavMenu>
            </Nav>
        </header>
      );
    }
  }
   
  export default Header;