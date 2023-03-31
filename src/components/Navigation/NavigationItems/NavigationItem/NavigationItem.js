import React from 'react';
// import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <a
         onClick={props.clicked}
         href={props.link} 
        >{props.children}
        </a>
    </li>
);

export default navigationItem;