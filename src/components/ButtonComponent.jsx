import React from 'react'
import { Link } from 'react-router-dom';

export default function ButtonComponent(props) {
    const {text, bgColor, txtColor, borderRadius, height, width, margin} = props;
    return (
       
    <button
        style={{
            backgroundColor:bgColor,
            color: txtColor,
            borderRadius,
            height,
            width,
            border: 0,
            margin,
        }}
    >{text}</button>
  )
}
