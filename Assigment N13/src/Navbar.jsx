import React from 'react';
import { Link } from 'react-router-dom';
import classes from './module/index.module.scss';
import ClockIcon from '../images/icon-planning.svg'
import BellIcon from '../images/icon-reminders.svg'
import TodoIcon from '../images/icon-todo.svg'
import CalendarIcon from '../images/icon-calendar.svg'
import Logo from '../images/logo.svg'
import DropDown from '../images/icon-arrow-up.svg'
import ArrowUp from '../images/icon-arrow-down.svg'


const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes['navbar-left']}>
        <img src={Logo} alt="Left Logo" />

        <div className={classes['navbar-left-dropdown']}>
          <button>Features  <img src={DropDown} alt="Dropdown Icon" className={classes['dropdown-icon']} /> </button>
          <div className={classes['navbar-left-dropdown-content']}>
            <Link to="/TodoList">
              <span>Todo List</span>
              <img src={TodoIcon} alt="Todo List Icon" className={classes['dropdown-icon']} />
            </Link>
            <Link to="/Calendar">
              <span>Calendar</span>
              <img src={CalendarIcon} alt="Calendar Icon" className={classes['dropdown-icon']} />
            </Link>
            <Link to="/Reminders">
              <span>Reminders</span>
              <img src={BellIcon} alt="Reminders Icon" className={classes['dropdown-icon']} />
            </Link>
            <Link to="/Planning">
              <span>Planning</span>
              <img src={ClockIcon} alt="Planning Icon" className={classes['dropdown-icon']} />
            </Link>
          </div>
        </div>

        <div className={classes['navbar-left-dropdown']}>
          <button>Company  <img src={DropDown} alt="Dropdown Icon" className={classes['dropdown-icon']} /></button>
          <div className={classes['navbar-left-dropdown-content']}>
            <Link to="/History">
              <span>History</span>
            </Link>
            <Link to="/OurTeam">
              <span>Our Team</span>
            </Link>
            <Link to="/Blog">
              <span>Blog</span>
            </Link>
          </div>
        </div>

        <Link to="/careers">
          Careers <img src={ArrowUp} alt="Arrow Up Icon" className={classes['arrowup-icon']} />
        </Link>
        <Link to="/about">
          About <img src={ArrowUp} alt="Arrow Up Icon" className={classes['arrowup-icon']} />
        </Link>
      </div>

      <div className={classes['navbar-right']}>
        <Link to="/register">
          <button className={classes['nav-button']}>Register</button>
        </Link>
        <Link to="/login">
          <button className={classes['nav-button']}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

