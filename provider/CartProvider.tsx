
import { CartItem, Product } from "@/types";
import { createContext, ReactNode, useContext, useState} from "react";

type CartType = {
items:CartItem[],
addItem:(product:Product, size: CartItem['size']) => void;
}

const CartContext = createContext<CartType>({
    items:[],
    addItem:() => {}
});

const CartProvider = ({children}:{children:ReactNode}) => {

    const [items, setItems] = useState<CartItem[]>([])

    const addItem = (product:Product, size: CartItem['size']) => {
        console.log(product);
    }
    return(
        <CartContext.Provider 
        value={{items, addItem }}
        >
        {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
export default CartProvider;