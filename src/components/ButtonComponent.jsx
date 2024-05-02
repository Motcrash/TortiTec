import React from 'react'

export default function ButtonComponent(props) {
    const {text, bgColor, txtColor, borderRadius, height, width} = props;
    return (
    <button
        style={{
            backgroundColor:bgColor,
            color: txtColor,
            borderRadius,
            height,
            width,
            border: 0
        }}
    >{text}</button>
  )
}
