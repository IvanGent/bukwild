import React from 'react';

function SubHead({sub}) {

    const style = {
        position: 'absolute',
        right: '10.625rem',
        top: '20.938rem',
        width: '22.5rem',
        height: '14.188rem',
        margin: '11.563rem 2.5rem 4.313rem 10.688rem',
        fontFamily: 'HelveticaNeue',
        fontSize: '0.875rem',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.86',
        letterSpacing: 'normal',
        color: 'white',
    }

    return <div style={style}>{sub}</div>
}

export default SubHead;