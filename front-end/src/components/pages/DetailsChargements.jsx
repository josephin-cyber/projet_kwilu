import React, { useEffect,useState } from 'react';
import axios from 'axios';
import HeaderExampleFloating from './header';
import ModalPhoto from './ModalPhoto';
import placeholder from "./images/placeholder.png"
import {Image,Form,Grid,Segment,Header, Button, TextArea } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import Voir_detail from './sous-composants/Voir_details'
import './css/details.css'


const DetailsChargements = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [commentaire, setCommentaire] = useState("");
    const [details, setdetails] = useState([]);
    const [comment, setComment] = useState([]);
    const [image,setImage]=useState(placeholder);

    const employeId = localStorage.getItem("employeId");
    console.log(employeId);

    // const onSubmit = () => {
    //     const infoCommentaire = {
    //       commentaire: commentaire
    //     }

    //     const employeId = localStorage.getItem("employeId");
    //     console.log(employeId);
        
    //     const endpoint = `https://appkwilu2.herokuapp.com/employes/${employeId}/enregistrements?etatId=1&produitId=${idProduit}`;

    //     axios
    //         .post(endpoint, infoBonLivraison)
    //         .then((res) => {
    //             const token = res.data.token;
    //             localStorage.setItem("authorization", token);
    //             console.log(token);
    //         })
    //         .catch((err) => {
    //             alert("Un problème est survenu lors de l'enregistrement du camion\n");
    //             console.log(err);
    //         });

    // }


    

    const detailInfo = JSON.parse(localStorage.getItem("info") || "[]");

    useEffect(() => {
      axios
        .get(`https://appkwilu2.herokuapp.com/vehicules/${detailInfo.id}/detail_produits`)
        .then(response => setdetails(response.data));

        
    },

    []); 
    const tabFilter = [];
    details.forEach(element => {
        tabFilter.push({
            nom:element.client.nom_client,
            adresse:element.client.adresse,
            email:element.client.email,
            //produit
            type:element.produit.type_produit,
            quantite : element.quantite,
            numeroBL : element.ref_bon

        });
        
    });

    function formPhoto(photo){
        setImage(photo);
        console.log(image);
        
      }
    
    console.log(JSON.stringify(tabFilter));

    return ( <div className="groupe">
        <HeaderExampleFloating/> <br/><br/>
       
        <div className="sec-container">
        <Segment clearing >
            <Header  className="titre" as='h3' floated="left">
                <img src="https://www.usine-digitale.fr/mediatheque/5/4/8/000794845_homePageUne/ups-tusimple.jpg" alt=""/>
                <span id="transporteur"> Transporteur :<span className="detailInfo">  {detailInfo.nom} </span> </span>
                <br/>
                <div className="seg-list">
                    <ul className="timesEtat">
                        <li>Heure chargements en cours : </li> <br/>
                        <li>Heure de fin de chargement : </li> <br/>
                        <li>Etat : </li>
                    </ul>
                </div>
            </Header>
            <Header  className="titre" as='h3' color='black'floated="right">
                N°_Plaque : <span className="detailInfo">{detailInfo.plaque} </span>    
            </Header>
        </Segment>

        <Segment className="groupSegment">
            {tabFilter.map((data)=>(
                <div className="seg-group">
                    <Segment className="seg-list">
                        <h3>Information Clients</h3>
                        <ul>
                            <li>Noms :  <b>{data.nom}</b> </li> <br/>
                            <li>Adresse : <b>{data.adresse}</b> </li> <br/>
                            <li>Email : <b>{data.email}</b></li> <br/>
                            
                        </ul>
                    </Segment>
                    <Segment className="seg-list">
                        <h3>Produits</h3>
                        <ul>
                            <li>Type : {data.type} </li> <br/>
                            <li>Quantite : {data.quantite} </li> <br/>
                            <li>numero BL : {data.numeroBL} </li> <br/>
                            
                        </ul>
                    </Segment>
                   
                </div>
             ))} 
                    <div>
                        <Segment className="seg-list" id="BL">
                            <Header  className="titre" as='h3'backgroundColor="green">Bon de livraison</Header>
                
                            <Image src={image} size='small' bordered ref={register}  onChange={event => setImage(event.target.value) }centered/>

                            <ModalPhoto  ajoutPhoto={formPhoto} floated="top"/>
                
                        </Segment> 
                    </div> 
        </Segment>
        
        <div className="section-commentaire">
            <h3 className="commentaire">Commentaire</h3>
            <div className="primary">
                <Segment className="seg-com">
                    <p>
                        Le lorem ipsum est, en imprimerie, <br/> une suite de mots sans signification utilisée.
                    </p>
                </Segment>
               
                    <Form className="seg-com">
                        <Form.Field name="commentaire" 
                            onChange={event => setCommentaire(event.target.value)} 
                            control='textarea' rows='3'
                            placeholder="Ajouter un commentaire"
                        />
                        <Button circular icon='plus ' color='green' className='Btn-icone' floated="top"/>
                        
                    </Form>
                
            </div>
        </div>
        

        </div>
    </div> );
}
 
export default DetailsChargements;