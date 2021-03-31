import React from 'react';
import Headline from './Headline';
import SubHead from './SubHead';
import CallToAction from './CallToAction';

// Style for the content
const contentStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

// Style for the headline and subhead section, mainly to align it with flexbox
const headingStyle = {
    height: '100%',
    display: 'flex',
    width: '100%',
    justifySelf: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
}

function Marquee({info}) {
    
    // Style that contains the background image
    const style = {
        backgroundImage: `url(/images/${info.background})`,
        minHeight: '100vh',
    }

    return (
        <div style={style}>
            <div style={contentStyle}>
                <div className='HeadAndSub' style={headingStyle}>
                    <Headline head={info.headline} />
                    <SubHead sub={info.subhead} />
                </div>
                <CallToAction cta={info.cta} />
            </div>
        </div>
    )
}

export default Marquee;