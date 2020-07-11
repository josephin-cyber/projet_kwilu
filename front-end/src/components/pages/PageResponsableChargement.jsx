import React from 'react'
import { Segment } from 'semantic-ui-react'
import PageResponsableChargement from './responsablechargement'
import DropdownExampleInput from './filtre'
import HeaderExampleFloating from './header'
import './css/pageResponsableChargement.css'
import FormExampleInlineField from "./ResearchBar";
import SearchExampleStandard from "./searchBar";

const SegmentExampleRaised = () => (
  <div>
  <HeaderExampleFloating/>s
  <Segment raised>
    <br/>
    <div className="box-field">
      {/*<div>*/}
      {/*  <DropdownExampleInput />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <FormExampleInlineField />*/}
      {/*</div>*/}
    </div>
    <SearchExampleStandard />
    <br/>
    <br/>
  <PageResponsableChargement />
  </Segment>
  </div>
)

export default SegmentExampleRaised