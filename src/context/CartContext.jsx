import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito    
export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Añadir un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.nombre === product.nombre);
      if (existingItem) {
        // Si el producto ya existe, incrementa la cantidad
        return prevItems.map((item) =>
          item.nombre === product.nombre
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si es un producto nuevo, añádelo con cantidad 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.nombre} ha sido agregado al carrito.`);
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.nombre !== productName)
    );
  };

  // Actualizar la cantidad de un producto
  const updateQuantity = (productName, quantity) => {
    if (quantity <= 0) {
      // Si la cantidad es 0 o menos, elimina el producto
      removeFromCart(productName);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.nombre === productName ? { ...item, quantity } : item
        )
      );
    }
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};