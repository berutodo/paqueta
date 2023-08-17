import { useState, useEffect } from 'react';

interface CartItem {
  quantity: number;
  productId: string;
}

const useCart = () => {
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

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
  };
};

export default useCart;
