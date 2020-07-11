import React, { useEffect, useState } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import QuantityContext from "../ContextTableauDeBord/QuantityProvider";

const Section3 = () => {
  const [quantities, setQuantities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://appkwilu2.herokuapp.com/detail_produits",
    }).then((res) => {
      setQuantities(res.data);
      setLoading(false);
    });
  }, [setQuantities]);

  const tab = [];
  for (let i in quantities) {
    tab.push(quantities[i].quantite);
  }
  function sum(list) {
    if (!list.length) {
      return 0;
    }
    return list[0] + sum(list.slice(1));
  }

  return (
    <Grid.Column>
      <Segment style={{ height: "8rem", padding: "1rem" }}>
        <div className="Segment3">
          <FontAwesomeIcon className="Icon2" icon={faWeightHanging} />
          <Header
            style={{
              marginLeft: "60px",
              marginTop: "1px",
              fontFamily: "Prata-serif",
            }}
          >
            {sum(tab)} (Tonnes)
          </Header>
        </div>
        <strong className="LegendMarchandises">Marchandises</strong>
      </Segment>
    </Grid.Column>
  );
};

export default Section3;
