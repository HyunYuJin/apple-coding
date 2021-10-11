/* eslint-disable */
import React, { useState } from 'react'
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import './App.css'
import Data from './data'
import Card from './Card'

function App() {
  let [shoes, shoesState] = useState(Data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

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

      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div>
      </Route>
    </div>
  )
}

export default App
