import React, { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (productItem) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex(
                (item) => item.id === productItem.id && item.size === productItem.size
            );

            if (existingIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...productItem, quantity: 1 }];
            }
        });
    }
    const removeFromCart = (id, size) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === id && item.size === size))
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext);