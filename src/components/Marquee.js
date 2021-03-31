import React from 'react';
import Headline from './Headline';
import SubHead from './SubHead';
import CallToAction from './CallToAction';


function Marquee({info}) {

    const style = {
        backgroundImage: `url(/images/${info.background})`,
        backgroundPosition: 'left top',
        paddingTop: '19.5rem',
        minHeight: '100vh',
    }

    const contentStyle = {
        padding: '0 8.125rem'
    }

    const headingStyle = {
        display: 'flex'
    }

    return (
        <div style={style}>
            <div style={contentStyle}>
                <div style={headingStyle}>
                    <Headline head={info.headline} />
                    <SubHead sub={info.subhead} />
                </div>
                <CallToAction cta={info.cta} />
            </div>
        </div>
    )
}

export default Marquee;