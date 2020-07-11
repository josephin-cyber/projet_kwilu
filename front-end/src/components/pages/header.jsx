import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";
import logo from "./images/compagnieSucriere.gif";
import DropdownImageTriggerExample from "./profilutilisateur";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const HeaderExampleFloating = () => {
  return (
    <div className="header">
      <Segment clearing>
        <Header as="h2" floated="right">
          <DropdownImageTriggerExample 
          />
        </Header>
        <Header as="h2" floated="left">
        <Link to="/homepage">
        <FontAwesomeIcon
              className='retour'
              icon={faArrowLeft}
            />
            </Link>
          <Image circular src={logo} />
        </Header>
      </Segment>
    </div>
  );
};

export default HeaderExampleFloating