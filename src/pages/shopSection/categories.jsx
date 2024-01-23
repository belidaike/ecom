import React from 'react'
import './categories.css'

const Categories = (props) => {
    const { id, productName, price, productImage, productCategory } = props.data

    return (
        <div className='category'>
            <h1>{productCategory}</h1>
        </div>
    )
}

export default Categories
