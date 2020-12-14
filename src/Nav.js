import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <ul>
            <li><Link to="/dogs">all dogs</Link></li>
            <li><Link to="/dogs/:name"></Link></li>
        </ul>
    )
}

export default Nav;