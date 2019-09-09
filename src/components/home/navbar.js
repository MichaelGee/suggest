import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}
        <button
          className='hamburger hamburger--spin navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner navbar-toggler-icon'></span>
          </span>
        </button>

        <div className='container'>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <a className='navbar-brand' href='#'>
              SuggestBox
            </a>
            <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  SignIn
                </a>
              </li>
              <li className='nav-item'>
                <Link to='/signup'>
                  <a className='nav-link' href='#'>
                    SignUp
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/admin'>
                  <a className='nav-link' href='#'>
                    Admin
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
