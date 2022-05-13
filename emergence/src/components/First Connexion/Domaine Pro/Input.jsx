import React from 'react'

export function Input({visible, sv}) {
    let bool = false
    if(!visible) {
        bool = true
    }
  
    return (
    <input type="text" onChange={e => sv(e.target.value)} disabled={bool}  name="activite" id="activite"/>
  )
}
