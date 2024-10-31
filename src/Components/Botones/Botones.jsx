import React from 'react';
import './Botones.css';

const Botones = ({ onNuevo, onEliminar, onPriorizar, onPausar, onEntregar, mostrarPriorizar, mostrarPausar, mostrarEntregar }) => {
  return (
    <div className="botones-contenedor">
      <button onClick={onNuevo}>Nuevo</button>  {/* Ahora ejecuta correctamente la función onNuevo */}
      <button onClick={onEliminar}>Eliminar</button>  {/* Ahora ejecuta correctamente la función onEliminar */}
      {mostrarEntregar && <button onClick={onEntregar}>Entregar</button>}
      {mostrarPausar && <button onClick={onPausar}>Pausar</button>}
      {mostrarPriorizar && <button onClick={onPriorizar}>Priorizar</button>}
    </div>
  );
};

export default Botones;

