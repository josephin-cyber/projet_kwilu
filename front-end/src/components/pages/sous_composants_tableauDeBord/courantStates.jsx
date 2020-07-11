import React from 'react'
import { Icon, Step, Grid } from 'semantic-ui-react'


export default function CourantStates () {
  return(<Grid.Column width={5}>
  <Step.Group size='small'>
    <Step style={{border:'1px solid #E57A44'}}>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>13</Step.Title>
        <Step.Description>Aux parking</Step.Description>
      </Step.Content>
    </Step>

    <Step style={{border:'1px solid #FFE381'}}>
      <Icon name='sync' />
      <Step.Content>
        <Step.Title>17</Step.Title>
        <Step.Description>En chargement</Step.Description>
      </Step.Content>
    </Step>

    <Step completed style={{border:'1px solid #44FFD1'}} >
      <Icon name='info' />
      <Step.Content>
        <Step.Title>6</Step.Title>
        <Step.Description>Camions chargé</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
  </Grid.Column>
)
}