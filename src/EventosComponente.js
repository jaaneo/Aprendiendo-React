import React from 'react'

export const EventosComponente = () => {
  
  const handleClick = (e, nombre) => {
    alert(nombre+" has dado click al botón")
  }

  const handleDobleClick = (e) => {
    alert(" has dado doble click")
  }

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        {/* Evento click*/}
        <button onClick={ e => handleClick(e, "Alejandro") }>Dame click</button>
      </p>
      <p>
        {/* Evento dobleClick*/}
        <button onDoubleClick={ handleDobleClick }>Dame doble click</button>
      </p>
    </div>
  )
}
