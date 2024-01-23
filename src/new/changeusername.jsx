import React, { useState } from 'react'
import './changeusername.css'

const changeusername = (props) => {
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input type="text" className="input" onChange={(event) => setNewUsername(event.target.value)} />

            <button onClick={() => props.setUserName(newUsername)}>submit</button>
        </div>
    )
}

export default changeusername
