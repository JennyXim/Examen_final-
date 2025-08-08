import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import '../App.css'; 

const Registrar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    genero: '',
    codigoPais: '+593',
    telefono: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, name, value, type } = e.target;
    
    if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    if (formData.contrasena !== formData.confirmarContrasena) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.correo,
        formData.contrasena
      );
      const user = userCredential.user;
      await setDoc(doc(db, 'usuarios', user.uid), {
        uid: user.uid,
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo: formData.correo,
        fechaNacimiento: formData.fechaNacimiento,
        genero: formData.genero,
        telefonoCompleto: `${formData.codigoPais}${formData.telefono}`,
        createdAt: new Date(),
      });
      console.log('Usuario registrado con éxito:', user);
      alert('¡Registro exitoso!');
    } catch (firebaseError) {
      setError(firebaseError.message);
      console.error('Error al registrar:', firebaseError);
    }
  };

  return (
    <main className="form-container">
      <div className="form-card">
        <h2>CREA UNA CUENTA</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" required />
            </div>
          </div>
          
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input type="date" id="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
          
          <label className="form-label">Género</label>
          <div className="form-radio-group">
            <div className="form-check">
              <input 
                type="radio" 
                name="genero" 
                id="mujer" 
                value="Mujer" 
                checked={formData.genero === 'Mujer'} 
                onChange={handleChange} 
              />
              <label htmlFor="mujer">Mujer</label>
            </div>
            <div className="form-check">
              <input 
                type="radio" 
                name="genero" 
                id="hombre" 
                value="Hombre" 
                checked={formData.genero === 'Hombre'} 
                onChange={handleChange} 
              />
              <label htmlFor="hombre">Hombre</label>
            </div>
          </div>
          
          <label htmlFor="telefono">Teléfono</label>
          <div className="input-group">
            <select id="codigoPais" value={formData.codigoPais} onChange={handleChange}>
              <option value="+593">+593 (Ecuador)</option>
              <option value="+52">+52 (México)</option>
              <option value="+51">+51 (Perú)</option>
            </select>
            <input type="tel" id="telefono" value={formData.telefono} onChange={handleChange} placeholder="Número de teléfono" required />
          </div>

          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" id="correo" value={formData.correo} onChange={handleChange} required />
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" value={formData.contrasena} onChange={handleChange} required />
          <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
          <input type="password" id="confirmarContrasena" value={formData.confirmarContrasena} onChange={handleChange} required />
          
          <button type="submit" className="btn-primary">Crear cuenta</button>
        </form>
      </div>
    </main>
  );
};

export default Registrar;