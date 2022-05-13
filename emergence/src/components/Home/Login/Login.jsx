import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
    <nav>
            <Link to="/">Retour</Link>
            <Link to="/home">Connection</Link>
    </nav>
    <Outlet />
    </div>
  )
}
