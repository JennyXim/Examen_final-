import React from 'react';
import { useCart } from '../context/CartContext';

const ModalProducto = ({ mostrar, cerrarModal, producto }) => {
  const { addToCart } = useCart(); // Obtiene la función del contexto

  if (!mostrar) return null;

  const handleAddToCart = () => {
    addToCart(producto);
    cerrarModal(); // Cierra el modal después de agregar el producto
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="cerrar-btn" onClick={cerrarModal}>X</button>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
        <p><strong>Detalles:</strong> {producto.descripcion}</p>
        <div>
          <button className='comprarboton' onClick={handleAddToCart}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;