import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu () {
    return (
        <div>
            <NavLink to='/industries' >Industries</NavLink>
            <NavLink to='/services' >Services</NavLink>
            <NavLink to='/aboutUs' >About Us</NavLink>
        </div>
    )
}

export default Menu;