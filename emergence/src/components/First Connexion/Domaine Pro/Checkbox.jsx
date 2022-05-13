import React from 'react'
 

export function Checkbox({visible, children}) {
  let className = "check"
  if(!visible) {
      className = "unCheck"
  }
    return (
    <div className={className}>{children}</div>
  )
}