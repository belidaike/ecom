import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //filter
    const [search, setSearch] = useState('')
    const filteredProducts = PRODUCTS.filter(item => {
        return (
            item.productName.toLowerCase().includes(search.toLowerCase()) ||
            item.productCategory.toLowerCase().includes(search.toLowerCase())
        )
    })
    const handleChange = e => {
        setSearch(e.target.value)
    }

    //end filter

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId] + 1
            }
        ))
    }
    const removeAll = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId] = 0
            }
        ))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId] - 1
            }
        ))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        removeAll,
        search,
        filteredProducts,
        setSearch,
        handleChange,
    };
    console.log(cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};