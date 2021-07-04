import React, { Component } from "react";

import { Button, Form, Col, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'


class Operations extends Component {
    constructor() {
        super();
        this.state = {
            amount: 0,
            Vendor: '',
            Category: ''
        }

    }

    changeInput = (e) => {

        let inputVal = e.target.value;
        let id = e.target.id;
        if (id === "amount-input") {
            this.setState({ amount: parseInt(inputVal) })
        }
        else if (id === "vendor-input") {
            this.setState({ Vendor: inputVal })
        }
        else {
            this.setState({ Category: inputVal })
        }
    }
    depositMoney = () => {
        if (this.state.amount != 0 && this.state.Vendor && this.state.Category) {
            this.props.depositOrWithdrawMoney({ amount: this.state.amount, vendor: this.state.Vendor, category: this.state.Category })
        }
    }
    withdrawMoney = () => {
        if (this.state.amount != 0 && this.state.Vendor && this.state.Category) {
            this.props.depositOrWithdrawMoney({ amount: 0 - this.state.amount, vendor: this.state.Vendor, category: this.state.Category })
        }
    }

    render() {
        return (
            <div id="container">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={1}>
                        Amount :
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control type="text" name="" id="amount-input" value={this.state.amount} placeholder='amount' onChange={this.changeInput} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={1}>
                        Vendor :
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control type="text" name="" id="vendor-input" value={this.state.Vendor} placeholder='Vendor' onChange={this.changeInput} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={1}>
                        Category :
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control type="text" className="mb-3" name="" value={this.state.Category} placeholder='Category' onChange={this.changeInput} />
                    </Col>
                </Form.Group>
                <div>

                    <Button variant="primary" size="lg" block id="deposit" onClick={this.depositMoney}>Deposit</Button>
                    <Button variant="secondary" size="lg" block id="withdraw" onClick={this.withdrawMoney}>Withdraw</Button>
                </div>

            </div>

        );
    }
}

export default Operations