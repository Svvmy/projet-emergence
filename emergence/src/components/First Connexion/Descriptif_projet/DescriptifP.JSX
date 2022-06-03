import React, { useState } from 'react';
import FormInput from '../Domaine Pro/FormInput';
import '../Domaine Pro/form.css'
import '../Domaine Pro/formInput.css'
const Descriptif_projet = () => {
    
    const [values, setValues] = useState({
        nom:"",
        domaine:"",
        date_deb:"",
        date_fin:"",
        projet_actuel:"",
        descriptif_projet:"",
        media:"",
        tag:"",
        lien:"",
    
      });
    
      const inputs = [
          {
              id: 1,
              name: "nom",
              type: "text",
              placeholder:"",
              label:"Nom du projet",

          },
          {
            id: 2,
            name: "domaine",
            type: "text",
            placeholder:"",
            label:"Domaine du projet",    
          },
          {
            id: 3,
            name: "date_deb",
            type: "month",
            placeholder:"",
            label:"Date de debut",
          },
          {
            id: 4,
            name: "date_fin",
            type: "month",
            placeholder:"",
            label:"Date de fin",
          },
          {
            id: 5,
            name: "descriptif_projet",
            type: "text",
            placeholder:"Parlez en quelques mots du projet",
            label:"Descriptif du projet",
          },
          {
            id: 6,
            name: "media",
            type: "text",
            placeholder:"Selectionner une image",
            label:"Media",
          },
          {
            id: 7,
            name: "tag",
            type: "text",
            placeholder:"",
            label:"Tag",
          },
          {
            id: 8,
            name: "lien",
            type: "text",
            placeholder:"Saisissez vos liens vers votre projet",
            label:"Liens",
          }
          


      ]



    const handleSubmit = e => {
        e.preventDefault();
    }

    const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                 key = {input.id}
                 {...input}
                  value={values[input.name]}
                 onChange={onChange}
                 />))
              }
            </form>
            
        </div>
            
    )


}

export default Descriptif_projet;
