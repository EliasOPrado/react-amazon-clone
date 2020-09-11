import React from 'react'
import './Products.css'

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>Expert Secrets</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rationg">
                  <p>⭐</p>  
                 
                </div>
            </div>
            <img 
            src="https://m.media-amazon.com/images/I/71vJlsZeD0L._AC_UY436_FMwebp_QL65_.jpg" 
            alt=""/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
