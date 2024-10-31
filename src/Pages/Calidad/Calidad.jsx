import React, { useState } from 'react';
import MenuVertical from '../../Components/MenuVertical/MenuVertical';
import Botones from '../../Components/Botones/Botones'; // Importar los botones ya estructurados
import './Calidad.css';

const Calidad = () => {
  // Estado para manejar los informes de la tabla
  const [informes, setInformes] = useState([
    { informe: 'Informe 1', autor: 'Autor 1', seleccionado: false },
    { informe: 'Informe 2', autor: 'Autor 2', seleccionado: false },
  ]);

  const [seleccionarTodo, setSeleccionarTodo] = useState(false);

  // Función para añadir un nuevo informe
  const agregarInforme = () => {
    setInformes([...informes, { informe: '', autor: '', seleccionado: false }]);
  };

  // Función para manejar los cambios en los inputs de las filas
  const manejarCambio = (index, campo, valor) => {
    const nuevosInformes = [...informes];
    nuevosInformes[index][campo] = valor;
    setInformes(nuevosInformes);
  };

  // Función para manejar la selección/deselección de todos los informes
  const manejarSeleccionarTodo = () => {
    const nuevoEstadoSeleccionarTodo = !seleccionarTodo;
    setSeleccionarTodo(nuevoEstadoSeleccionarTodo);
    const nuevosInformes = informes.map(informe => ({
      ...informe,
      seleccionado: nuevoEstadoSeleccionarTodo,
    }));
    setInformes(nuevosInformes);
  };

  // Función para manejar la selección individual de un informe
  const manejarSeleccionIndividual = (index) => {
    const nuevosInformes = [...informes];
    nuevosInformes[index].seleccionado = !nuevosInformes[index].seleccionado;
    setInformes(nuevosInformes);

    // Si alguno no está seleccionado, desmarcamos el seleccionar todo
    if (nuevosInformes.some(informe => !informe.seleccionado)) {
      setSeleccionarTodo(false);
    }
  };

  // Función para eliminar informes seleccionados
  const eliminarInformes = () => {
    const informesFiltrados = informes.filter(informe => !informe.seleccionado);
    setInformes(informesFiltrados);
    setSeleccionarTodo(false); // Reiniciamos el estado de seleccionar todo
  };

  return (
    <div className="calidad-container">
      {/* Contenedor del menú */}
      <div className="menu-container">
        <MenuVertical />
      </div>

      {/* Contenedor principal */}
      <div className="contenido-principal">
        <h2>Calidad</h2>

        {/* Contenedor de la tabla */}
        <div className="tabla-contenedor">
          <table className="tabla-informes">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={seleccionarTodo}
                    onChange={manejarSeleccionarTodo}
                  />
                </th> {/* Checkbox para seleccionar todo */}
                <th>Informe</th>
                <th>Autor</th>
              </tr>
            </thead>
            <tbody>
              {informes.map((informe, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={informe.seleccionado}
                      onChange={() => manejarSeleccionIndividual(index)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={informe.informe}
                      onChange={(e) => manejarCambio(index, 'informe', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={informe.autor}
                      onChange={(e) => manejarCambio(index, 'autor', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contenedor de los botones */}
        <div className="botones-contenedor">
          <Botones
            onNuevo={agregarInforme} // Cambiamos el nombre de la prop a onNuevo
            onEliminar={eliminarInformes} // Cambiamos el nombre de la prop a onEliminar
            soloBotones={['nuevo', 'eliminar']} // Se especifica solo los botones que deben renderizarse
          />
        </div>
      </div>
    </div>
  );
};

export default Calidad;
