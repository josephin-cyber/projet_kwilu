import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleStackable = (props) => (
  <Table stackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Image véhicule</Table.HeaderCell>
        <Table.HeaderCell>Nom du client</Table.HeaderCell>
        <Table.HeaderCell>Nom du Chauffeur</Table.HeaderCell>
        <Table.HeaderCell>N°Plaque</Table.HeaderCell>
        <Table.HeaderCell>Marque</Table.HeaderCell>
        <Table.HeaderCell>Numero BL</Table.HeaderCell>
        <Table.HeaderCell>Quantité</Table.HeaderCell>
        <Table.HeaderCell>Nature</Table.HeaderCell>
        <Table.HeaderCell>Commentaire</Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>
    <Table.Body> 
      <tr>
          <td>{props.image}</td>
          <td>{props.nomClient}</td>
          <td>{props.chauffeur}</td>
          <td>{props.plaque}</td>
          <td>{props.marque}</td>
          <td>{props.numeroBl}</td>
          <td>{props.quantite}</td>
          <td>{props.nature}</td>
          <td>{props.commentaire}</td>
          
      </tr>
    </Table.Body>
  </Table>
)

export default TableExampleStackable