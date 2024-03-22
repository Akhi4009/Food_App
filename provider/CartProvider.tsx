
import { createContext, ReactNode} from "react";

export const CartContext = createContext({});

const CartProvider = ({children}:{children:ReactNode}) => {
    return(
        <CartContext.Provider 
        value={{items:[], onAddItems:() => {} }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;