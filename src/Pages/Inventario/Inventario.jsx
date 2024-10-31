import React, { useState } from 'react';
import MenuVertical from '../../Components/MenuVertical/MenuVertical';
import Botones from '../../Components/Botones/Botones'; // Importar los botones ya estructurados
import './Inventario.css';

const Inventario = () => {
  // Estado para manejar los productos de la tabla
  const [productos, setProductos] = useState([
    { producto: 'Producto 1', proveedor: 'Proveedor 1', seleccionado: false },
    { producto: 'Producto 2', proveedor: 'Proveedor 2', seleccionado: false },
  ]);

  const [seleccionarTodo, setSeleccionarTodo] = useState(false);

  // Función para añadir un nuevo producto
  const agregarProducto = () => {
    setProductos([...productos, { producto: '', proveedor: '', seleccionado: false }]);
  };

  // Función para manejar los cambios en los inputs de las filas
  const manejarCambio = (index, campo, valor) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index][campo] = valor;
    setProductos(nuevosProductos);
  };

  // Función para manejar la selección/deselección de todos los productos
  const manejarSeleccionarTodo = () => {
    const nuevoEstadoSeleccionarTodo = !seleccionarTodo;
    setSeleccionarTodo(nuevoEstadoSeleccionarTodo);
    const nuevosProductos = productos.map(producto => ({
      ...producto,
      seleccionado: nuevoEstadoSeleccionarTodo,
    }));
    setProductos(nuevosProductos);
  };

  // Función para manejar la selección individual de un producto
  const manejarSeleccionIndividual = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].seleccionado = !nuevosProductos[index].seleccionado;
    setProductos(nuevosProductos);

    // Si alguno no está seleccionado, desmarcamos el seleccionar todo
    if (nuevosProductos.some(producto => !producto.seleccionado)) {
      setSeleccionarTodo(false);
    }
  };

  // Función para eliminar productos seleccionados
  const eliminarProductos = () => {
    const productosFiltrados = productos.filter(producto => !producto.seleccionado);
    setProductos(productosFiltrados);
    setSeleccionarTodo(false); // Reiniciamos el estado de seleccionar todo
  };

  return (
    <div className="inventario-container">
      {/* Contenedor del menú */}
      <div className="menu-container">
        <MenuVertical />
      </div>

      {/* Contenedor principal */}
      <div className="contenido-principal">
        <h2>Inventario</h2>

        {/* Contenedor de la tabla */}
        <div className="tabla-contenedor">
          <table className="tabla-productos">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={seleccionarTodo}
                    onChange={manejarSeleccionarTodo}
                  />
                </th> {/* Checkbox para seleccionar todo */}
                <th>Producto</th>
                <th>Proveedor</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={producto.seleccionado}
                      onChange={() => manejarSeleccionIndividual(index)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={producto.producto}
                      onChange={(e) => manejarCambio(index, 'producto', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={producto.proveedor}
                      onChange={(e) => manejarCambio(index, 'proveedor', e.target.value)}
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
            onNuevo={agregarProducto}
            onEliminar={eliminarProductos}
            mostrarPriorizar={false}
            mostrarPausar={false}
            mostrarEntregar={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Inventario;
