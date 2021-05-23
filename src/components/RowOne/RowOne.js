import React from 'react'
import './RowOne.css'
import {Link} from 'react-router-dom'

function RowOne({onChange}) {
    return (
        <div className="rowOne">
            <Link to="/addRecord" className="anchor"><span>+</span><h6>Add record</h6></Link>
            <input type="text" placeholder="search" onChange={(e)=>onChange(e)}/>
        </div>
    )
}

export default RowOne
