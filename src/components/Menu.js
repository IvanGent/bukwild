import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    width: '4.563rem',
    height: '4.875rem',
    margin: '0.313rem 59.875rem 0 0',
    fontFamily: 'HelveticaNeue',
    fontSize: '0.875rem'
}

function Menu () {
    return (
        <div style={style}>
            <NavLink to='/industries' >Industries</NavLink>
            <NavLink to='/services' >Services</NavLink>
            <NavLink to='/aboutUs' >About Us</NavLink>
        </div>
    )
}

export default Menu;