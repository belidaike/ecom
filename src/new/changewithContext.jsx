import React, { useContext } from 'react'
import { AppContext } from '../App'

const ChangeWithContext = () => {
    const { user } = useContext(AppContext)
    return (
        <div>
            <h1>changeuser that is: {user}</h1>
        </div>
    )
}

export default ChangeWithContext
