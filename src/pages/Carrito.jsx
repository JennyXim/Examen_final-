import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  // Función para manejar el proceso de pago
  const handleCheckout = () => {
    alert('¡Su pago se realizó con éxito!'); // Muestra el mensaje de éxito
    clearCart(); // Limpia el carrito
  };

  return (
    <main className="carrito-container">
      <section className="carrito-cuadro">
        <h2>MI CARRITO</h2>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p>Tu carrito está vacío.</p>
            <Link to="/menu" className="btn btn-primary">
              Ir al Menú
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.nombre} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <img src={item.imagen} alt={item.nombre} style={{ width: '100px', marginRight: '15px' }} />
                  <div>
                    <h5>{item.nombre}</h5>
                    <p>${item.precio.toFixed(2)}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-secondary btn-sm" onClick={() => updateQuantity(item.nombre, item.quantity - 1)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => updateQuantity(item.nombre, item.quantity + 1)}>+</button>
                  <button className="btn btn-danger btn-sm ms-3" onClick={() => removeFromCart(item.nombre)}>Eliminar</button>
                </div>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Total:</h4>
              <h4>${getTotalPrice()}</h4>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-danger me-2" onClick={clearCart}>
                Limpiar Carrito
              </button>
              {/* Se añade la función handleCheckout al botón */}
              <button className="btn btn-success" onClick={handleCheckout}>
                Proceder al Pago
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Carrito;