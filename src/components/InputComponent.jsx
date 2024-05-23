import React from 'react'
import '../styles/inputComponentStyle.css'

export default function InputComponent({height, width, type, hasLabel, text, Placeholder, onChange}) {
  return (
    <div className='inputContainer'>
        {/* Tiene o no un label */}
        {
          hasLabel ?
            <label className='lbl'>{text}</label>
          : <></>
        }
        <input className='ipt' type = {type}
          placeholder={Placeholder}
          onChange={onChange}
          style={{
            border: '2px solid #ccc',
            height,
            width,
            marginTop: 10,
            marginBottom: 10,
            
          }}
        />
    </div>
  )
}
