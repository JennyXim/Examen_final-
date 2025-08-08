import React from 'react';
import NavButton from './NavButton';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="encabezado">
      <div className="titulo">
        <h1>FRUTAS</h1>
        <h1>MJJ</h1>
      </div>
      <ul className="menu1">
        <NavButton to="/" text="INICIO" />
        <NavButton to="/menu" text="ORDENAR" />
        <NavButton to="/contactos" text="CONTACTOS" />
        <NavButton to="/nosotros" text="NOSOTROS" />
      </ul>
      <ul className="menu2">
        <NavButton to="/ingresar" text="INGRESAR" />
        <NavButton to="/registrar" text="REGISTRARSE" />
        <NavButton to="/perfil" text="PERFIL" />
        <li>
          <Link to="/carrito" className="nav-link">
            CARRITO {cartItemCount > 0 && `(${cartItemCount})`}
          </Link>
        </li>
      </ul>
      <img className="im" src="/images/img1Inicio/im14(Inicio).png" alt="Carrito" />
    </header>
  );
};

export default Header;