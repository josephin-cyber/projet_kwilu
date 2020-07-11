import React, { useState, useEffect } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loader from "./loader";

export default function Section1() {
  const [camion, setCamion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://appkwilu2.herokuapp.com/detail_produits/",
    }).then((res) => {
      setCamion(res.data);
      setLoading(false);
    });
  }, [setCamion]);

  const tab = [];
  for (let i in camion) {
    const camionsCharge = camion[i].vehicule.heure_charge;
    if (camionsCharge !== null) {
      tab.push(camionsCharge);
    }
  }
  return (
    <Grid.Column>
      {loading && <Loader />}
      {!loading && (
      <>
        <Segment attached style={{ height: "8rem", padding: "1rem" }}>
          <div className="Segment1">
            <FontAwesomeIcon className="Icon1" icon={faTruck} />
            <Header
              style={{
                marginLeft: "60px",
                marginTop: "1px",
                fontFamily: "Prata-serif",
              }}
            >
              {tab.length}
            </Header>
          </div>
          <div>
            <strong className="Legend" style={{ textAlign: "center" }}>
              Camions chargés
            </strong>
          </div>
        </Segment>
      </>
      )}
    </Grid.Column>
  );
}
