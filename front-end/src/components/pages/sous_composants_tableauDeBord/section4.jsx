import React from 'react'
import { Grid, Header, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding
} from "@fortawesome/free-solid-svg-icons";



export default function (){
  return (<Grid.Column>
        <Segment style={{ height: "8rem", padding: "1rem" }}>
          <div className='Segment4'>
            <FontAwesomeIcon
              className='Icon3'
              icon={faBuilding}
            /><Header style={{marginLeft:'60px', marginTop:'1px', fontFamily: 'Prata-serif'}}>8</Header>
          </div>
          <strong className='LegendMarchandises'>Sociétés</strong>
        </Segment>
      </Grid.Column>
)
}