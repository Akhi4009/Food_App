
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
        const newCartItem = {
            id:'1',
            product,
            product_id:product.id,
            size,
            quantity:1,
        }
        setItems([newCartItem,...items]);
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