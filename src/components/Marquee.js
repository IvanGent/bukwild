import React, {useEffect} from 'react';
import Headline from './Headline';
import SubHead from './SubHead';
import CallToAction from './CallToAction';

function Marquee({info}) {

    useEffect(() => {
        console.log(info.background)
    })

    const style = {
        backgroundImage: `url(/images/${info.background})`,
        backgroundPosition: 'left top',
        color: 'red',
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