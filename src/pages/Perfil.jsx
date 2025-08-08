import React, { useState } from 'react'; // Importa useState

const Perfil = () => {
    const [activeSection, setActiveSection] = useState('perfil');

    const handleClick = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'perfil':
                return (

                    <div className="content-perfil">
                        <div className="titleci">
                            <h1>Perfil</h1>
                        </div>
                        <div className="datos">
                            <div className="content-datos">
                                <div className="row">
                                    <p>MIS DATOS</p>
                                    <p>Nombre: </p>
                                    <p>Apellido: </p>
                                    <p>Edad: </p>
                                </div>
                            </div>
                            <div className="blockizqfoto">
                                <img src="https://static.vecteezy.com/system/resources/previews/005/544/770/original/profile-icon-design-free-vector.jpg" alt="IconoPerfil" />
                            </div>
                        </div>
                    </div>

                );
        
           
            case 'informacionPago':
                return (
                    <div className="content-informacion-pago">
                        <div className="titleci">
                            <h1>Información de Pago</h1>
                        </div>
                        <div className="row">
                            <p>Los métodos de pago son en efectivo y trasnferencias.</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>Banco Pichincha</p>
                            <p></p>
                            <p>Número de cuenta: 201256264460</p>
                            <p></p>
                            <p>Nombre: Jennyfer Guayanay</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>Un gusto servirle.</p>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };
    /* boton de eliminar cuenta*/
    const handleDeleteAccount = () => {
        const isConfirmed = window.confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.");

        if (isConfirmed) {
            alert("¡Cuenta eliminada (simulado)!");
        } else {
            console.log("Eliminación de cuenta cancelada.");
        }
    };

    return (
        <main>
            <div className="container-principal">
                <div className="container-der">
                    <div className="titlecd">
                        <h1>Configuración de la cuenta</h1>
                    </div>
                    <div className="row">
                        <p></p>
                        <p onClick={() => handleClick('perfil')} className={activeSection === 'perfil' ? 'active' : ''}>PERFIL</p>
                        <p></p>
                        <p>GENERAL</p>
                        <p></p>
                        <p>Notificaciones por correo.</p>
                        <p></p>
                        <p></p>
                        <p>COMPRAS</p>
                        <p></p>
                        <p onClick={() => handleClick('informacionPago')} className={activeSection === 'informacionPago' ? 'active' : ''}>Información de pago</p> {/* Corregí el nombre de la sección*/}
                        <p></p>
                        <p></p>
                    </div>
                    <div className="btn-eliminar">
                        <button className={"btn-el"} onClick={handleDeleteAccount}>Eliminar mi cuenta</button>
                    </div>
                </div>

                <div className="container-izq">
                    <div className="blockder">
                        {renderContent()}
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Perfil;