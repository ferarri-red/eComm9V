import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg">
            <image href={logo} width="290" />
          </svg>
        </div>
        <div className="cart">
          <span>CART 0</span>
        </div>
      </header>

      <div className="nav">
        <NavLink to='/Items' activeClassName="active">ITEMS</NavLink>
        <NavLink to='/Contact' activeClassName="active">CONTACT</NavLink>
        <NavLink to='/Gens' activeClassName="active">GENS</NavLink>
      </div>
    </>
  );
}
