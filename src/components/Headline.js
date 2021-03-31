import React from 'react';

function Headline({head}) {

    const style = {
        // position: 'absolute',
        // left: '7.938rem',
        // top: '19.5rem',
        // paddingLeft: '7.938rem',
        // width: '38.25rem',
        // height: '17rem',
        // margin: '10.125rem 10.688rem 2.938rem 0',
        fontFamily: 'HelveticaNeue',
        fontSize: '5.25rem',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '-2.2px',
        color: 'white',
        // paddingTop: '1.438rem'
    }

    return <div style={style}>{head}</div>
}

export default Headline;