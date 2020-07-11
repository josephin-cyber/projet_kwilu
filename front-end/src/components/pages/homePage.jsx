import React from "react";
import { Grid, Container } from "semantic-ui-react";
import BoxOne from "./sous_composants_homepage/BoxOne";
import BoxTwo from "./sous_composants_homepage/BoxTwo";
import BoxThree from "./sous_composants_homepage/BoxThree";
import { Spring } from "react-spring/renderprops";
import HeaderExampleFloating from "./header";
import HomePageTitle from "./sous_composants_homepage/HomaPageTitle";

const HomePage = () => {
  return (
    <>
    
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => {
          return (
            <div style={props}>
              <HeaderExampleFloating />
            </div>
          );
        }}
      </Spring>
      
      <Container>
        <HomePageTitle />
        <Grid columns={3} style={{ marginTop: "100px" }}>
          <BoxTwo />
          <BoxThree />
          <BoxOne />
        </Grid>
      </Container>
    </>
  );
};



export default HomePage;
