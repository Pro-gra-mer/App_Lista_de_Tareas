import React, { useState, useEffect } from "react";
import { TareaFormulario } from "./TareaFormulario";
import "../css/listaDeTareas.css";
import { Tarea } from "./Tarea";

export const ListaDeTareas = () => {
  const initialList = () => {
    const localStorageList = localStorage.getItem("tareas"); // Obtenemos la lista de local
    return localStorageList ? JSON.parse(localStorageList) : [];
    // Si tiene algo lo convertimos a string, si no, su valor inicial es un arreglo vacío
  };
  const [tareas, setTareas] = useState(initialList);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas)); // lista de tareas persistente
  }, [tareas]);

  const agregarTarea = (tarea) => {
    // Comprobamos que no se agregue vacía la tarea
    if (tarea.texto.trim()) {
      // .trim() quita espacios al principio y al final
      tarea.texto = tarea.texto.trim();
      // Agregamos la tarea al principio del arreglo
      setTareas([tarea, ...tareas]);
    }
  };

  const eliminarTarea = (id) => {
    // Filtra las tareas cuyo id es diferente al seleccionado
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        // Cambia la propiedad booleana al contrari de cómo está.
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      {/* onSubmit es la prop pasada desde el componente TareaFormulario */}
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};
