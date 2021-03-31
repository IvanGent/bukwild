import React from 'react';
import Headline from './Headline';
import SubHead from './SubHead';
import CallToAction from './CallToAction';;

function Marquee({info}) {
    return (
        <div>
            <Headline head={info.headline} />
            <SubHead sub={info.subhead} />
            <CallToAction cta={info.cta} />
        </div>
    )
}

export default Marquee;