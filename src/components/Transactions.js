import React, { Component } from "react";
import Transcation from "./Transaction";
import { Table } from 'react-bootstrap';

class Transcations extends Component {
  render() {
    let transcations = this.props.transcations;
    return (


      <div id="transactions">
        <Table striped bordered hover>
          <thead>
            <tr>

              <th>Amont($)</th>
              <th>Vendor</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transcations.map((tran, index) => {
              return (
                <Transcation deleteItem={this.props.deleteItem} key={`t${index}`} transcation={tran} />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Transcations