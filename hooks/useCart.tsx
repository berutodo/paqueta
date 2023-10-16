import { useState, useEffect, createContext, useContext } from 'react';

interface CartItem {
  quantity: number;
  productId: string;
}
interface CartContextType {
  cart: CartItem[];
  addItemToCart: (productId: string, quantity: number) => void;
  removeItemFromCart: (productId: string) => void;
}
const CartContext = createContext<CartContextType>({
  cart: [],
  addItemToCart: (productId: string, quantity: number) => {},
  removeItemFromCart: (productId: string) => {},
});

function useCart(){
  return useContext(CartContext)
}

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartJSON = localStorage.getItem('cart');
    const storedCart: CartItem[] = storedCartJSON ? JSON.parse(storedCartJSON) : [];
    setCart(storedCart);
  }, []);

  const addItemToCart = (productId: string, quantity: number) => {
    const newItem: CartItem = { productId, quantity };
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItemFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default useCart;
