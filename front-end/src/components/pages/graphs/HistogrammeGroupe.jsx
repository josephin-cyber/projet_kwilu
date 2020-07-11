import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";

const HistogrammeGroupe = () => {
  const [chartData, setChartData] = useState({});
  const histogramme = () => {
    // const typeSucre = [];
    // const jours = [];
    const sucre10X5 = [];
    const sucreVCOM = [];
    const sucreBSB2 = [];

    // const jourDeLaSemaine = [];
    // jourDeLaSemaine[0] = "Dimanche";
    // jourDeLaSemaine[1] = "Lundi";
    // jourDeLaSemaine[2] = "Mardi";
    // jourDeLaSemaine[3] = "Mercredi";
    // jourDeLaSemaine[4] = "Jeudi";
    // jourDeLaSemaine[5] = "Vendredi";
    // jourDeLaSemaine[6] = "Samedi";

    axios
      .get("https://appkwilu2.herokuapp.com/detail_produits/")
      .then((res) => {
        for (const elt of res.data) {
          // typeSucre.push(elt.produit.type_produit);

          // jours.push(jourDeLaSemaine[new Date(elt.createdAt).getDay()]);

          switch (elt.produitId) {
            case 1: // Cas du sucre 10X5
              sucre10X5.push(parseInt(elt.quantite));
              break;
            case 2: // Cas sucre VCOM
              sucreVCOM.push(parseInt(elt.quantite));
              break;
            case 3: // Cas sucre BSB2-5
              sucreBSB2.push(parseInt(elt.quantite));
              break;
          }
        }

        // console.log(jours);
        setChartData({
          labels: [
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
            "Dimanche",
          ],
          datasets: [
            {
              label: "Sucre 10X5",
              data: sucre10X5,
              backgroundColor: "#FF5733",
            },
            {
              label: "Sucre VCOM",
              data: sucreVCOM,
              backgroundColor: "#337DFF",
            },
            {
              label: "Sucre BSB2-5",
              data: sucreBSB2,
              backgroundColor: "#337DFF",
            },
          ],
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    histogramme();
  }, []);

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Chargement hebdomadaire par type de sucre",
          },
          legend: {
            display: true,
            position: "top",
          },
          scales: {
            xAxes: [
              {
                barPercentage: 0.2,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default HistogrammeGroupe;
