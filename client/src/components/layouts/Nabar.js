import React from 'react'
import {Link} from "react-router-dom"
function Nabar() {
    return (
        <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link text-white" to="/" >Active </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-hite" to="/add">Add article </Link>
                    </li>
                </ul>
                </nav>
        </div>
    )
}

export default Nabar
