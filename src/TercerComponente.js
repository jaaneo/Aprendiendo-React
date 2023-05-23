import React from 'react'
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre, apellidos, ficha}) => {
  return (
    <div>
      <h1>Comunicación entre componentes</h1>
      <ul>
        <li>{nombre}</li>
        <li>{apellidos}</li>
        <li>{ficha.altura}</li>
        <li>{ficha.estado}</li>
        <li>{ficha.grupo}</li>
        <li>{ficha.alergias}</li>
      </ul>
    </div>
  )
}

TercerComponente.propTypes = {
  nombre: PropTypes.string,
  apellidos: PropTypes.string,
  ficha: PropTypes.object
}

TercerComponente.defaultProps = {
  nombre: "John",
  apellidos: "Doe",
}
export default TercerComponente;