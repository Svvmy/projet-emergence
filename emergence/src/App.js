import './App.css'
import {Routes, Route} from "react-router-dom"
import Accueil from './components/Home/Accueil'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Profile/Posts/Posts'
import Experience from './components/Profile/Experiences/Experiences'
import Projet from './components/Profile/Projets/Projets'
import FCdomainePro from './components/First Connexion/Domaine Pro/Affichage'
import Messagerie from './components/Home/Messagerie/Messagerie'


export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path ="/" element ={<Accueil />} />
        <Route path ="/messagerie" element ={<Messagerie />} />
        <Route path ="/profil/:id" element ={<Profile />}>
          <Route path ="/profil/:id/post" element ={<Post />} />
          <Route path ="/profil/:id/experience" element ={<Experience />} />
          <Route path ="/profil/:id/projet" element ={<Projet />} />
        </Route>
        <Route path ="/FC/domaine-pro" element = {<FCdomainePro />}/>     
      </Routes>
    </div>
  );
}


