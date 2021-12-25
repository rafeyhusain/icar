import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <>
      <header>
        <div className={classes.header}>Car Dealer</div>
      </header>
      <ul className="flex pl-3">
        <li>
          <Link className='mr-6 text-black-500 hover:text-blue-800 font-bold' to={"./"}>
            Home
          </Link>
        </li>
        <li>
          <Link className='mr-6 text-black-500 hover:text-blue-800 font-bold' to={"./recommend"}>
            Recommend Car
          </Link>
        </li>
      </ul>
      </>
  );
}

export default Header;