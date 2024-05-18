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
            cursor: 'pointer', 
            transition: 'background-color 0.3s', 
            ':hover': {
                backgroundColor: '#005fa3', 
            }
        }}
    >{text}</button>
  )
}
