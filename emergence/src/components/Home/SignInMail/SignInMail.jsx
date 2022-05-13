import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function SignInMail() {
  return (
    <div>
        <h1>SignInMail</h1>
    <nav>
        <Link to="/">Retour</Link>
        <Link to="/login">Inscription</Link>
    </nav>
    <Outlet />
    </div>
  )
}
