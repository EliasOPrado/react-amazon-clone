import React from 'react'
import './Products.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // displath the item into the data base
        dispatch({
            type: 'ADD_TO_BASKET',
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        })
    }
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐</p> 
                ))}
                
                </div>
            </div>
            <img 
            src={image}
            alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
