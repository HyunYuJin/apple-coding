import React, { useState } from 'react'
import './App.css';

function App() {
  let [food, foodState] = useState(['Ola Cubano Sandwich', 'Gambas Pasta Mill Box', 'Dolkorom Jjojirong Waffle Sand', 'Barbecue Chicken Cheese Ciabatta', 'Ricotta Cheese Baguette Sandwich.'])
  let [like, likeState] = useState(0)

  function changeFood() {
    let newArray = [...food] // 그냥 copy는 안된다. Deep copy를 할 것(완전 별개의 array)
    newArray[0] = 'Jeju green tea, bacon, cheese bagel'
    foodState(newArray)
    // foodState(['Ola Cubano Sandwich', 'Gambas Pasta Mill Box', 'Dolkorom Jjojirong Waffle Sand', 'Barbecue Chicken Cheese Ciabatta', 'Ricotta Cheese Baguette Sandwich.'])
  }

  let [modal, modalState] = useState(false) // 모달창을 on/off
  let [title, titleState] = useState(0)
  let [input, inputState] = useState('')
  let [write, writeState] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <div>Starbucks</div>
      </div>

      <div className="practice-space">
        <button className="btn" onClick={ changeFood }>Change the first menu.</button>
        <button className="btn" onClick={ () => modalState(!modal) }>Modal ON/OFF</button>

        <div className="input-wrap">
          <input className="input-box" onChange={ (event) => inputState(event.target.value) } />
          <span>사용자가 검색하는 내용: { input }</span>
        </div>
      </div>
      {
        food.map((write, index) => {
          return (
            <div className="list" key={ index }>
              <h3 className="list-title" onClick={ () => {
                  titleState(index) 
                  modalState(!modal)
              }}>{ write }</h3>
              <div className="list-info">
                <p>Published on February { 17 + index }th.</p>
                <button className="like-btn" onClick={ ()=>{ likeState(like + 1) } } >👍 { like }</button>
              </div>
              <hr/>
            </div>
          )
        })
      }

      {
        modal === true
        ? <Modal propsFood={ food } propsTitle={ title } />
        : null
      }

      <div className="publish">
        <input onChange={ (event) => writeState(event.target.value) } />
        <button className="btn" onClick={ () => {
          let array = [...food]
          array.unshift(write)
          foodState(array)
        } }>저장</button>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-body">
        <h2>{ props.propsFood[props.propsTitle] }</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    </div>
  )
}


export default App;
