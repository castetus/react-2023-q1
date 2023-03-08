import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="main-menu">
            <li className="main-menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="main-menu-item">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
