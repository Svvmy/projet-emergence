import React, {useState} from 'react'
import { Checkbox } from './Checkbox';
import FormInput from '../Domaine Pro/FormInput';

import './formexp.css';
import imgRetour from './fleche retour.png';

export default function FormExperience() {
	const [ RetourPage, setRetourPage ] = useState('');
  // //const [ ShowDateFin, setShowDateFin ] = useState(true);
	// const [ NomEntreprise, setNomEntreprise ] = useState('');
	// const [ Poste, setPoste ] = useState('');
	// const [ Descriptif, setDescriptif ] = useState('');
	// const [ Secteur, setSecteur ] = useState('');
	// const [ Lieu, setLieu ] = useState('');
	// const [ DateDebut, setDateDebut ] = useState('');
	// //const [ OccupePoste, setOccupePoste ] = useState('');
	// //const [ DateFin, setDateFin ] = useState('');
	// const [ emplois, setEmplois ] = useState('Veuillez choisir');
	// const [ value, setValue ] = useState('');
	// const [ val, setValuePro ] = useState('');
	const [ check, setCheck ] = useState(false);
  const [values, setValues] = useState({
    typeEmploi:"",
    intitulePoste:"",
    nomEntreprise:"",
    dateDebut:"",
    occupePoste:"",
    dateFin:"",
    lieu:"",
    secteur:"",
    descriptif:"",

  });

  // reset de la valeur reussi visuelement mais pas dans le tableau d'inputs 

  const inputs = [
    {
      id: 1,
      name: "typeEmploi",
      type: "option",
      placeholder: "Veuillez Sélectionner",
      label: "Type d'emploi",
    },
    {
      id: 2,
      name: "intitulePoste",
      type: "text",
      placeholder: "Chef de projet informatique",
      label: "Intitulé de poste",
    },
    {
      id: 3,
      name: "nomEntreprise",
      type: "text",
      placeholder: "Nom de l'entreprise",
      label: "Nom de l'entreprise",
    },
    {
      id: 4,
      name: "dateDebut",
      type: "text",
      placeholder: "01/01/1950",
      label: "Date de début",
    },
    {
      id: 5,
      name: "occupePoste",
      type: "checkbox",
      placeholder: "",
      label: "J'occupe actuellement ce poste",
    },
    {
      id: 6,
      name: "dateFin",
      type: "text",
      placeholder: "01/01/1950",
      label: "Date de fin",
    },
    {
      id: 7,
      name: "lieu",
      type: "text",
      placeholder: "Paris, France",
      label: "Lieu",
    },
    {
      id: 8,
      name: "secteur",
      type: "text",
      placeholder: "Informatique",
      label: "Secteur",
    },
    {
      id: 9,
      name: "descriptif",
      type: "textarea",
      placeholder: "Description de votre expérience",
      label: "Descriptif",
    },
  ]

  function inputType(input){
    if(input.id === 5){
      return(
        <FormInput
        key = {input.id}
        {...input}
        value={!check}
        onClick={toggle}
        onChange={onChange}
      />
      )
    }else if(input.id === 6){
      return(
        
        <Checkbox visible={check}>
          <FormInput
          key = {input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          visible={check}
          />
        </Checkbox>
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


  const handleSubmit = e => {
    e.preventDefault();
    //console.log(value)
  }
  const onChange2 = (e) => {
    setValues();
    toggle()
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };

	const toggle = () => {
		setCheck((o) => !o);
		console.log(check);
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(value);
	// 	console.log('activité pro:', val);
	// };
  
  console.log(values)
  return (
  <div className='divPageFormExp'>  
      <button className="button" id='btnRetour' type="submit" value={RetourPage} onClick="history.back()" onChange={(e) => setRetourPage(e.target.value)}>
         <img className='btnRetourImg'src={imgRetour} alt="btnretourImg"/>
      </button>
      <div className="formExp">

      <h2>Ajouter une experience</h2>
      <form onSubmit={handleSubmit}>
        {/* <label className='lbl'>Type d'emplois:</label>
        <select value={emplois} onChange={(e) => setEmplois(e.target.value)}>
          <option value="CDD">CDD</option>
          <option value="CDI">CDI</option>
          <option value="Stage">Stage</option>
          <option value="Saisonier">Emplois saisonier</option>
          <option value="Alternance">Alternance</option>
        </select>
        <br /> */}
      
        <div className='inputs'>
          {inputs.map((input) => (
            inputType(input)



            //   <FormInput
            //   key = {input.id}
            //   {...input}
            //   value={values[input.name]}
            //   onChange={onChange}
            // />
            
            
            
            
          ))}
        </div>  


        {/* <div>
          <Checkbox visible={check}>
            <input type="checkbox" onClick={toggle}/>
            <label className='lbl'>
              J'occupe actuellement ce poste:                               
            </label>
            <Input name="input text" visible={check} sv={setValue} />
          </Checkbox>
        </div> */}
        

      </form>
    </div>
    
    <div className='footer'>
      <button className="button" type="submit">
        Ajouter une experience
      </button>
      <button className="button" type="submit">
        Suivant
      </button>
    </div>
  
  </div>
) 
}
