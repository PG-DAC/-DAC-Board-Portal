import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarAdmin } from './SidebarAdmin';
import '../Nav.css';
import { IconContext } from 'react-icons';
import Button from 'react-bootstrap/Button'

function Nav() {
    
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='nav-data'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         <div className="container d-flex justify-content-end">
          
          <a href="/" > <button  class="btn btn-outline-danger btn-lg float-right" type="submit" >Log Out</button> </a> 
         </div>

    
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
             
            </li>
            {SidebarAdmin.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
