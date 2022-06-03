import {useContext, useState} from 'react'
import FormInput from '../First Connexion/Domaine Pro/FormInput';
import AuthContext from '../Auth/authProvider';
import {post} from 'axios'
import '../First Connexion/FormExperience/formexp.css';
const HOST = "localhost"
const PORT = "5000"

// yunus@turc.turc
// testfrog


export default function Login() {
	const {setAuth, toogleConnect} = useContext(AuthContext)
  const [success, setSuccess]=useState(false)
	
  const [values, setValues] = useState({
    email:"",
    password:""
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "mail",
      placeholder: "yunus@turc.tu",
      label: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      label: "Mot de passe",
    },
   
  ]

  const [validation, setValidation] = useState("");

  async function p(pass, mail) {
    let re = { status: 2, message: "Une erreur est survenue" }
    try {
        
      const response = await post(`http://${HOST}:${PORT}/api/login`, {
            email: mail,
            password: pass
        })
      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      const email = values.email
      const pwd = values.password
      setAuth({email, pwd, accessToken, refreshToken});
      setSuccess(true)
      toogleConnect("connect")
      console.log(response.data)
      re = { status: 0, message: `${response?.data?.message}` }
    }
    catch (error) {
      if(!error?.response){
        re={status:1, message: 'Aucune reponse du serveur'}
     } else if (error.response?.status === 401){
        re={status:1, message: `${error.response.data.message}`}
        console.log(error)
     } else {
        re={status:1,message: "Une erreur est survenue"}
     }
    console.log(error)
    }
    console.log("status ",re.status)
    return re.message
}





  const handleSubmit = async e => {
    e.preventDefault();
    const post = await p(values.password, values.email)
    console.log(post)  
    setValidation(post)
  }
  
  
 
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };

	

  // console.log("validation "+validation)
  // console.log(values)

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
        Connexion
      </button>
        </center>
      </form>
    </div>

  
  </div>
) 
}

