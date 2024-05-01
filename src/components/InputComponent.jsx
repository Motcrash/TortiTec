import React from 'react'
import '../styles/inputComponentStyle.css'

export default function InputComponent({height, width, type, hasLabel, textLabel}) {
  return (
    <div className='inputContainer'>
        {/* Tiene o no un label */}
        {
          hasLabel ?
            <label className='lbl'>{textLabel}</label>
          : <></>
        }
        <input className='ipt' type = {type}
          style={{
            border: '2px solid #ccc',
            height,
            width,
            marginTop: 10,
            marginBottom: 10
          }}
        />
    </div>
  )
}
