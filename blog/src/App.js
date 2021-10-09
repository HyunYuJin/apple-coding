import React, { useState } from 'react'
import './App.css';

function App() {
  let [title, titleState] = useState(['남자 코트 추천', '강남 우동 맛집', '안녕하세요'])
  let [ like, likeState ] = useState(0)

  function changeTitle() {
    let newArray = [...title] // 그냥 copy는 안된다. Deep copy를 할 것(완전 별개의 array)
    newArray[0] = '여자 코트 추천'
    titleState(newArray)
    // titleState(['여자 코트 추천', '강남 우동 맛집', '안녕하세요'])
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ changeTitle }>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ likeState(like + 1) } } >👍</span> { like }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } <span onClick={ ()=>{ likeState(like + 1) } } >👍</span> { like }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } <span onClick={ ()=>{ likeState(like + 1) } } >👍</span> { like }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
