import React, { useEffect } from 'react';

import Headline from './Headline';


function Marquee() {

    useEffect(() =>{
        console.log();
    })

    return (
        <div>
            <Headline />
            {/* <SubHead />
            <CallToAction /> */}
        </div>
    )
}

export default Marquee;