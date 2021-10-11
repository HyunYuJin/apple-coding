/* eslint-disable */
import React, { useState } from 'react'
import './App.css'
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap'
import Data from './data'
import Card from './Card'

function App() {
  let [shoes, shoesState] = useState(Data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <h1 className="d-block w-100 background">First slide</h1>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <h1 className="d-block w-100 background">Second slide</h1>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <h1 className="d-block w-100 background">Third slide</h1>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="row">
          {
            shoes.map((item, index) => {
              return (
                <Card propsShose={ item } key={ index } />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default App
