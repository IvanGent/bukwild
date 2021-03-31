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

function NavBar() {
    return (
        <div style={NavBarStyle}>
            <img style={imageStyle} src={'./images/abc_logo.svg'} alt='Logo' />
            <Menu />
        </div>
    )
}

export default NavBar;