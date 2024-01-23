import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const { id, productName, price, productImage, productCategory } = props.data;
    const { cartItems, removeFromCart, addToCart, removeAll, updateCartItemCount } = useContext(ShopContext)

    return (
        <div className='cartItems'>
            <img src={productImage} alt="" />
            <h1>{productName}</h1>
            <h1>{price}</h1>
            <h1>{productCategory}</h1>
            <div className='cart-options'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="text"
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button onClick={() => addToCart(id)}>+</button>
                <button onClick={() => removeAll(id)}>x</button>
            </div>
        </div>
    )
}

export default CartItem
