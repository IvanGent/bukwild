import React, { useEffect } from 'react';
import Headline from './Headline';
import SubHead from './SubHead';


function Marquee({info}) {

    useEffect(() =>{
        console.log(info);
    })

    return (
        <div>
            <Headline head={info.headline} />
            <SubHead sub={info.subhead} />
            {/* <CallToAction /> */}
        </div>
    )
}

export default Marquee;