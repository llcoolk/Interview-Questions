import * as React from 'react'
import { ButtonBack, ButtonFlip, ButtonForward, Card, Header, Nav } from 'app/components'
import './style.css'

export default () => (
  <div className="root">
    <div className="container">
      <Header />
      <Nav />
      <Card />
      <ButtonFlip />
    </div>
    <ButtonBack />
    <ButtonForward />
  </div>
)