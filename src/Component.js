import React, { useState } from 'react'

export default function Component() {

    // Constante que se usan para utilizar el (useState) estados a un componenete, el cual consta de un array con dos elementos: El estado actua y La función set. Se inicializa el useState(''), para no generar errores.
    const [text, setText] = useState('');
    const [update, setUpdate] = useState('');

    // Creamos las funciones del set, te permite actualizar el estado a un valor diferente y desencadenar un nuevo renderizado.
    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const buttonOnClick = () => {
        setUpdate(text)
    }

  return (
    <div>
        {/* En el input el value tiene la variable "text" y utilizamos la funcion onChange para escuchar los cambios en el cual se ejecuta la funcion set "textOnChange" */}
        <input type="text" value={text} onChange={textOnChange}/>

        {/* En el button colocamos la funcion onClic para poder generar los cambios, en el cual se ejecuta la funcion set "buttonOnClick" */}
        <button onClick={buttonOnClick}>Actualizar</button>

        {/* En la P vamos a interpolar el texto que se escribio en el input gracias al (onChanger) */}
        <p>Texto input: <b> {text} </b> </p>
        <p>Texto Actualizado: <u> {update} </u></p>
    </div>
  )
}
