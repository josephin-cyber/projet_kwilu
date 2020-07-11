import React from 'react'
import { Segment } from 'semantic-ui-react'
import PageResponsableChargement from './responsablechargement'
import DropdownExampleInput from './filtre'
import HeaderExampleFloating from './header'

const SegmentExampleRaised = () => (
  <div>
  <HeaderExampleFloating/>s
  <Segment raised>
    <br/>
    <br/><DropdownExampleInput />
   
  <PageResponsableChargement />
  </Segment>
  </div>
)

export default SegmentExampleRaised