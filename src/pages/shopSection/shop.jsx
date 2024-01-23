import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../products'
import './shop.css'
import { ShopContext } from '../../context/shop-context'
import { Product } from './product'

const Shop = () => {
    const [search, setSearch] = useState('')
    const { addToCart, cartItems, filteredProducts } = useContext(ShopContext);
    return (
        <div className='shop'>

            {/* Category */}
            <ul className='categories'>
                {PRODUCTS.map((item) => (
                    <li className='category' key={item.id}>
                        {item.productCategory}
                    </li>
                ))}
            </ul>
            {/* End Category */}

            {/* Products */}
            <div className="products">
                {
                    filteredProducts.map(item => <Product key={item.id} item={item} />)
                }
            </div>
            {/* End Products */}

        </div >
    )
}

export default Shop












// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../../context/shop-context'
// import './product.css'

// const Product = (props) => {
//     const { id, productName, price, productImage, productCategory } = props.data;
//     const { addToCart, cartItems } = useContext(ShopContext);
//     const cartItemCount = cartItems[id];

//     return (
//         <div className='product'>
//             <img src={productImage} alt={productName} />
//             <div className="product-name">
//                 <h2>{productName}</h2>
//                 <h4>Category: {productCategory}</h4>
//             </div>
//             <div className="product-price">
//                 <h2>${price}</h2>
//             </div>
//             <div className='product-add'>
//                 <button onClick={() => addToCart(id)}>Add to Cart {cartItemCount}</button>
//             </div>
//         </div>
//     )
// }

// export default Product



