import React from 'react';
import { NavLink } from 'react-router-dom';

// Style for the Menu
const style = {
    position: 'absolute',
    left: '8.125rem',
    top: '4.5rem',
    width: '4.563rem',
    height: '4.875rem',
    fontFamily: 'HelveticaNeue',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.86',
    letterSpacing: 'normal',
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
}

// Font color changes when the link is active
const activeLink = {
    color: '#ffc004'
}

// Style for the links
const links = {
    color: 'white',
    textDecoration: 'none',
}

function Menu () {
    return (
        <div style={style}>
            <NavLink to='/' exact={true} style={links} activeStyle={activeLink}>Industries</NavLink>
            <NavLink to='/services' style={links} activeStyle={activeLink}>Services</NavLink>
            <NavLink to='/aboutUs' style={links} activeStyle={activeLink}>About Us</NavLink>
        </div>
    )
}

export default Menu;