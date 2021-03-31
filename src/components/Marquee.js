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
        // maxWidth: '1440px',
        backgroundColor: 'red',
        height: '100vh',
        width: '100%',
        display: 'flex',
        // flexDirection: 'column-reverse',
        flexDirection: 'column',
        // justifyContent: 'center'
        justifyContent: 'space-between',
        // justifyContent: 'space-around',
        // alignContent: 'space-between',
        // alignItems: 'space-between',
        // justifyItems: 'space-between'
    }

    const headingStyle = {
        // position: 'absolute',
        // top: 'rem',
        // marginRight: '4rem',
        height: '100%',
        display: 'flex',
        width: '100%',
        justifySelf: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        // justifyContent: 'space-between',
        alignItems: 'center',
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