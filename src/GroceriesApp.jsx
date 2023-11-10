import  { useState } from 'react';
import InventoryCards from './InventoryCards';
import CartList from './CartList';
import { products } from './products';

const GroceriesApp = () => {
  const [inventory] = useState(products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (product) => {
    const updateCart = cart.filter((cartproduct) => cartproduct.id !== product.id);
    setCart(updateCart);
  };

  const emptyCart= () => {
    setCart([]);

  };
  const total= cart.reduce((total, item) => total + parseFloat(item.price),0)
  
  return (
    <div>
      <h1>Groceries App</h1>
      <InventoryCards products={inventory} addToCart={addToCart} />
      <CartList cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} total={total} />
    </div>
  );
};

export default GroceriesApp;
