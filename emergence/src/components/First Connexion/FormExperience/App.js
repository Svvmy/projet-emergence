import logo from './logo.svg';
import './App.css';
import react from 'react';

function App() {
  return (
    <div className="create">
      <h1> Ajouter une formation</h1>
       <form action="post">
        <div className="form">
          <label>Ecole</label>
          <br></br>
          <input type="text" placeholder=" université de Paris"></input><br></br>
          <label >Diplome</label><br></br>
          <input type="text" placeholder='Licence'></input><br></br>
          <label >Domaine d'études </label><br></br>
          <input type="text" placeholder="Informatique"></input><br></br>
          <label>Date de début</label><br></br>
          <input type="date" placeholder="09/09/2019"></input><br></br>
          <div className='conteneur'>
          <div><input type="checkbox"></input></div>
          <div><label>je suis actuellement cette formation</label></div> 
          </div>
          <br></br>
          <label>Date de fin </label><br></br>
          <input type="date" placeholder="09/06/2022"></input><br></br>
          <div className='conteneur2'>
            <div className='button1'>
              <a>Ajouter une formation</a>
            </div> 
            <div className="retour"  type ="submit" href="">Retour </div> 
         </div> 
          

         
          
          
        </div>
      </form>
    </div>
  )
}
export default App;
