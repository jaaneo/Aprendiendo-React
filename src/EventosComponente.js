import React from 'react'

export const EventosComponente = () => {
  
  const handleClick = (e, nombre) => {
    alert(nombre+" has dado click al botón")
  }

  return (
    <div>
      <h1>Eventos en React</h1>
      {/* Evebti click*/}
      <button onClick={ e => handleClick(e, "Alejandro") }>Dame click</button>
    </div>
  )
}
