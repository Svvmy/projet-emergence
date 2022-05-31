import React, {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {  
  const[focused, setFocused] = useState(false);
  const {spe,visible ,label, errorMessage ,onChange, id, ...inputProps} = props;
  let bool = false;
  // let value
  if (visible) {
    bool = true;
    // value=""
  }
  
  const handleFocus = (e) => {
    setFocused(true);
  };

  if(spe=== "select") {
    console.log(spe)
    return (
      <div className='formInput'>
          <label className='lblForm'>{label}</label>
          <select {...inputProps} onChange={onChange} onBlur={handleFocus} focused ={focused.toString()} disabled={bool}>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
            <option value="Stage">Stage</option>
            <option value="Saisonier">Emplois saisonier</option>
            <option value="Alternance">Alternance</option>
          </select> 
          <span>{errorMessage}</span>
      </div>
        )
  }else if(spe=== "textarea"){
    return (
      <div className='formInput'>
            <label className='lblForm'>{label}</label>
            <textarea {...inputProps} onChange={onChange} onBlur={handleFocus} focused ={focused.toString()} disabled={bool} />
            <span>{errorMessage}</span>
      </div>
          )
  }else{
    return (
      <div className='formInput'>
            <label className='lblForm'>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused ={focused.toString()} disabled={bool} />
            <span>{errorMessage}</span>
      </div>
      )
  }
  
}

export default FormInput

    
  
