import React from 'react';
import Menu from './Menu';

const style = { 
    position: 'absolute',
}

function NavBar() {
    return (
        <div style={style}>
            {/* <logo></logo> */}
            <Menu />
        </div>
    )
}

export default NavBar;