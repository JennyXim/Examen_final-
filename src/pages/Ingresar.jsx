import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../App.css'; 
import { useNavigate, Link } from 'react-router-dom';

const Ingresar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso!');
      alert('¡Bienvenido!');
      navigate('/'); 
    } catch (firebaseError) {
      setError(firebaseError.message);
      console.error('Error al iniciar sesión:', firebaseError);
    }
  };

  return (
    <main className="form-container">
      <div className="form-card">
        <h2>INICIAR SESIÓN</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
          <button type="submit" className="btn-primary">Acceder</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        
        <Link to="/registrar" className="link-secondary">Crear cuenta</Link>

      </div>
    </main>
  );
};

export default Ingresar;