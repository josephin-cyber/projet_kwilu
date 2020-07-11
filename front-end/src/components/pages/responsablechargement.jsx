import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import axios from "axios";
import "./css/responsableChargement.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { trackPromise } from "react-promise-tracker";
import IndicateurDeChargement from "./IndicateurDeChargement";


const PageResponsableChargement = () => {
  const [data, setData] = useState([]);
  const [etatChargement, setEtatChargement] = useState(true);
  useEffect(() => {
    trackPromise(
      axios
        .get("https://appkwilu2.herokuapp.com/enregistrements")
        .then((response) => setData(response.data))
    );
  }, []);

  return (
    
    <div className="corps">
      
      <Table striped>
      
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Etat chargement</Table.HeaderCell>
            <Table.HeaderCell>Image véhicule</Table.HeaderCell>
            <Table.HeaderCell>Nom du chauffeur</Table.HeaderCell>
            <Table.HeaderCell>N°Plaque</Table.HeaderCell>
            <Table.HeaderCell>Marque</Table.HeaderCell>
            <Table.HeaderCell>Heure parking</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item) => (
            <tr key={item.id}>
              <td  id="etat" >{data.etatId="Parking" }</td>
              <td>
                <img src={item.photo_vehicule} width="50px" />
              </td>
              <td> {item.transporteur} </td>
              <td> {item.numero_plaque} </td>
              <td> {item.marque} </td>
              <td> {moment(item.heure_parking).format("LT")} </td>

              <td>
                <Link to="/Details">
                  {" "}
                  <Button
                    color="green"
                    onClick={() => {
                      localStorage.setItem(
                        "info",
                        JSON.stringify({
                          id: item.id,
                          nom: item.transporteur,
                          plaque: item.numero_plaque,
                        })
                      );
                    }}
                  >
                    détails
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="12">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <IndicateurDeChargement/>
    </div>
    
  );
};

export default PageResponsableChargement;
