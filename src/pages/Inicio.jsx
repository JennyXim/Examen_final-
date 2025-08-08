import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  const destacados = [
    { img: "/images/img1Inicio/im8(Inicio).png", titulo: "Mini waffle de frutas" },
    { img: "/images/img1Inicio/im9(Inicio).png", titulo: "Helados caseros" },
    { img: "/images/img1Inicio/im10(Inicio).png", titulo: "Batidos" },
    { img: "/images/img1Inicio/im11(Inicio).png", titulo: "Jugos" },
    { img: "/images/img1Inicio/im12(Inicio).jpg", titulo: "Mega ensalada de frutas" },
    { img: "/images/img1Inicio/im13(Inicio).png", titulo: "Frutos secos" },
    { img: "/images/img2Menu/im5(Menu).png", titulo: "Mega waffle de frutas" },
    { img: "/images/img2Menu/im16(Menu).png", titulo: "Yogurt" },
  ];

  return (
    <main className="inicio-container">
      {/* Imagen destacada tipo banner */}
      <section className="bienvenida-section">
        <div className="bienvenida-overlay">
          <h1>BIENVENIDOS <span>(Un plato lleno de color)</span></h1>
          <div className="bienvenida-texto">
            <p><strong>VEN Y DISFRUTA DE NUESTROS POSTRES</strong></p>
            <p><strong>LLENOS DE SABORES</strong></p>
            <p><strong>ENCONTRARÁS UNA INMENSIDAD DE FRUTAS</strong></p>
          </div>
          <Link to="/menu">
            <button className="btn-menu">MENÚ</button>
          </Link>
        </div>
      </section>

      {/* Franja de presentación */}
      <section className="intro-frutas-section">
        <div className="intro-texto">
          <p>
            Bienvenido a todos los amantes de las frutas, entra, mira y descubre un mundo diferente, 
            disfruta de un postre saludable lleno de color, lleno de vida. Sé como las frutas: 
            bellas por fuera y saludables por dentro.
          </p>
        </div>
        <div className="intro-imagen">
          <img src="/images/img1Inicio/im4(Inicio).jpg" alt="Frutas variadas" />
        </div>
      </section>

      {/* Bienestar + imágenes */}
      <section className="bienestar-frutas-completo">
        <div className="bienestar-contenido">
          <img src="/images/img1Inicio/im5(Inicio).png" alt="Frutas verticales" className="frutas-vertical" />
          <div className="bienestar-cuadro-verde">
            <p>
              Alimentando tu bienestar con cada plato, nuestra cocina se inspira en la naturaleza 
              para ofrecerte opciones deliciosas y nutritivas que cuidan de ti y del planeta.
            </p>
          </div>
          <div className="frutas-secundarias">
            <img src="/images/img1Inicio/im6(Inicio).png" alt="Fruta extra 1" />
            <img src="/images/img1Inicio/im7(Inicio).png" alt="Fruta extra 2" />
          </div>
        </div>

        {/* Texto + Lo más destacado */}
        <div className="emprendimiento-destacados">
          <div className="intro-texto">
            <p>
              FrutasMJJ es un emprendimiento en línea de comida que ofrece una variedad de frutas,
              waffles, postres y bebidas.
            </p>
          </div>

          <div className="destacados-section">
            <h2>LO MÁS DESTACADO</h2>
            <div className="destacados-grid">
              {destacados.map((item, index) => (
                <div
                  key={index}
                  className={`destacado-item ${seleccionado === index ? "activo" : ""}`}
                  onClick={() => setSeleccionado(index)}
                >
                  <img src={item.img} alt={item.titulo} />
                  <p><strong>{item.titulo}</strong></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
