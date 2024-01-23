import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage, productCategory } = props.item;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (
        <div className="product">
            <img src={productImage} alt="" />
            <h1 className='product-name'>{productName}</h1>
            <h3 className='product-category'>{productCategory}</h3>
            <h2 className='product-price'>${price}</h2>
            <div className='product-add'>
                <button>Buy now</button>
                <button onClick={() => addToCart(id)}>Add to cart  {cartItemCount > 0 ? `(${cartItemCount})` : ''}</button>
            </div>
        </div>
    );
};

