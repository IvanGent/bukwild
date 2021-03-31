import React from 'react';


const style = {
    height: '11.188rem',
    margin: '0 10%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}

const ctaStyle = {
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


function CallToAction({cta}) {

    return (
        <div className='callToAction' style={style}>
            <div style={ctaStyle}>{cta}</div>
            <div className='letsTalk' style={letsTalkStyle}>LET'S TALK.</div>
        </div>
    )
}

export default CallToAction;
