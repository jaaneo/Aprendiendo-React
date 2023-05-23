// Importar modulos de react / dependencias
import React from "react";

//Función del componente
const MiComponente = () => {

  const nombre = "Alejandro";
  const web = "www.dmtsmarthome.cl";

  let usuario = {
    edad: 35,
    nombre: "Alejandro",
    apellidos: "Sáez Méndez"
  };

  return (
    <div className="mi-componente">
      <h2>Componente creado</h2>
      <h3>Datos del usuario:</h3>
      <ul>
        <li>Nombre: <strong>{usuario.nombre}</strong></li>
        <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
        <li>Sitio web: <strong>{web}</strong></li>
      </ul>
      <p>Este es mi primer componente</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </div>
  )
};

//Exportamos
export default MiComponente;