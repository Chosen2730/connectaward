import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./../images/logo.svg";
import { useGlobalContext } from "../context";
import { TbLogin } from "react-icons/tb";

const Nav = () => {
  const { isNavOpen, setIsNavOpen } = useGlobalContext();

  const closeNav = () => {
    setIsNavOpen(true);
  };
  return (
    <nav id='navigation'>
      <div className='nav_left nav_div'>
        <Link to='/' onClick={closeNav}>
          {" "}
          <img src={logo} alt='logo' />
        </Link>
        <i className='nav_icon' onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
        </i>
      </div>
      <div className={isNavOpen ? "nav_center" : "nav_center show_nav"}>
        <ul className='nav_center_ul' onClick={closeNav}>
          <Link to='categories'>
            <li className='nav_list'>Categories</li>
          </Link>
          <Link to='future'>
            <li className='nav_list'>Future Editions</li>
          </Link>
          <Link to='techies'>
            <li className='nav_list'>Celebrated</li>
          </Link>
          <Link to='about'>
            <li className='nav_list'>About Us</li>
          </Link>
          <Link to='donation'>
            <li className='nav_list'>Make a Donation</li>
          </Link>
        </ul>
      </div>
      <div className={isNavOpen ? "nav_right" : "nav_right show_nav"}>
        <Link to='login' onClick={closeNav}>
          <button className='login_btn btn login_icon'>
            <TbLogin />
          </button>
        </Link>
        <Link to='login' onClick={closeNav}>
          <button className='login_btn btn'>Login</button>
        </Link>
        <Link to='signin' onClick={closeNav}>
          <button className='create_btn btn'>Create Account</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
