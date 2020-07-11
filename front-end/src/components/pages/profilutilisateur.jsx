import React from 'react'
import profil from './images/profil.jpeg'
import { Dropdown, Image, Label } from 'semantic-ui-react'
import './css/profilutilisateur.css'
import {  Link } from "react-router-dom";

// Récupération de l'email du local storage
let emailEmploye = localStorage.getItem("email")? localStorage.getItem("email"):'';

//Mise en majuscule de l'email
emailEmploye = emailEmploye.toString().toUpperCase();

const trigger = (
  <span>
    <Label content={emailEmploye} color='green' />
    {/* <Image avatar src={profil}/> */}
  </span>
)

const DropdownImageTriggerExample = () => {
  return (<>
    <Dropdown
    trigger={trigger}
    // options={options}
    pointing='top right'
    icon={null} 
  >
    <Dropdown.Menu>
    {/* <Dropdown.Item key= 'profil' text= 'profil' icon= 'user' />
    <Dropdown.Item key= 'parametre' text= 'Paramètre' icon= 'settings' /> */}
    <Dropdown.Item key='deconnexion' text= 'Déconnexion' icon= 'sign out'  as={Link} to='/' /></Dropdown.Menu>
  </Dropdown>
</>)
}
export default DropdownImageTriggerExample