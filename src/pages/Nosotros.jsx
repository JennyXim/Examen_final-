import React from 'react';

const Nosotros = () => {
  return (
    <main className='nosotrosmain'>
      <div className="container py-5">
        <h1 className="text-center mb-5">¿Quiénes somos?</h1>

        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Somos un emprendimiento en línea dedicado a ofrecer diferentes tipos de postres como ensaladas de frutas, waffles, batidos entre otros con la finalidad de deleitar al cliente.<br /><br />
              Brindamos postres con frutas frescas incentivando al usuario a consumir más postres saludables.
            </p>
          </div>
          <div className="col-md-6 text-center team-photo">
            <img src="/images/img4Nosotros/im1(Nosotros).png" alt="Equipo" className="img-fluid mb-3" style={{maxWidth: '300px', width: '100%'}} />
            <p>Califícanos</p>
            <div className="rating">★ ★ ★ ★ ★</div>
          </div>
        </div>
      </div>

      <div className="seccion-fondo-valores text-black py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h3>VALORES</h3>
              <ul className="list-unstyled">
                <li>• Calidad</li>
                <li>• Salud</li>
                <li>• Innovación</li>
                <li>• Honestidad</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h3>MISIÓN</h3>
              <p>
                Ofrecer una variedad de productos a base de frutas. Comprometiéndonos a utilizar frutas frescas y de alta calidad e incentivando a nuestros clientes al consumo de postres nutritivos y ricos en sabores.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h3>VISIÓN</h3>
              <p>
                Ser reconocidos por quienes buscan disfrutar de antojos saludables sin renunciar al sabor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;