// import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'

export default function Home() {
  return (
    <div>
      <h2>Bienvenido</h2>
        <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
