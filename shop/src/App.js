/* eslint-disable */
import React, { useState } from 'react'
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Data from './data'

// Components
import Card from './Card'
import Detail from './Detail'

function App() {
  let [shoes, shoesState] = useState(Data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand>Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={ Link } to="/">Home</Nav.Link>
          <Nav.Link as={ Link } to="/detail">Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
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
        </Route>

        <Route path="/detail/:id">
          <Detail propsShose={ shoes } />
        </Route>
      </Switch>
    </div>
  )
}

export default App