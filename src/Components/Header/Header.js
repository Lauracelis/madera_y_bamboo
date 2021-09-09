import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './HeaderElements'

class Header extends React.Component {
    render() {
      return (
        <header>
          <Nav>
          <NavLink to="/">
          <h1>logo</h1>
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