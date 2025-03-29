import { Logo } from '@/components/Logo/Logo'
import React from 'react'
import "./HomePage.scss"

export default function HomePage() {
  return (
    <div className="home">
      <Logo color='white' className="logo"/>
      For the community. Human community
    </div>
  )
}
