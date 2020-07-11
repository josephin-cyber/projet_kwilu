import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const DiagrammeCirculaire = () => {
  const [chartData, setChartData] = useState({});

  const diagramme = () => {
    let sucre10X5 = 0;
    let sucreVCOM = 0;
    let sucreBSB2 = 0;
    let quantiteSucre = [];

    axios
      .get("https://appkwilu2.herokuapp.com/detail_produits/")
      .then((res) => {
        for (const elt of res.data) {
          switch (elt.produitId) {
            case 1:
              sucre10X5 += parseInt(elt.quantite);
              break;
            case 2:
              sucreVCOM += parseInt(elt.quantite);
              break;
            case 3:
              sucreBSB2 += parseInt(elt.quantite);
              break;
          }
        }

        quantiteSucre = [sucre10X5, sucreVCOM, sucreBSB2];
        console.log(quantiteSucre);
        setChartData({
          labels: ["Sucre 10X5", "Sucre VCOM", "Sucre BSB2"],
          datasets: [
            {
              label: "Chargement par société",
              backgroundColor: ["#FF6384", "#3cba9f", "#36A2EB"],
              data: quantiteSucre,
            },
          ],
        });
      })
      .catch((err) => console.log(err));
    // console.log(quantiteSucre);
  };

  useEffect(() => {
    diagramme();
  }, []);

  return (
    <div className="chart">
      <Pie
        data={chartData}
        width={120}
        options={{
          title: {
            display: true,
            text: "Chargements par type de sucre",
          },
          legend: {
            display: true,
            position: "bottom",
            align: "start",
          },
        }}
      />
    </div>
  );
};

export default DiagrammeCirculaire;
