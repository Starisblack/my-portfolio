import React, { useEffect } from 'react';

import './Navbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';



const Navbar = ( props ) => {
  
    const changeBackground = () => {
      
        if(window.scrollY >= 66){
         document.body.classList.add("scroll");
        } else{
          document.body.classList.remove("scroll");
        }
      }

      useEffect(()=> {
        changeBackground()
        window.addEventListener("scroll", changeBackground )
      })


  return(  <header className="Toolbar">
        <h3>Samuel Ogunniyi</h3>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
        <a href="#contact" className="contact-btn DesktopOnly"> Contact Me</a>
    </header>)
};

export default Navbar;