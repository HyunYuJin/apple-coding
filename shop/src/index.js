import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom' // 좀 더 안전한 라우팅 방법(잘못된 페이지를 서버에 요청해서 404 Page Not Found가 뜰 수 있다. 실수로 서버에게 요청하지 않게 하려면 안전하게 #을 붙여준다.)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
