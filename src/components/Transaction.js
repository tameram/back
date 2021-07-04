import React, { Component } from "react";
import { Button  } from 'react-bootstrap';

class Transaction extends Component {
  deleteItem =()=>{
    this.props.deleteItem(this.props.transcation)
  }
    render() {
      let transcation = this.props.transcation;
      return (
        <tr>
            <td>{transcation.amount}</td>
            <td>{transcation.vendor}</td>
            <td>{transcation.category}</td>
            <Button  variant="danger" onClick={this.deleteItem}>-</Button >
        </tr>
      );
    }
}

export default Transaction