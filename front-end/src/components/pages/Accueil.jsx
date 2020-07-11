import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";
import './css/acceuil.css'

import HeaderExampleFloating from './header'


class Accueil extends Component {
    handleLogout() {
        localStorage.clear();
        window.location.href = "/";
      }
    render() { 
        return (
            <div>
            <HeaderExampleFloating/>     
                <div className="conteneur">
                <p> <span style={{fontWeight:"bold", fontSize:"20px"}} > Bonjour Joseph </span> <br/> <br/>
                Que souhaitez-vous faire ?
                </p>
                
                <div className="center"> <p>Gérer de manière optimale vos chargements</p></div>
    
                <div className="Grid">
                    
                    <Link to="/formulairegi">
                         <div style={{backgroundColor:"#009ad6"}} ><p>Enregistrer chargement <br/>
                             <span className="iconify" data-icon="clarity:form-line" data-inline="false"></span></p>
                         </div>
                    </Link>
                    
                    <Link to="/PageResponsableChargement">
                    <div style={{backgroundColor:"#21ba45"}}><p>Voir infos chargements <br/>
                        <span className="iconify" data-icon="mdi:folder-information-outline" data-inline="false"></span>
                    </p></div>
                    </Link>

                    <Link to="/tableauDebord">
                        <div style={{backgroundColor:"#d44c18"}}><p>Voir tableau de bord <br/>
                        <span className="iconify" data-icon="carbon:dashboard" data-inline="false"></span></p>
                        </div>
                    </Link>
    
                </div>
            </div>
    
        </div>
         );
    }
}
 
export default Accueil;
