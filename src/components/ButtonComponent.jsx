import React from 'react'

export default function ButtonComponent({props}) {
    const {label, bgColor, txtColor, borderRadius} = props;
    return (
    <button
        style={{
            backgroundColor:bgColor,
            color: txtColor,
            borderRadius,
        }}
    >{label}</button>
  )
}
