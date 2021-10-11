import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss'

function Detail(props) {
  let [alert, alertState] = useState(true)
  
  useEffect(() => {
    let timer = setTimeout(() => {
      alertState(false)

      return ()=>{ clearTimeout(timer) }
    }, 2000)
  }, [alert]) // [] 내에는 useEffect가 실행되는 조건 (여기서는 alert가 update될 때만 실행한다.)

  let history = useHistory()
  let { id } = useParams()
  let findItem = props.propsShose.find(item => item.id === parseInt(id, 10))

  return (
    <div className="container">
      <Box>
        <Title color="red" className="title">Detail</Title>
      </Box>

      <div className="my-alert-1">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
      {
        alert === true
        ? (<div className="my-alert-2">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} alt="shose" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ findItem.title }</h4>
          <p>{ findItem.content }</p>
          <p>{ findItem.price }원</p>
          <button type="button" className="btn btn-danger">주문하기</button>
          <button type="button" className="btn btn-warning" onClick={ () => { history.goBack() }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

const Box = styled.div`
  padding-top: 20px;
`
const Title = styled.h3`
  font-size: 25px;
  color: ${ props => props.color }
`

export default Detail