import React from 'react';
import Menu from './Menu';

const style = { 
    position: 'absolute',
}

function NavBar() {
    return (
        <div style={style}>
            <img src={'./images/abc_logo.svg'} alt='Logo' />
            <Menu />
        </div>
    )
}

export default NavBar;