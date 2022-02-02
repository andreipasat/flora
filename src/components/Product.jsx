import React from 'react'

const Product = (props) => {
    return (
        <div className="col s4">
            <div><img width="200px" src={props.image}></img></div>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default Product;