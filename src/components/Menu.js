import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    width: '4.563rem',
    height: '4.875rem',
    margin: '0.313rem 59.875rem 0 0',
    fontFamily: 'HelveticaNeue',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.86',
    letterSpacing: 'normal',
    color: 'white',
    backgroundColor: 'gray',
    display: 'flex',
    flexWrap: 'wrap'
}

const active = {
    color: '#ffc004'
}

const links = {
    color: 'white',
    textDecoration: 'none',
}

function Menu () {
    return (
        <div style={style}>
            <NavLink to='/industries' style={links} activeStyle={active}>Industries</NavLink>
            <NavLink to='/services' style={links} activeStyle={active}>Services</NavLink>
            <NavLink to='/aboutUs' style={links} activeStyle={active}>About Us</NavLink>
        </div>
    )
}

export default Menu;