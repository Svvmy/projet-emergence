import React from 'react'
import './formInput.css'

const FormInput = (props) => {
  const {visible, label, onChange, id, ...inputProps} = props
    let bool = false;
	  let value  
    if (visible) {
		    bool = true;
        value=""
        
	    }
  
  return (
    <div className='formInput'>
        <label className='lblForm'>{label}</label>
        <input {...inputProps} onChange={onChange} disabled={bool} value={value} />
    </div>
  )
}
export default FormInput