import React from 'react';

const Contactos = () => {
  return (
    <main>
      <section className="contact-section">
        <h2 className="section-title">CONTACTOS</h2>
        <div className="contact-info">
          <p><img src="/images/img3Contactos/im7(Contactos).png" alt="Phone Icon" className="contact-icon" /> Teléfono convencional: 0245852</p>
          <p><img src="/images/img3Contactos/im8(Contactos).png" alt="Cell Icon" className="contact-icon" /> Teléfono celular: 09615726548</p>
          <p><img src="/images/img3Contactos/im9(Contactos).png" alt="Email Icon" className="contact-icon" /> Correo electrónico: frutasmjj@gmail.com</p>
        </div>

        <div className="location-section">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.791447080555!2d-78.49191162444244!3d-0.21029139978763742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses-419!2sec!4v1749176881198!5m2!1ses-419!2sec" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Frutas MJJ">
            </iframe>
          </div>
          <div className="location-details">
            <h3 className="location-title">Ubicación</h3>
            <p className="location-question">¿Cómo encontrarnos?</p>
            <p>Universidad Escuela Politécnica Nacional.</p>
            <p>Edificio 21</p>
            <p>Calle: Ladrón de Guevara</p>
            <p>Referencias: Al lado del CEC</p>
            <h3 className="attention-title">Hora de atención</h3>
            <p>Lunes - Sábado: 08h30/18h30</p>
            <p>Domingo: 10h00/16h00</p>
          </div>
        </div>
      </section>

      <section className="social-media-section">
        <h2>Síguenos en nuestras redes sociales</h2>
        <div className="social-icons">
          <a href="#" className="social-link"><img src="/images/img3Contactos/im3(Contactos).png" alt="Facebook" className="social-icon" /> Frutas MJJ</a>
          <a href="#" className="social-link"><img src="/images/img3Contactos/im4(Contactos).png" alt="Instagram" className="social-icon" /> frutas.mjj.15</a>
          <a href="#" className="social-link"><img src="/images/img3Contactos/im5(Contactos).png" alt="YouTube" className="social-icon" /> Frutas MJJ</a>
          <a href="#" className="social-link"><img src="/images/img3Contactos/im6(Contactos).png" alt="Twitter" className="social-icon" /> frutas.mjj.ec</a>
        </div>
      </section>
    </main>
  );
};

export default Contactos;