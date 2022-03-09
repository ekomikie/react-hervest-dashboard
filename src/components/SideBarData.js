import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <BsIcons.BsGridFill style={{ color: '#e269ad' }} />,
    cName: 'nav-text active',
  },
  {
    title: 'Plans',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Purse',
    path: '/',
    icon: <BsIcons.BsFillHandbagFill />,
    cName: 'nav-text',
  },
  {
    title: 'Transaction',
    path: '/',
    icon: <BsIcons.BsFileEarmarkTextFill />,
    cName: 'nav-text',
  },
  {
    title: 'Banks & Cards',
    path: '/',
    icon: <IoIcons.IoIosCard />,
    cName: 'nav-text',
  },
  {
    title: 'Girl Code',
    path: '/',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text',
  },
  {
    title: 'Profile',
    path: '/',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Portfolio',
    path: '/',
    icon: <AiIcons.AiFillPieChart />,
    cName: 'nav-text',
  },
  {
    title: 'About Hervest',
    path: '/',
    icon: <BsIcons.BsFillInfoSquareFill />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/',
    icon: <FaIcons.FaCommentDots />,
    cName: 'nav-text',
  },
  {
    title: 'Logout',
    path: '/',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text',
  },
];
