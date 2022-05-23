import React, {useState} from 'react'
import { Checkbox } from './Checkbox';
import { Input } from './Input';
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
        <label>Type d'emplois:</label>
        <select value={emplois} onChange={(e) => setEmplois(e.target.value)}>
          <option value="CDD">CDD</option>
          <option value="CDI">CDI</option>
          <option value="Stage">Stage</option>
          <option value="Saisonier">Emplois saisonier</option>
        </select>
        <br />
        <label>Intitulé de poste:</label>
        <input type="text" required value={Poste} onChange={(e) => setPoste(e.target.value)} />
        <br />
        <label>Nom de l'entreprise:</label>
        <input type="text" required value={NomEntreprise} onChange={(e) => setNomEntreprise(e.target.value)} />
        <br />
        <label>Date de debut:</label>
        <input type="month" required value={DateDebut} onChange={(e) => setDateDebut(e.target.value)} />

        <div>
          <Checkbox visible={check}>
            <input type="checkbox" onClick={toggle} name="check" />
            <label id="label1" for="text1">
              J'occupe actuellement ce poste:
                            ou                               
                            indiquer la date de fin:
            </label>
            <Input visible={check} sv={setValue} />
          </Checkbox>
        </div>
        <br />
        <label>Lieu:</label>
        <input type="text" required value={Lieu} onChange={(e) => setLieu(e.target.value)} />
        <br />
        <label>Secteur:</label>
        <input type="text" required value={Secteur} onChange={(e) => setSecteur(e.target.value)} />
        <br />
        <label>Descriptif:</label>
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
