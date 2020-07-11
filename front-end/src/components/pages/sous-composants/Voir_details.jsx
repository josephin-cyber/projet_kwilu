import React, { Component } from 'react';
import '../css/details.css'

const Voir_details = (props) => {
    return ( <div>
       
            <div className='details'>
                <div className="section1">
                    <p>: Jonathan MANZAKO</p>
                </div>
                <div className="section2">
                    <p>Informations du client</p>
                   
                </div>
                <div className="section3">
                    <p>Informations du transporteur</p>
                    <ul>
                        <li>Marque du vehicule : </li>
                        <li>N° de plaque d'immatr. :</li>
                        <li>Nom du chauffeur :</li>
                        <li><img src="" alt=""/>photo vehicule</li>
                    </ul>
                </div>
                <div className="section4">
                <p>Etat du chargement :</p>

                <p>Heure</p>
                    <ul>
                        <li>Début</li>
                        <li>Fin</li>
                    </ul>
                
                </div>
                <div className="section5">Photo BL</div>
                <div className="section6">Commentaire</div> 
                            <button>Mettre a jour</button>
            </div>
        
    </div> );
}
 
export default Voir_details;