import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/">About Me</NavigationItem>
        <NavigationItem link="/#services">Services</NavigationItem>
        <NavigationItem link="/#portfolio" >Porfolio</NavigationItem>
        <NavigationItem  link="/#">Contact Me</NavigationItem>
    </ul>
);

export default navigationItems;