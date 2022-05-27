import React, {useState} from 'react'
import { Checkbox } from './Checkbox';
import { Input } from './Input';
import FormInput from '../Domaine Pro/FormInput';

import './formexp.css';
import imgRetour from './fleche retour.png';

export default function FormExperience() {
  //const [ ShowDateFin, setShowDateFin ] = useState(true);
	const [ NomEntreprise, setNomEntreprise ] = useState('');
	const [ Poste, setPoste ] = useState('');
	const [ Descriptif, setDescriptif ] = useState('');
	const [ Secteur, setSecteur ] = useState('');
	const [ Lieu, setLieu ] = useState('');
	const [ DateDebut, setDateDebut ] = useState('');
	const [ RetourPage, setRetourPage ] = useState('');
	//const [ OccupePoste, setOccupePoste ] = useState('');
	//const [ DateFin, setDateFin ] = useState('');
	const [ emplois, setEmplois ] = useState('Veuillez choisir');
	const [ value, setValue ] = useState('');
	const [ val, setValuePro ] = useState('');
	const [ check, setCheck ] = useState(true);

  const [values, setValues] = useState({
    typeEmploi:"",
    intitulePoste:"",
    nomEntreprise:"",
    dateDebut:"",
    dateFin:"",
    lieu:"",
    secteur:"",
    descriptif:"",

  });

  const inputs = [
    {
      id: 1,
      name: "domainePro",
      type: "text",
      placeholder: "Domaine Informatique",
      label: "Indiquer votre domaine d'activité(actuel",
    },
    {
      id: 2,
      name: "activitePro",
      type: "text",
      placeholder: "Consultant informatique",
      label: "Indiquer votre activité professionnelle(actuel)",
    }
  ]


	const toggle = () => {
		setCheck((o) => !o);
		console.log(check);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
		console.log('activité pro:', val);
	};
  
  return (
  <div className='divPageFormExp'>  
      <button className="button" id='btnRetour' type="submit" value={RetourPage} onClick="history.back()" onChange={(e) => setRetourPage(e.target.value)}>
         <img className='btnRetourImg'src={imgRetour} alt="btnretourImg"/>
      </button>
      <div className="formExp">

      <h2>Ajouter une experience</h2>
      <form>
        <label className='lbl'>Type d'emplois:</label>
        <select value={emplois} onChange={(e) => setEmplois(e.target.value)}>
          <option value="CDD">CDD</option>
          <option value="CDI">CDI</option>
          <option value="Stage">Stage</option>
          <option value="Saisonier">Emplois saisonier</option>
          <option value="Alternance">Alternance</option>
        </select>
        <br />
        <label className='lbl'>Intitulé de poste:</label>
        <input type="text" required value={Poste} onChange={(e) => setPoste(e.target.value)} />
        <br />
        <label className='lbl'>Nom de l'entreprise:</label>
        <input type="text" required value={NomEntreprise} onChange={(e) => setNomEntreprise(e.target.value)} />
        <br />
        <label className='lbl'>Date de debut:</label>
        <input type="month" required value={DateDebut} onChange={(e) => setDateDebut(e.target.value)} />

        <div>
          <Checkbox visible={check}>
            <input type="checkbox" onClick={toggle}/>
            <label className='lbl'>
              J'occupe actuellement ce poste:
              ou                               
              indiquer la date de fin:
            </label>
            <Input name="input text" visible={check} sv={setValue} />
          </Checkbox>
        </div>
        <br />
        <label className='lbl'>Lieu:</label>
        <input type="text" required value={Lieu} onChange={(e) => setLieu(e.target.value)} />
        <br />
        <label className='lbl'>Secteur:</label>
        <input type="text" required value={Secteur} onChange={(e) => setSecteur(e.target.value)} />
        <br />
        <label className='lbl'>Descriptif:</label>
        <textarea required value={Descriptif} onChange={(e) => setDescriptif(e.target.value)} />
        <br />
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
