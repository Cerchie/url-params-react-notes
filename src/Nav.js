import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">aboot</Link></li>
            <li><Link to="/contact"> contact</Link></li>
            <li><Link to="/blog">blog</Link></li>
            <li><Link to="/blog/new">new post</Link></li>
            <li><Link to="/blargh">broken</Link></li>
            <li><Link to="/admin">admin</Link></li>
        </ul>
    )
}

export default Nav;