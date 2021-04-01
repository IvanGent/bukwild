import React from 'react';

// Style for the Headline
const style = {
    fontFamily: 'HelveticaNeue',
    fontSize: '5.25rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1',
    letterSpacing: '-2.2px',
    color: 'white',
    width: '38.25rem'
}

function Headline({head}) {


    return <div style={style}>{head}</div>
}

export default Headline;