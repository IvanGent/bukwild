import React from 'react';

// Style for the SubHeadline
const style = {
    width: '22.5rem',
    fontFamily: 'HelveticaNeue',
    fontSize: '0.875rem',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.86',
    letterSpacing: 'normal',
    color: 'white',
}

function SubHead({sub}) {

    return <div style={style}>{sub}</div>
}

export default SubHead;