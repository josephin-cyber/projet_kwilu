import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import FormulaireConnexion from "./components/FormulaireConnexion";
import FormulaireGI from './components/pages/FormulaireGI';
import PageResponsableChargement from './components/pages/PageResponsableChargement';
import TableauDeBord from './components/pages/tableaud_de_bord.jsx'
import Accueil from './components/pages/Accueil'
import DetailsChargements from './components/pages/DetailsChargements'
import HomePage from './components/pages/homePage'
import SuccessAnimation from "./components/pages/SuccessAnimation";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <FormulaireConnexion />
                </>
              )}
            />
            <Route path="/homepage" component={HomePage}/>
            <Route path="/formulairegi" component={FormulaireGI}/>
            {/* <Route path="/Accueil" component={Accueil}/> */}
            <Route path="/Details" component={DetailsChargements}/>
            <Route path="/PageResponsableChargement" component={PageResponsableChargement}/>
            <Route path="/tableauDebord" component={TableauDeBord}/>
            <Route path="/animation" component={SuccessAnimation}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
