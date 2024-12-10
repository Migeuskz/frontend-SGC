import { Link } from "react-router-dom"

// import React from 'react'

export default function Navbar() {
  return (
    <div>
      <h3>Navbar</h3>
      <ul>
        <li>
            <Link to={'/home/'}>Home</Link>
        </li>
        <li>
            <Link to={'/home/formularios'}>Formularios</Link>
        </li>
        <li>
            <Link to={'/'}>Salir</Link>
        </li>
      </ul>
    </div>
  )
}
