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

    return (
        <div style={style}>
            <Headline head={info.headline} />
            <SubHead sub={info.subhead} />
            <CallToAction cta={info.cta} />
        </div>
    )
}

export default Marquee;