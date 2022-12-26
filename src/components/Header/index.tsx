import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header >
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <label htmlFor="my-drawer-4" className="md:hidden border">
        Open drawer
      </label>
    </header>
  )
}
