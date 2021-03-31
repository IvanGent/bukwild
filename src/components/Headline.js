import React, { useEffect } from 'react';

function Headline({head}) {

    useEffect(() => {
        console.log(head);
    })

    return (
        <div>
            {head}
        </div>
    )
}

export default Headline;