import React from 'react';
import { Link } from 'react-router-dom';  // Importar el componente Link para la navegación
import './MenuVertical.css';

const MenuVertical = () => {
  return (
    <div className="menu-vertical">
    
      {/* Avatar y nombre del usuario */}
      <div className="user-info">
        <Link to="/">
          <div className="avatar"></div>  {/* Avatar clickeable */}
        </Link>
        <h2 className="user-name">Nombre usuario</h2>
      </div>

      {/* Opciones del menú con enlaces de navegación */}
      <div className="menu-options">
        <Link to="/area-trabajo">
          <button>Área de trabajo</button>  {/* Enlace a la página Área de trabajo */}
        </Link>
        <Link to="/calidad">
          <button>Calidad</button>  {/* Enlace a la página Calidad */}
        </Link>
        <Link to="/inventario">
          <button>Inventario</button>  {/* Enlace a la página Inventario */}
        </Link>
        <Link to="/activa-usuario">
          <button>Activa Usuario</button>  {/* Enlace a la página Activa Usuario */}
        </Link>
      </div>

      {/* Información de la empresa */}
      <div className="company-info">
        <p>Información de la empresa</p>
        <p>Nombre</p>
        <p>Teléfono</p>
        <p>Dirección</p>
      </div>
    </div>
  );
};

export default MenuVertical;
