import React, { useContext } from 'react'
import { AppContext } from '../App'
import ChangeWithContext from './changewithContext'

const WhatContext = () => {
    const { user } = useContext(AppContext)
    return (
        <div>
            <h1>what context?</h1>
            <ChangeWithContext />
        </div>
    )
}

export default WhatContext
