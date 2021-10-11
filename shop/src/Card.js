import React from 'react'

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + Number(props.propsShose.id + 1) + '.jpg'} alt={'shoes' + Number(props.propsShose.id + 1) } width="100%" />
            <h4>{ props.propsShose.title }</h4>
            <p>{ props.propsShose.content } & { props.propsShose.price }원</p>
        </div>
    )
}

export default Card