import React from 'react';

function Nav() {
    return (
        <div className="col-sm-3 nav-style">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/addemployee">Add Employee</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;