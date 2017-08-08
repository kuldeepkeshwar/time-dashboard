import React from 'react';
import './styles.scss';

const Header = () => (<header className="header">
  <nav>
    <a className="active" href="">Dashboard</a>
    <a href="">Edit Time</a>
    <a href="">Screenshots</a>
    <a href="">Reports</a>
    <a href="">Payments</a>
  </nav>
</header>);
export default Header;
