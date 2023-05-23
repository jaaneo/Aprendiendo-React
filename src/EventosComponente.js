import React from 'react'

export const EventosComponente = () => {
  
  const handleClick = (e, nombre) => {
    alert(nombre+" has dado click al botón")
  }

  const handleDobleClick = (e) => {
    alert(" has dado doble click")
  }

  const hasEntrado = (e, accion) => {
    console.log(" has "+accion+" entrado a la caja")
  }

  const estasDentro = (e, accion) => {
    console.log("Estás "+accion+" del input, escribe tu nombre!")
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
      {/* Evento onMouseEnter onMouseLeave */}
      <div id="caja"
        onMouseEnter={ e => hasEntrado(e,"entrado") }
        onMouseLeave={ e => hasEntrado(e, "salido") }
      >
        Pasa por encima!!
      </div>

      <p>
        {/* Evento onFocus onBlur */}
        <input type="text"
          onFocus={ e => estasDentro(e, "dentro") } 
          placeholder='Introduce tu nombre...' 
          onBlur={ e => estasDentro(e, "fuera") }
        />
      </p>
    </div>
  )
}
