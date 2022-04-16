import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarAdmin = [
  {
    title: 'Dashboard',
    path: '/Admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Feedback',
    path: '/admin-feedback',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messagesAdmin',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Recording Sessions',
    path: '/recordingAdmin',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Scheduled Meetings',
    path: '/scheduledAdmin',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  
];
