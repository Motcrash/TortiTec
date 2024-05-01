import React from 'react'

export default function ButtonComponent({props}) {
    const {text, bgColor, txtColor, borderRadius} = props;
    return (
    <button
        style={{
            backgroundColor:bgColor,
            color: txtColor,
            borderRadius,
        }}
    >{text}</button>
  )
}
