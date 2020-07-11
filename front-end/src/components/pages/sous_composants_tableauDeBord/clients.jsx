import React, { useState, useEffect } from "react";
import { List } from "semantic-ui-react";
import axios from "axios";
import Loader from "./loader";


const Clients = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get("https://appkwilu2.herokuapp.com/detail_produits")
    .then((res) => {
      setNames([...res.data]);
      console.log(res.data);
      setLoading(false);
    }
    );
  }, [setNames]);

  return (
    <List animated divided verticalAlign="middle">
      {loading && <Loader />}
      {!loading && (
        <>
          {names.map((name, i) => {
            return (
              <List.Item key={i}>
                <img
                  src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "blue",
                    borderRadius: "50%",
                  }}
                />
                <List.Content>
                  <List.Header as='a'>{name.client.nom_client}</List.Header>
                  <strong style={{ color: "#422040" }}>{name.quantite}</strong>
                  
                </List.Content>
              </List.Item>
            );
          })}
        </>
      )}
    </List>
  );
};

export default Clients;
