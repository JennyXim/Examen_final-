import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="frase">
          <strong>Se come las frutas</strong><br />
          <strong>Bellas por fuera,</strong><br />
          <strong>saludables por dentro</strong>
        </p>
        <p className="siguenos">SÍGUENOS EN</p>
        <div className="redes-sociales">
          <a href="#"><img src="/images/img1Inicio/im15(Inicio).png" alt="Facebook" /></a>
          <a href="#"><img src="/images/img1Inicio/im16(Inicio).png" alt="Instagram" /></a>
          <a href="#"><img src="/images/img1Inicio/im17(Inicio).png" alt="YouTube" /></a>
          <a href="#"><img src="/images/img1Inicio/im18(Inicio).png" alt="Twitter" /></a>
        </div>
      </div>

      <div className="footer-center">
        <h4>CONTACTOS</h4>
        <p>Celular: 0979951250</p>
        <p>
          Dirección: Av. Ladrón de Guevara<br />E 11-253, Quito 170143 -
          Edificio 21
        </p>
        <p>Correo: FrutasMJJ@gmail.com</p>
        <p>Horarios: Lunes a Viernes de 8:00 am a 8:00 pm</p>
      </div>

      <div className="footer-right">
        <img src="/images/img1Inicio/im1(Inicio).png" alt="Logo Frutas" />
      </div>
    </footer>
  );
};

export default Footer;