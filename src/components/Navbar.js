import React, { useState } from 'react';
import logo from '../img/HerVest.svg';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import './Navbar.scss';
import { SideBarData } from './SideBarData';
import { IconContext } from 'react-icons';
import userPic from '../img/user-pic.svg';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#7c7f93' }}>
        <div className='navbar'>
          <div className='logo-container'>
            <div className='logo-box-wrapper'>
              <div className='female-icon'>
                <IoIcons.IoMdFemale style={{ color: '#e269ad' }} />
              </div>
              <div className='first-two-circles'>
                <div className='circle-one'></div>
                <div className='circle-one'></div>
              </div>
              <div className='last-two-circles'>
                <div className='circle-one'></div>
                <div className='circle-one'></div>
              </div>
            </div>
            <div className='logo-text'>
              <img src={logo} style={{ color: '#e269ad' }} alt='logo' />
            </div>
          </div>
          <div className='user-container'>
            <div className='image-box'>
              <img src={userPic} alt='user-pic' />
            </div>
            <div className='user-text-box'>
              <p> Hello,</p>
              <h3>Oluwatobi</h3>
            </div>
          </div>
          <div className='menu-container'>
            <Link to='/' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <div className='nav-flex'>
              <div className='logo-container'>
                <div className='logo-box-wrapper'>
                  <div className='female-icon'>
                    <IoIcons.IoMdFemale style={{ color: '#e269ad' }} />
                  </div>
                  <div className='first-two-circles'>
                    <div className='circle-one'></div>
                    <div className='circle-one'></div>
                  </div>
                  <div className='last-two-circles'>
                    <div className='circle-one'></div>
                    <div className='circle-one'></div>
                  </div>
                </div>
                <div className='logo-text'>
                  <img src={logo} style={{ color: '#e269ad' }} alt='logo' />
                </div>
              </div>
              <li style={{ listStyle: 'none' }} className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose style={{ fontSize: '3rem' }} />
                </Link>
              </li>
            </div>
            <p className='menu'>Menu</p>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='title'> {item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
