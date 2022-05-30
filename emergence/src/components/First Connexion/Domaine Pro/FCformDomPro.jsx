import React, {useState} from 'react'
import './form.css'
//import  { Checkbox }  from "./Checkbox"
//import  { Input }  from "./Input"
import FormInput from './FormInput';
import ChoixRadio from './ChoixRadio'

 function Form(){

    //const [value,setValue] = useState('');
    //const [val,setValuePro] = useState('');
    //const [check,setCheck] = useState(true);
    
    const [valRadio, setValRadio] = useState("")
    
      const [values, setValues] = useState({
      radioBtn:"",
      domainePro: "",
      activitePro: "",
    });

    const inputs = [
      {
        id: 1,
        name: "radioBtn",
        type: "radio",
        placeholder: "",
        errorMessage : "Veuillez renseigner ce champ",
        label: "Oui",
        pattern: "^[A-Za-z]{1,16}$",
        required: true,
      },
      {
        id: 2,
        name: "radioBtn",
        type: "radio",
        placeholder: "",
        errorMessage : "Veuillez renseigner ce champ",
        label: "Non",
        pattern: "^[A-Za-z]{1,16}$",
        required: true,
      },
      {
        id: 3,
        name: "domainePro",
        type: "text",
        placeholder: "Domaine Informatique",
        errorMessage : "Veuillez renseigner ce champ",
        label: "Indiquer votre domaine d'activité(actuel)",
        pattern: "^[A-Za-z]{1,16}$",
        required: true,
      },
      {
        id: 4,
        name: "activitePro",
        type: "text",
        placeholder: "Consultant informatique",
        label: "Indiquer votre activité professionnelle(actuel)",
      }]

      function inputType(input){
        if(input.id === 1){
          return(
              <FormInput
              key = {input.id}
              {...input}
              value={"oui"}
              // onClick={toggle}
              onChange={onChangeRad}
              />
          )
        }else if(input.id === 2){
          return(
              <FormInput
              key = {input.id}
              {...input}
              value={"non"}
              onChange={onChangeRad}
              />
          )
        } else {
          return(
            <FormInput
            key = {input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            />
          )
        }
      
      }

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
    const onChangeRad = (e) => {
      setValRadio(e.target.value);
    
    };
  // const domainePro = values.domainePro

  console.log(values)
  console.log(values.domainePro+" valeur domAct")
  console.log(valRadio +" radio btn")
  return (
    <div className='divPageFormDomPro'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='etudiant'>
        <h2 id='h2'>Êtes vous étudiant ?</h2>
          {/* <div id='radio'>
            <input type="radio" id="oui" name="check" value="oui" onChange={onChangeRad}/>
              <label className='labelradio'>Oui</label>
            <input type="radio" id="non" name="check" value="non"onChange={onChangeRad}/>
              <label className='labelradio'>Non</label>
          </div> */}
        </div>
        <div>
          
          {inputs.map((input)=> (
           inputType(input)
          ))}
        </div>  
        <div className='divBtnSuivant'>
          <ChoixRadio value={valRadio} DomAct={values.domainePro}>
            <button id='btnSuivant'>Suivant</button>
          </ChoixRadio>

        </div>
      </form>
    </div>
  )
}
export default Form