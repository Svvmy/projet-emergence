import React, {useState} from 'react'
import './form.css'
import  { Checkbox }  from "./Checkbox"
import  { Input }  from "./Input"

 function Form(){
    

    const [value,setValue] = useState('');
    const [val,setValuePro] = useState('');
    const [check,setCheck] = useState(true);

    const toggle = () => {setCheck((o) => !o)
    console.log(check)
    }

    const handleSubmit = e => {
      e.preventDefault();
      console.log(value)
      console.log("activité pro:",val)
    }
    
  
  
  return (
    
    <div>
    <form id="formulaireDomPro" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Etes vous étudiant ?</legend>
        <div>
            {/*<input type="checkbox" onClick={toggle} name="check"/>*/}
          <input type="radio" id="oui" name="check" value="oui"/>
            <label for="oui">Oui</label>
            
          <input type="radio" id="non" name="check" value="non" checked/>
            <label for="non">Non</label>
        </div>
        <div>
        <input type="checkbox" onClick={toggle} name="check"/>
          <Checkbox visible={check}>
            <label id="label1" for="text1">Indiquer votre domaine d'activité</label><br/>
              {/*<input type="text" onChange={e => setValue(e.target.value)} disabled = {false}  name="activite" id="activite"/><br/>*/}
                <Input visible={check} sv={setValue} />
          </Checkbox>
            <label for= "text2">Indiquer votre activité professionnelle</label><br/>
				      <input type="text" onChange={e => setValuePro(e.target.value)} name="pro" id="pro"/><br/>
        </div>  
        <div>
          <button>Suivant</button>
          
         
        </div>

      </fieldset>
         
    </form>

    </div>
  )
}
export default Form