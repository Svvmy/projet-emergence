import {useState} from 'react'
import FormInput from '../Domaine Pro/FormInput';
import {post} from 'axios'
import '../FormExperience/formexp.css';
const HOST = "localhost"
const PORT = "5000"


export default function Inscription() {
	
 
	// const [ check, setCheck ] = useState(false);
  const [values, setValues] = useState({
    nom:"",
    prenom:"",
    password:"",
    passwordC:"",
    email:"",
    emailC:"",
    portable:"",
    date_de_naissance:"",

  });

  const inputs = [
    {
      id: 1,
      name: "nom",
      type: "text",
      placeholder: "nom",
      label: "Nom",
    },
    {
      id: 2,
      name: "prenom",
      type: "text",
      placeholder: "prenom",
      label: "Prenom",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      label: "Mot de passe",
    },
    {
      id: 4,
      name: "passwordC",
      type: "password",
      placeholder: "Confirmer le mot de passe",
      label: "Confirmer le Mot de passe",
    },
    {
      id: 5,
      name: "email",
      type: "mail",
      placeholder: "yunus@turc.tu",
      label: "Email",
    },
    {
      id: 6,
      name: "emailC",
      type: "mail",
      placeholder: "yunus@turc.tu",
      label: "Confirmer votre email",
    },
    {
      id: 7,
      name: "portable",
      type: "tel",
      placeholder: "",
      label: "Numéro de portable",
    },
    {
      id: 8,
      name: "date_de_naissance",
      type: "date",
      placeholder: "01/01/1950",
      label: "Date de naissance",
    },
  ]

  const [validation, setValidation] = useState("");

  async function p(nom, prenom, ddn, pass, port, mail) {
    let re = { status: 2, message: "Une erreur est survenue" }
    try {
        const response = await post(`http://${HOST}:${PORT}/api/register`, {
            nom: nom,
            prenom: prenom,
            date_de_naisssance: ddn,
            password: pass,
            portable: port,
            email: mail
        })
        re = { status: 0, message: `${response?.data?.message}` }
    }
    catch (error) {
        //console.log(erreur.response.data.message)
        re = { status: 1, message: `${error.response?.data?.message}` }
    }
    return re.message
}





  const handleSubmit = async e => {
    e.preventDefault();
    
    if ((values.password.length || values.passwordC.length) < 8) {
      setValidation("8 caratères minimum")
      return;
  }
  else if (values.password !== values.passwordC) {
      setValidation('Les mots de passe ne sont pas identique')
      return;
  }
  else if (values.email !== values.emailC) {
      setValidation('Les mails ne sont pas identique')
      return;
  }
  else {
      //alert(inputs[0].value+"\n"+inputs[1].value+"\n"+inputs[2].value+"\n"+inputs[3].value+"\n"+inputs[4].value+"\n"+inputs[5].value+"\n"+inputs[6].value+"\n"+inputs[7].value)
      const post = await p(values.nom, values.prenom, values.date_de_naissance, values.password, values.portable, values.email)
      setValidation(post)

  }
  }
 
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };

	

  console.log("validation "+validation)
  console.log(values)
  console.log("inputs2 id "+inputs[2].id)
  console.log("inputs2 value "+values.password)
  return (
  <div className='divPageFormExp'>  
      <div className="formExp">

      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          {inputs.map((input) => (
            <FormInput
            key = {input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            />
          ))}
        </div>  
        <center>
          <p className='validation'>{validation}</p>
          <button className="button inscription" type="submit">
        S'inscrire
      </button>
        </center>
      </form>
    </div>

  
  </div>
) 
}
