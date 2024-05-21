import { createContext, useState } from "react";



export const MyContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {}
    
});


export const CartContext = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            return;
        }
            setCartItems([...cartItems, item]);
        };

    const removeFromCart = (index) => {
        const filtered = cartItems.filter(item => item.id !== index)
        setCartItems(filtered)
    };

    const updateTotal = (cartItems) => {
        let total = 0;
        cartItems.forEach(recipe => total = total + recipe.price)
        return total;
    }
    

    return (
        <MyContext.Provider value={{cartItems, addToCart, removeFromCart, updateTotal}}>
            {children}
        </MyContext.Provider>
    )
}


