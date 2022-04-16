import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import Button from 'react-bootstrap/Button'
import Logout from './Logout';


function Navbar() {
    
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
   const opr=()=>{
     sessionStorage.clear();
   }
   let variable = sessionStorage.getItem('userdata');
    
       variable= JSON.parse(variable);
       
       
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar-linker'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         <div className="container d-flex justify-content-end">
           
          <h3 className=" align-items-center text-light mt-2 mr-4">{variable.username}</h3>
          <a href="/" > <button  class="btn btn-outline-danger  float-right "onClick={opr}>Log Out</button> </a> 
         </div>

    
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
             
            </li>
            {SidebarData.map((item, index) => {
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



export default Navbar;
