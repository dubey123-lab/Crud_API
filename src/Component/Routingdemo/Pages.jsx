import React from 'react'
import { useParams } from 'react-router-dom'

const Pages = () => {

    let { pagesID } = useParams();
    return (
        <div>
            <h3>{pagesID}</h3>
        </div>
    )
}

export default Pages
