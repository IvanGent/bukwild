import React from 'react';
import Menu from './Menu';

const NavBarStyle = { 
    position: 'absolute',
    minWidth: '100vw',
    padding: '0 8.125rem',
    marginTop: '1.179rem'
}

const imageStyle = {
    width: '4.728rem',
    height: '2.363rem',
    marginBottom: '0.958rem',
    objectFit: 'contain',
}

const ContactButton = {
    width: '8.625rem',
    height: '1.125rem',
    padding: '0.75rem 0.063rem 0.75rem 0',
    border: 'solid 1px white',
    fontFamily: 'HelveticaNeue',
    fontSize: '0.938rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'white',
}

function NavBar() {
    return (
        <div style={NavBarStyle}>
            <img style={imageStyle} src={'./images/abc_logo.svg'} alt='Logo' />
            <Menu />
            <div style={ContactButton}>Contact Us</div>
        </div>
    )
}

export default NavBar;