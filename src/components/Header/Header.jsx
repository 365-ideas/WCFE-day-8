import React from 'react'
import "./Header.scss"
import { Logo } from '../Logo/Logo'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo className="logo" />
        <p>365 Project</p>
      </div>
    </header>
  )
}
