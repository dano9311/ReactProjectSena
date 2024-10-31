import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuVertical from './Components/MenuVertical/MenuVertical';  // Menú lateral
import LoginForm from './Components/LoginForm/LoginForm';
import AreaTrabajo from './Pages/AreaTrabajo/AreaTrabajo';
import Calidad from './Pages/Calidad/Calidad';  // Importar Calidad
import Inventario from './Pages/Inventario/Inventario';  // Importar Inventario
import ActivaUsuario from './Pages/ActivaUsuario/ActivaUsuario';  // Importar ActivaUsuario

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pantalla de login sin menú */}
        <Route path="/" element={<LoginForm />} />

        {/* Rutas protegidas (con menú lateral) */}
        <Route
          path="/area-trabajo"
          element={
            <div style={{ display: 'flex', height: '100vh' }}>
              <MenuVertical />  {/* Menú lateral */}
              <div style={{ width: '80%' }}>
                <AreaTrabajo />  {/* Contenido de la pantalla "Area de trabajo" */}
              </div>
            </div>
          }
        />

        <Route
          path="/calidad"
          element={
            <div style={{ display: 'flex', height: '100vh' }}>
              <MenuVertical />  {/* Menú lateral */}
              <div style={{ width: '80%' }}>
                <Calidad />  {/* Contenido de la pantalla "Calidad" */}
              </div>
            </div>
          }
        />

        {/* Nueva ruta para la pantalla de Inventario */}
        <Route
          path="/inventario"
          element={
            <div style={{ display: 'flex', height: '100vh' }}>
              <MenuVertical />  {/* Menú lateral */}
              <div style={{ width: '80%' }}>
                <Inventario />  {/* Contenido de la pantalla "Inventario" */}
              </div>
            </div>
          }
        />

        {/* Nueva ruta para la pantalla de ActivaUsuario */}
        <Route
          path="/activa-usuario"
          element={
            <div style={{ display: 'flex', height: '100vh' }}>
              <MenuVertical />  {/* Menú lateral */}
              <div style={{ width: '80%' }}>
                <ActivaUsuario />  {/* Contenido de la pantalla "ActivaUsuario" */}
              </div>
            </div>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
