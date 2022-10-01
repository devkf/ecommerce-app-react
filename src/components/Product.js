import React from 'react'

const Product = ({product, cart, handleAddToCart, handleRemoveFromCart}) => {
    const isProductInCart = cart.length > 0 && cart.find(item => item === product.id);

    return (
    <div className="product">
        <h2>{product.name}</h2>
        <p>
        {product.description}
        </p>
        <div className="price">{`${product.price} MAD`}</div>
        {
            isProductInCart ?
            <button className="button button-remove" onClick={() => handleRemoveFromCart(product.id)}>Remove from cart</button>
            :
            <button className="button button-add" onClick={() => handleAddToCart(product.id)}>Add to cart</button>
        }
    </div>
    )
}

export default Product
