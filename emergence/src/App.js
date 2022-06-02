import './App.css'
import {Routes, Route} from "react-router-dom"
//import Accueil from './components/Home/Accueil'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Profile/Posts/Posts'
import Experience from './components/Profile/Experiences/Experiences'
import Projet from './components/Profile/Projets/Projets'
import FCformdomainePro from './components/First Connexion/Domaine Pro/Affichage'
import Messagerie from './components/Messagerie/Messagerie'
import FCformExperience from './components/First Connexion/FormExperience/FormExperience'
import FCformFormation from './components/First Connexion/FormFormation/FormFormation'
import Authentification from './components/Auth/Authentification'
import TestXD from './components/Button/testXD'
import InscriptionXD from './components/Button/InscriptionXD'


export default function App() {
  return (
    <div className='App'>
      <div className='Navbar'>
        <Navbar />
      </div>
      <Routes>
        <Route path ="/" element ={<Authentification />} />
        <Route path ="/messagerie" element ={<Messagerie />} />
        <Route path ="/profil/:id" element ={<Profile />}>
          <Route path ="/profil/:id/post" element ={<Post />} />
          <Route path ="/profil/:id/experience" element ={<Experience />} />
          <Route path ="/profil/:id/projet" element ={<Projet />} />
        </Route>
        <Route path ="/FC/domaine-pro" element = {<FCformdomainePro />}/>     
        <Route path ="/FC/ajout-formation" element = {<FCformFormation />}/>     
        <Route path ="/FC/ajout-experience" element = {<FCformExperience />}/>     
        <Route path ="/FC/testxd" element = {<TestXD />}/>     
        <Route path ="/FC/inscriptionxd" element = {<InscriptionXD />}/>     
      </Routes>
    </div>
  );
}


