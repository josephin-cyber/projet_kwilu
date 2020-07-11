import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import TableExampleStackable from "./Table";
import { Link } from "react-router-dom";
import "./css/Modal.css";

const ConfirmerEnregistrementCamion = (props) => {
  const [state, setState] = useState({ modal_open: false });

  const handleOpen = () => setState({ modal_open: true });
  const handleClose = () => setState({ modal_open: false });

  return (
    <Modal
      trigger={
        <Button color="green" onClick={handleOpen}>
          Enregistrer
        </Button>
      }
      closeIcon
      id="modal"
      open={state.modal_open}
      onClose={handleClose}
    >
      <Modal.Content>
        <div>
          <TableExampleStackable
            employe={props.employe}
            image={props.image}
            email={props.email}
            adresse={props.adresse}
            numeroBl={props.numeroBl}
            nomClient={props.nomClient}
            nature={props.nature}
            quantite={props.quantite}
            marque={props.marque}
            plaque={props.plaque}
            societe={props.societe}
            chauffeur={props.chauffeur}
            commentaire={props.commentaire}
          />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="blue" onClick={handleClose}>
          ANNULER
        </Button>

        <Button
          color="green"
          type="submit"
          onClick={props.submit}
          className={`${props.loader}`}
        >
          CONFIRMER
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmerEnregistrementCamion;

/*
as={Link} to="/formulairegi"
*/
