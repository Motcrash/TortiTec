import React from 'react'

export default function ButtonComponent(props) {
    const {text, bgColor, txtColor, borderRadius, height, width, margin, onclick} = props;
    return (
       
    <button
        onClick={onclick}
        style={{
            backgroundColor:bgColor,
            color: txtColor,
            borderRadius,
            height,
            width,
            border: 0,
            margin,
            border: 0,
            margin,
            cursor: 'pointer', // Cambia el cursor a un puntero
            transition: 'background-color 0.3s', // Agrega transición al cambio de color de fondo
            // Reglas CSS para el estado de hover
            ':hover': {
                backgroundColor: '#005fa3', // Cambia el color de fondo al pasar el mouse sobre el botón
            }
        }}
    >{text}</button>
  )
}
