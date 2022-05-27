import React, {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {
  const[focused, setFocused] = useState(false);
  const {visible ,label, errorMessage ,onChange, id, ...inputProps} = props;
  
  let bool = false;
  if (visible) {
    bool = true;
  }
  
  const handleFocus = (e) => {
    setFocused(true);
  };

    return (
    <div className='formInput'>
        <label className='lblForm'>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused ={focused.toString()} disabled={bool} />
        <span>{errorMessage}</span>
    </div>
      )
    }

export default FormInput

    
  
