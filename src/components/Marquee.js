import React, { useEffect } from 'react';

import Headline from './Headline';


function Marquee({info}) {

    useEffect(() =>{
        console.log(info);
    })

    return (
        <div>
            <Headline head={info.headline} />
            {/* <SubHead />
            <CallToAction /> */}
        </div>
    )
}

export default Marquee;