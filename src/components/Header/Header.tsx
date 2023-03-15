import { withRouter } from '@/withRouter';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '@/components/Heading/Heading';

const HeadingWithRouterProps = withRouter(Heading);

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <HeadingWithRouterProps />
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
    );
  }
}

export default Header;
