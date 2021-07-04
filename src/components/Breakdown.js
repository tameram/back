import React, { Component } from "react";
import { Table } from 'react-bootstrap';


class Breakdown extends Component {

    displayAmount = () => {
        const myKeys = Object.keys(this.props.transcations)
        return myKeys.map(c => {
            return <tr> <td>{c}</td> <td>{this.props.transcations[c]}</td></tr>
        })
    }
    render() {
        return (

            <div id="transactions">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amont($)</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.displayAmount()}</tbody></Table>
            </div>
        );
    }
}

export default Breakdown