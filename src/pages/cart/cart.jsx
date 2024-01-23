import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import './cart.css'

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    return (
        <div className='cart'>
            <div className="cart-container">
                {PRODUCTS.map((item) => {
                    if (cartItems[item.id] !== 0) {
                        return <CartItem data={item} key={item.id} />
                    }
                })}
                {!!totalAmount ? (
                    <div className="cart-total">
                        <div>{totalAmount > 1000 ? (
                            <h1>${totalAmount / 1000}.00</h1>
                        ) : ''
                        }</div>
                    </div>
                ) :
                    (
                        <div>
                            <h1>Your cart is empty!</h1>
                            <button>shop now</button>
                        </div>
                    )

                }

            </div>
        </div>
    )
}

export default Cart
