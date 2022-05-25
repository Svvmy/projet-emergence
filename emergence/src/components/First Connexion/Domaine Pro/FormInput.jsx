import React from 'react'
import './formInput.css'

const FormInput = (props) => {
  const {visible, label, onChange, id, ...inputProps} = props
    let bool = false;
	    if (visible) {
		    bool = true;
	    }
  
  return (
    <div className='formInput'>
        <label className='lblForm'>{label}</label>
        <input {...inputProps} onChange={onChange} disabled={bool} />
    </div>
  )
}
export default FormInput