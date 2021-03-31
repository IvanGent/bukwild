import React from 'react';
import Menu from './Menu';

// Style for the entire Nav Bar
const NavBarStyle = { 
    position: 'absolute',
    display: 'flex',
    minWidth: '100vw',
    height: '15rem',
    justifyContent: 'space-between',
}

// Style for the Logo
const imageStyle = {
    marginLeft: '8.104rem',
    marginTop: '1.179rem',
    width: '4.728rem',
    height: '2.363rem',
    marginBottom: '0.958rem',
    objectFit: 'contain',
}

// Style for the Contact Us Button
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
    marginRight: '8.125rem',
    marginTop: '1.563rem',
}

function NavBar() {
    return (
        <div className='navBar' style={NavBarStyle}>
            <div>
                <img style={imageStyle} src={'./images/abc_logo.svg'} alt='Logo' />
                <Menu />
            </div>
            <div className='contactButton' style={ContactButton}>Contact Us</div>
        </div>
    )
}

export default NavBar;