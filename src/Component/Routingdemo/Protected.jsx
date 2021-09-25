import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LoginContext from '../../Contexts/login';


const Protected = (props) => {
    const [isLoading, _setIsLoading] = useState(true);
    let Cmp = props.Cmp
    const history = useHistory();
    const context = useContext(LoginContext);

    useEffect(() => {


        if (!context.userData) {
            history.push("/")
        }
        _setIsLoading(false);

    }, [])


    if (isLoading)
        return <h1>Loading .....</h1>
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected
