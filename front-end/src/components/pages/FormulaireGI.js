import React, { useState, useEffect } from "react";
import {
  Grid,
  Image,
  Form,
  Button,
  Segment,
  Header,
  Select,
  Container,
} from "semantic-ui-react";
import HeaderExampleFloating from "./header";
import ConfirmerEnregistrementCamion from "./ConfirmerEnregistrementCamion";
import ModalPhoto from "./ModalPhoto";
import { useForm } from "react-hook-form";
import placeholder from "./images/placeholder.png";
import "./css/formulairegi.css";
import axios from "axios";


const FormulaireGI = (props) => {
  const { register, errors } = useForm();

  const [nomClient, setNomClient] = useState("");
  const [
    numeroReferenceBonLivraison,
    setNumeroReferenceBonLivraison,
  ] = useState("");
  const [natureMarchandise, setNatureMarchandise] = useState("");
  const [quantite, setQantite] = useState("");
  const [marque, setMarque] = useState("");
  const [plaque, setPlaque] = useState("");
  const [chauffeur, setChauffeur] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [image, setImage] = useState(placeholder);
  const [loader, setLoader] = useState("");

  let idProduit = 1;
  if (natureMarchandise == "10X5") {
    idProduit = 1;
  } else if (natureMarchandise == "VCOM") {
    idProduit = 2;
  } else {
    idProduit = 3;
  }

  const onSubmit = () => {

    const infoBonLivraison = {
      nom_client: nomClient,
      numero_plaque: plaque,
      transporteur: chauffeur,
      marque: marque,
      ref_bon: numeroReferenceBonLivraison,
      quantite: quantite,
      photo_vehicule: image
    };

    setLoader("loading");

    const employeId = localStorage.getItem("employeId");
    // console.log(employeId);

    const endpoint = `https://appkwilu2.herokuapp.com/employes/${employeId}/enregistrements?etatId=1&produitId=${idProduit}`;

    axios
      .post(endpoint, infoBonLivraison)
      .then((res) => {
      
        //Affichage d'une animation de succès après l'enregitrement d'un transporteur
        props.history.push("/animation");

        //Redirection vers le formulaire de la garde industrielle après 3secondes
        setTimeout(function () {
          props.history.push("/formulairegi");
        }, 3000);
      })
      .catch((err) => {
        alert("Un problème est survenu lors de l'enregistrement du camion\n");
        console.log(err);
      });
  };

  function formPhoto(photo) {
    setImage(photo);
    console.log(image);
  }

  return (
    <div>
      <HeaderExampleFloating />

      <Container>
        <Form id="color">
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment className="segment1">
                <Header className="titre" as="h3">
                  Information du transporteur
                </Header>

                <div className="milieu">
                  <Form>
                    <Form.Field>
                      <input
                        ref={register}
                        name="chauffeur"
                        placeholder="Nom du chauffeur"
                        onChange={(event) => setChauffeur(event.target.value)}
                        className="semia"
                      />
                      {errors.chauffeur && <span>This field is required</span>}
                    </Form.Field>
                  </Form>
                  <Form>
                    <br />
                    <Form.Group widths="equal">
                      <Form.Input
                        ref={register}
                        name="marque"
                        placeholder="Marque du véhicule"
                        onChange={(event) => setMarque(event.target.value)}
                        className="semia"
                        fluid
                        id="form-subcomponent-shorthand-input-first-name"
                      />
                      <Form.Input
                        ref={register}
                        name="plaque"
                        placeholder="N° de la plaque d'immatriculation"
                        onChange={(event) => setPlaque(event.target.value)}
                        className="semia"
                        fluid
                        id="form-subcomponent-shorthand-input-last-name"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="segment1">
                <Header className="titre" as="h3">
                  Information du Client
                </Header>

                <div className="milieu">
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        id="form-subcomponent-shorthand-input-first-name"
                        ref={register}
                        name="nomClient"
                        placeholder="Nom du client"
                        onChange={(event) => setNomClient(event.target.value)}
                        className="semia"
                      />
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        id="form-subcomponent-shorthand-input-first-name"
                        ref={register}
                        name="numref"
                        onChange={(event) =>
                          setNumeroReferenceBonLivraison(event.target.value)
                        }
                        placeholder="Numero de bon de livraison"
                        className="semia"
                      />
                      <Form.Field
                        fluid
                        id="form-subcomponent-shorthand-input-last-name"
                        ref={register}
                        name="quantite"
                        control="input"
                        type="number"
                        min={1}
                        onChange={(event) => setQantite(event.target.value)}
                        placeholder="Quantité de la marchandise"
                        className="semia"
                      />
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        id="form-subcomponent-shorthand-input-last-name"
                        ref={register}
                        control={Select}
                        options={[
                          { key: "XXX", text: "10X5", value: "10X5" },
                          { key: "VCOM", text: "VCOM", value: "VCOM" },
                          { key: "BSB2-5", text: "BSB2-5", value: "BSB2-5" },
                        ]}
                        placeholder="Type de sucre"
                        search
                        searchInput={{ id: "form-select-control-gender" }}
                        onChange={(e, {value}) => {
                          setNatureMarchandise(value)
                          console.log(e, value)}
                        }
                        
                        className="semia"
                      />
                    </Form.Group>
                  </Form>
                </div>

                <Button
                  circular
                  icon="plus "
                  color="green"
                  className="floatBnt"
                />
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment className="segment2">
                <Header className="titre" as="h3">
                  Ajouter photo
                </Header>
                <div className="milieu">
                  <Image
                    src={image}
                    size="small"
                    bordered
                    ref={register}
                    onChange={(event) => setImage(event.target.value)}
                    centered
                  />
                </div>
                <ModalPhoto ajoutPhoto={formPhoto} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="segment2">
                <Header className="titre" as="h3">
                  Commentaire
                </Header>
                <div className="milieu">
                  <Form.Field
                    name="commentaire"
                    onChange={(event) => setCommentaire(event.target.value)}
                    control="textarea"
                    rows="3"
                  />
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
          <br />
          <div className="bnt">
            <ConfirmerEnregistrementCamion
              image={<img src={image} width="20%" />}
              nomClient={nomClient}
              numeroBl={numeroReferenceBonLivraison}
              nature={natureMarchandise}
              quantite={quantite}
              marque={marque}
              plaque={plaque}
              chauffeur={chauffeur}
              commentaire={commentaire}
              submit={onSubmit}
              loader={loader}
            />
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default FormulaireGI;