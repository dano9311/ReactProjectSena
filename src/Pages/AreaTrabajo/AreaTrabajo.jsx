import React, { useState } from 'react';
import MenuVertical from '../../Components/MenuVertical/MenuVertical';
import Botones from '../../Components/Botones/Botones';
import './AreaTrabajo.css';

const AreaTrabajo = () => {
  const [productos, setProductos] = useState([
    { producto: 'Producto 1', estado: 'Pendiente', cantidad: '10/50', seleccionado: false, priorizado: false, pausado: false, entregado: false },
    { producto: 'Producto 2', estado: 'En progreso', cantidad: '25/50', seleccionado: false, priorizado: false, pausado: false, entregado: false },
  ]);

  const [seleccionarTodo, setSeleccionarTodo] = useState(false);

  const agregarProducto = () => {
    setProductos([...productos, { producto: '', estado: '', cantidad: '', seleccionado: false, priorizado: false, pausado: false, entregado: false }]);
  };

  const manejarCambio = (index, campo, valor) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index][campo] = valor;
    setProductos(nuevosProductos);
  };

  const manejarSeleccionarTodo = () => {
    const nuevoEstadoSeleccionarTodo = !seleccionarTodo;
    setSeleccionarTodo(nuevoEstadoSeleccionarTodo);
    const nuevosProductos = productos.map(producto => ({
      ...producto,
      seleccionado: nuevoEstadoSeleccionarTodo,
    }));
    setProductos(nuevosProductos);
  };

  const manejarSeleccionIndividual = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].seleccionado = !nuevosProductos[index].seleccionado;
    setProductos(nuevosProductos);

    if (nuevosProductos.some(producto => !producto.seleccionado)) {
      setSeleccionarTodo(false);
    }
  };

  const eliminarProductos = () => {
    const productosFiltrados = productos.filter(producto => !producto.seleccionado);
    setProductos(productosFiltrados);
    setSeleccionarTodo(false);
  };

  const priorizarProducto = () => {
    const productosPriorizados = productos.map(producto =>
      producto.seleccionado ? { ...producto, priorizado: !producto.priorizado } : producto
    );
    setProductos(productosPriorizados);
  };

  const pausarProducto = () => {
    const productosPausados = productos.map(producto =>
      producto.seleccionado ? { ...producto, pausado: !producto.pausado } : producto
    );
    setProductos(productosPausados);
  };

  const entregarProducto = () => {
    const productosActualizados = productos.map(producto => {
      if (producto.seleccionado) {
        return { ...producto, entregado: !producto.entregado };
      }
      return producto;
    });

    const productosOrdenados = productosActualizados.filter(producto => !producto.entregado).concat(productosActualizados.filter(producto => producto.entregado));
    setProductos(productosOrdenados);
  };

  return (
    <div className="area-trabajo-container">
      <div className="menu-container">
        <MenuVertical />
      </div>

      <div className="contenido-principal">
        <h2>Área de Trabajo</h2>

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
                </th>
                <th>Producto</th>
                <th>Estado</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: producto.priorizado
                      ? 'rgba(255, 46, 46, 0.42)'
                      : producto.pausado
                      ? 'rgba(71, 71, 71, 0.42)'
                      : producto.entregado
                      ? 'rgba(12, 231, 0, 0.42)'
                      : 'transparent',
                  }}
                >
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
                      value={producto.estado}
                      onChange={(e) => manejarCambio(index, 'estado', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={producto.cantidad}
                      onChange={(e) => manejarCambio(index, 'cantidad', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Botones
          onNuevo={agregarProducto}
          onEliminar={eliminarProductos}
          onPriorizar={priorizarProducto}
          onPausar={pausarProducto}
          onEntregar={entregarProducto}
          mostrarPriorizar={true}
          mostrarPausar={true}
          mostrarEntregar={true}
        />
      </div>
    </div>
  );
};

export default AreaTrabajo;
