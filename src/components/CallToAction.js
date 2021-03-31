import React from 'react';

function CallToAction({cta}) {

    const style = {
        position: 'absolute',
        bottom: '0',
        left: '8.125rem',
        right: '8.125rem',
        // width: '73.75rem',
        height: '11.188rem',
        margin: '2.938rem 0 0 0.188rem',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center'
    }

    const ctaStyle = {
        position: 'absolute',
        left: '4.183rem',
        top: '4.625rem',
        width: '30.188rem',
        height: '2rem',
        margin: '0 13.75rem 0 0',
        fontFamily: 'HelveticaNeue',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: '-0.63px',
        color: 'black'
    }

    const letsTalkStyle = {
        position: 'absolute',
        right: '8.546rem',
        width: '16.454rem',
        height: '1.25rem',
        margin: '0.063rem 0',
        fontFamily: 'HelveticaNeue',
        fontSize: '0.688rem',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.82',
        letterSpacing: '1px',
        color: 'black',
    }

    return (
        <div style={style}>
            <div style={ctaStyle}>{cta}</div>
            <div style={letsTalkStyle}>LET'S TALK.</div>
        </div>
    )
}

export default CallToAction;
