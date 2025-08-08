import React, { useState } from 'react';
import ModalProducto from './ModalProducto';

const Menu = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  };

  return (
    <main>

      {/* MENÚ FIJO SUPERIOR */}
      <header className="encabezado2">
        <ul className="menu3">
          <li><a href="#ensaladas">ENSALADAS DE FRUTAS</a></li>
          <li><a href="#waffles">WAFFLES</a></li>
          <li><a href="#bebidas">BEBIDAS</a></li>
          <li><a href="#postres">POSTRES</a></li>
          <li><a href="#complementos">COMPLEMENTOS</a></li>
        </ul>
      </header>

      <h1 className="titulo2">MENÚ</h1>

      <section className="categoria">

        <h2 id="ensaladas">ENSALADAS DE FRUTAS</h2>
        <div className="productos">

          <div className="producto">
            <img src="/images/img2Menu/im2(Menu).jpg" alt="Ensalada grande" />
            <h3>Ensalada de frutas grande</h3>
            <p>
              Acceso a los 20 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $5.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Ensalada de frutas grande",
                  precio: 5.00,
                  imagen: "/images/img2Menu/im2(Menu).jpg",
                  descripcion: "Incluye frutas variadas y complementos opcionales.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im3(Menu).png" alt="Ensalada mediana" />
            <h3>Ensalada de frutas mediana</h3>
            <p>
              Acceso a los 20 tipos de frutas (Solo se puede agregar 10 frutas) <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Ensalada de frutas mediana",
                  precio: 3.00,
                  imagen: "/images/img2Menu/im3(Menu).png",
                  descripcion: "Incluye 10 frutas con complementos opcionales.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im4(Menu).webp" alt="Ensalada pequeña" />
            <h3>Ensalada de frutas pequeña</h3>
            <p>
              Acceso a los 10 tipos de frutas (Solo se puede agregar 5 frutas) <br />
              Disponible: Si <br />
              Precio ---------------------- $1.50 <br />
              Opcional: Salsas - Espumilla
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Ensalada de frutas pequeña",
                  precio: 1.50,
                  imagen: "/images/img2Menu/im4(Menu).webp",
                  descripcion: "Incluye 5 frutas con complementos opcionales.",
                })
              }
            >
              Agregar
            </button>
          </div>

        </div>

        <h2 id="waffles">WAFFLES</h2>
        <div className="productos">

          <div className="producto">
            <img src="/images/img2Menu/im5(Menu).png" alt="Waffle grande" />
            <h3>Waffles con frutas grande</h3>
            <p>
              Acceso a los 20 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $5.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Waffles con frutas grande",
                  precio: 5.00,
                  imagen: "/images/img2Menu/im5(Menu).png",
                  descripcion: "Waffles con frutas variadas y complementos opcionales.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im6(Menu).png" alt="Waffle mediano" />
            <h3>Waffles con frutas mediano</h3>
            <p>
              Acceso a los 20 tipos de frutas (Solo se puede agregar 10 frutas) <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Waffles con frutas mediano",
                  precio: 3.00,
                  imagen: "/images/img2Menu/im6(Menu).png",
                  descripcion: "Waffles con 10 frutas y complementos opcionales.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im7(Menu).png" alt="Waffle pequeño" />
            <h3>Waffles con frutas pequeño</h3>
            <p>
              Acceso a los 10 tipos de frutas (Solo se puede agregar 5 frutas) <br />
              Disponible: Si <br />
              Precio ---------------------- $1.75 <br />
              Opcional: Salsas - Espumilla
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Waffles con frutas pequeño",
                  precio: 1.75,
                  imagen: "/images/img2Menu/im7(Menu).png",
                  descripcion: "Waffles con 5 frutas y complementos opcionales.",
                })
              }
            >
              Agregar
            </button>
          </div>

        </div>

        <h2 id="bebidas">BEBIDAS</h2>
        <div className="productos">

          <div className="producto">
            <img src="/images/img2Menu/im8(Menu).png" alt="Batidos" />
            <h3>Batidos</h3>
            <p>
              Acceso a los 10 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Batidos",
                  precio: 3.00,
                  imagen: "/images/img2Menu/im8(Menu).png",
                  descripcion: "Batidos con frutas variadas y complementos.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im9(Menu).png" alt="Jugos" />
            <h3>Jugos</h3>
            <p>
              Acceso a los 10 tipos de frutas <br />
              Disponible: Si <br />
              Precio ---------------------- $3.00
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Jugos",
                  precio: 3.00,
                  imagen: "/images/img2Menu/im9(Menu).png",
                  descripcion: "Jugos con frutas naturales.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im10(Menu).png" alt="Aguas" />
            <h3>Aguas</h3>
            <p>
              Acceso a los 10 tipos de frutas <br />
              Agua con gas <br />
              Disponible: Si <br />
              Precio ----------------- 0:50 ctv - $ 1:00
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Aguas",
                  precio: 1.00,
                  imagen: "/images/img2Menu/im10(Menu).png",
                  descripcion: "Agua natural y con gas.",
                })
              }
            >
              Agregar
            </button>
          </div>

        </div>

        <h2 id="postres">POSTRES</h2>
        <div className="productos">

          <div className="producto">
            <img src="/images/img2Menu/im11(Menu).png" alt="Gelatinas" />
            <h3>Gelatinas</h3>
            <p>
              3 Tipos de sabores: Limón, Fresa y Uva <br />
              Disponible: Si <br />
              Precio ---------------------- $1.00 <br />
              Opcional: Salsas - Espumilla - Crema
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Gelatinas",
                  precio: 1.00,
                  imagen: "/images/img2Menu/im11(Menu).png",
                  descripcion: "Gelatinas de limón, fresa y uva.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im12(Menu).png" alt="Helados" />
            <h3>Helados caseros</h3>
            <p>
              3 Tipos de sabores: Mora, Fresa y Maracuyá <br />
              Disponible: Si <br />
              Precio ---------------------- $1.00
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Helados caseros",
                  precio: 1.00,
                  imagen: "/images/img2Menu/im12(Menu).png",
                  descripcion: "Helados caseros de Mora, Fresa y Maracuyá.",
                })
              }
            >
              Agregar
            </button>
          </div>

          <div className="producto">
            <img src="/images/img2Menu/im13(Menu).png" alt="Frutos secos" />
            <h3>Frutos secos</h3>
            <p>
              7 Tipos de frutos secos <br />
              Disponible: Si <br />
              Precio ---------------------- $1.50
            </p>
            <button
              className="boton"
              onClick={() =>
                abrirModal({
                  nombre: "Frutos secos",
                  precio: 1.50,
                  imagen: "/images/img2Menu/im13(Menu).png",
                  descripcion: "Mezcla de frutos secos variados.",
                })
              }
            >
              Agregar
            </button>
          </div>

        </div>

        <h2 id="complementos">COMPLEMENTOS</h2>
        <div className="productos2">

          <div className="producto2">
            <div className="header2">
              <span className="nombre2">SALSAS</span>
              <span className="precio2">0:50 ctv</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Mora <br />
                  Piña <br />
                  Fresa <br />
                  Maracuyá
                </p>
                <button
                  className="boton2"
                  onClick={() =>
                    abrirModal({
                      nombre: "Salsas",
                      precio: 0.50,
                      imagen: "/images/img2Menu/im14(Menu).png",
                      descripcion: "Salsas variadas: Mora, Piña, Fresa, Maracuyá.",
                    })
                  }
                >
                  Agregar
                </button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im14(Menu).png" alt="Salsas" />
              </div>
            </div>
          </div>

          <div className="producto2">
            <div className="header2">
              <span className="nombre2">CONFITE</span>
              <span className="precio2">0:50 ctv</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Grajeas <br />
                  Rayado Coco
                </p>
                <button
                  className="boton2"
                  onClick={() =>
                    abrirModal({
                      nombre: "Confite",
                      precio: 0.50,
                      imagen: "/images/img2Menu/im15(Menu).png",
                      descripcion: "Confites: Grajeas y Rayado Coco.",
                    })
                  }
                >
                  Agregar
                </button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im15(Menu).png" alt="Confite" />
              </div>
            </div>
          </div>

          <div className="producto2">
            <div className="header2">
              <span className="nombre2">YOUGURT</span>
              <span className="precio2">$ 1:50</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Fresa <br />
                  Durazno
                </p>
                <button
                  className="boton2"
                  onClick={() =>
                    abrirModal({
                      nombre: "Yogurt",
                      precio: 1.50,
                      imagen: "/images/img2Menu/im16(Menu).png",
                      descripcion: "Yogurt de fresa y durazno.",
                    })
                  }
                >
                  Agregar
                </button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im16(Menu).png" alt="Yogurt" />
              </div>
            </div>
          </div>

        </div>

        <div className="productos2">

          <div className="producto2">
            <div className="header2">
              <span className="nombre2">Espumilla</span>
              <span className="precio2">$ 1:00</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>
                  Fresa <br />
                  Guayaba
                </p>
                <button
                  className="boton2"
                  onClick={() =>
                    abrirModal({
                      nombre: "Espumilla",
                      precio: 1.00,
                      imagen: "/images/img2Menu/im17(Menu).png",
                      descripcion: "Espumilla de fresa y guayaba.",
                    })
                  }
                >
                  Agregar
                </button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im17(Menu).png" alt="Espumilla" />
              </div>
            </div>
          </div>

          <div className="producto2">
            <div className="header2">
              <span className="nombre2">CREMA</span>
              <span className="precio2">$ 1:50</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <p>Vainilla</p>
                <button
                  className="boton2"
                  onClick={() =>
                    abrirModal({
                      nombre: "Crema",
                      precio: 1.50,
                      imagen: "/images/img2Menu/im18(Menu).png",
                      descripcion: "Crema de vainilla.",
                    })
                  }
                >
                  Agregar
                </button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im18(Menu).png" alt="Crema" />
              </div>
            </div>
          </div>

          <div className="producto2">
            <div className="header2">
              <span className="nombre2">CAFÉ</span>
              <span className="precio2">$ 1:50</span>
            </div>
            <div className="contenido2">
              <div className="info">
                <button
                  className="boton2"
                  onClick={() =>
                    abrirModal({
                      nombre: "Café",
                      precio: 1.50,
                      imagen: "/images/img2Menu/im19(Menu).png",
                      descripcion: "Café caliente.",
                    })
                  }
                >
                  Agregar
                </button>
              </div>
              <div className="imagen2">
                <img src="/images/img2Menu/im19(Menu).png" alt="Café" />
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Modal */}
      {mostrarModal && (
        <ModalProducto
          mostrar={mostrarModal}
          cerrarModal={() => setMostrarModal(false)}
          producto={productoSeleccionado}
        />
      )}
    </main>
  );
};

export default Menu;
