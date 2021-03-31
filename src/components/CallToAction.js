import React from 'react';

function CallToAction({cta}) {

    const style = {
        // position: 'absolute',
        // bottom: '0',
        // left: '8.125rem',
        // right: '8.125rem',
        // width: '73.75rem',
        height: '11.188rem',
        // margin: '2.938rem 0 0 0.188rem',
        margin: '0 10%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }

    const ctaStyle = {
        // position: 'absolute',
        // paddingLeft: '4.183rem',
        // top: '4.625rem',
        // width: '30.188rem',
        // height: '2rem',
        // margin: '0 13.75rem 0 0',
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
        // position: 'absolute',
        // right: '8.546rem',
        // width: '16.454rem',
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
        <div className='callToAction' style={style}>
            <div style={ctaStyle}>{cta}</div>
            <div className='letsTalk' style={letsTalkStyle}>LET'S TALK.</div>
        </div>
    )
}

export default CallToAction;
