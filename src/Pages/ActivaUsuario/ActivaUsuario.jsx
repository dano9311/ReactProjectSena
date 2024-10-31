import React, { useState } from 'react';
import MenuVertical from '../../Components/MenuVertical/MenuVertical';
import Botones from '../../Components/Botones/Botones'; // Importar los botones ya estructurados
import './ActivaUsuario.css';

const ActivaUsuario = () => {
  // Estado para manejar los usuarios de la tabla
  const [usuarios, setUsuarios] = useState([
    { usuario: 'Usuario 1', estado: 'Activo', rol: 'Administrador', seleccionado: false },
    { usuario: 'Usuario 2', estado: 'Inactivo', rol: 'Operario', seleccionado: false },
  ]);

  const [seleccionarTodo, setSeleccionarTodo] = useState(false);

  // Función para añadir un nuevo usuario
  const agregarUsuario = () => {
    setUsuarios([...usuarios, { usuario: '', estado: 'Activo', rol: 'Operario', seleccionado: false }]);
  };

  // Función para manejar los cambios en los inputs de las filas
  const manejarCambio = (index, campo, valor) => {
    const nuevosUsuarios = [...usuarios];
    nuevosUsuarios[index][campo] = valor;
    setUsuarios(nuevosUsuarios);
  };

  // Función para manejar la selección/deselección de todos los usuarios
  const manejarSeleccionarTodo = () => {
    const nuevoEstadoSeleccionarTodo = !seleccionarTodo;
    setSeleccionarTodo(nuevoEstadoSeleccionarTodo);
    const nuevosUsuarios = usuarios.map(usuario => ({
      ...usuario,
      seleccionado: nuevoEstadoSeleccionarTodo,
    }));
    setUsuarios(nuevosUsuarios);
  };

  // Función para manejar la selección individual de un usuario
  const manejarSeleccionIndividual = (index) => {
    const nuevosUsuarios = [...usuarios];
    nuevosUsuarios[index].seleccionado = !nuevosUsuarios[index].seleccionado;
    setUsuarios(nuevosUsuarios);

    // Si alguno no está seleccionado, desmarcamos el seleccionar todo
    if (nuevosUsuarios.some(usuario => !usuario.seleccionado)) {
      setSeleccionarTodo(false);
    }
  };

  // Función para eliminar usuarios seleccionados
  const eliminarUsuarios = () => {
    const usuariosFiltrados = usuarios.filter(usuario => !usuario.seleccionado);
    setUsuarios(usuariosFiltrados);
    setSeleccionarTodo(false); // Reiniciamos el estado de seleccionar todo
  };

  return (
    <div className="activausuario-container">
      {/* Contenedor del menú */}
      <div className="menu-container">
        <MenuVertical />
      </div>

      {/* Contenedor principal */}
      <div className="contenido-principal">
        <h2>Gestionar Usuarios</h2>

        {/* Contenedor de la tabla */}
        <div className="tabla-contenedor">
          <table className="tabla-usuarios">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={seleccionarTodo}
                    onChange={manejarSeleccionarTodo}
                  />
                </th> {/* Checkbox para seleccionar todo */}
                <th>Usuario</th>
                <th>Estado</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={usuario.seleccionado}
                      onChange={() => manejarSeleccionIndividual(index)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={usuario.usuario}
                      onChange={(e) => manejarCambio(index, 'usuario', e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      value={usuario.estado}
                      onChange={(e) => manejarCambio(index, 'estado', e.target.value)}
                    >
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={usuario.rol}
                      onChange={(e) => manejarCambio(index, 'rol', e.target.value)}
                    >
                      <option value="Administrador">Administrador</option>
                      <option value="Calidad">Calidad</option>
                      <option value="Operario">Operario</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contenedor de los botones */}
        <div className="botones-contenedor">
          <Botones
            onNuevo={agregarUsuario} // Asigna la función de agregar
            onEliminar={eliminarUsuarios} // Asigna la función de eliminar
            soloBotones={['nuevo', 'eliminar']} // Se especifica solo los botones que deben renderizarse
          />
        </div>
      </div>
    </div>
  );
};

export default ActivaUsuario;
