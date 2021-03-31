import React from 'react';
import Headline from './Headline';
import SubHead from './SubHead';
import CallToAction from './CallToAction';


function Marquee({info}) {

    const style = {
        backgroundImage: `url(/images/${info.background})`,
        minHeight: '100vh',
        // display: 'flex',
    }

    const contentStyle = {
        // maxWidth: '1440px'
    }

    const headingStyle = {
        position: 'absolute',
        top: '17rem',
        display: 'flex',
        width: '100%',
        // paddingTop: '14%',
        justifyContent: 'space-around',
        alignItems: 'center',
        // maxWidth: '1440px',
        // padding: ' 0 8.125rem',
        // margin: '0 8.125rem',
        // backgroundColor: 'red',
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