import React, {useState} from 'react'
import './form.css'
//import  { Checkbox }  from "./Checkbox"
//import  { Input }  from "./Input"
import FormInput from './FormInput';

 function Form(){

    //const [value,setValue] = useState('');
    //const [val,setValuePro] = useState('');
    //const [check,setCheck] = useState(true);
    const [values, setValues] = useState({
      domainePro: "",
      activitePro: "",
      
    });

    const inputs = [
      {
        id: 1,
        name: "domainePro",
        type: "text",
        placeholder: "Domaine Informatique",
        label: "Indiquer votre domaine d'activité",
      },
      {
        id: 2,
        name: "activitePro",
        type: "text",
        placeholder: "Consultant informatique",
        label: "Indiquer votre activité professionnelle",
      }]

    /*const toggle = () => {setCheck((o) => !o)
    console.log(check)
    }*/

    const handleSubmit = e => {
      e.preventDefault();
      //console.log(value)
      //console.log("activité pro:",val)
    }
    
    const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value });
    };
  
  console.log(values)
  return (
    <div className='form'>
    <form id="formulaireDomPro" onSubmit={handleSubmit}>
        <h2>Etes vous étudiant ?</h2>
        <div>
            {/*<input type="checkbox" onClick={toggle} name="check"/>*/}
          <input type="radio" id="oui" name="check" value="oui"/>
            <label>Oui</label>
          <input type="radio" id="non" name="check" value="non"/>
            <label>Non</label>
        </div>
        <div>
          {inputs.map((input)=> (
            <FormInput
              key = {input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>  
        <div>
          <button>Suivant</button>
        </div>
    </form>
    </div>
  )
}
export default Form