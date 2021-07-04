import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';
import Transcations from './components/Transactions';
import Operations from './components/Operations';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import Transaction from './components/Transaction';
import Breakdown from './components/Breakdown';

import { Badge, Container, Row, Col, Nav } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      transcations: [
      ]
    }
  }

  async getTransaction() {
    return axios.get("http://localhost:3005/transactions")
  }
  async getDataFromDb() {
    const response = await this.getTransaction()
    this.setState({ transcations: response.data })
  }
  async componentDidMount() {
    this.getDataFromDb()
  }

  depositOrWithdrawMoney = async (transaction) => {
    let postResponse = await axios.post("http://localhost:3005/transactions", transaction)
    if (postResponse.status === 201) {
      this.getDataFromDb()

    }
  }

  deleteItem = async (transaction) => {
    const tempData = [...this.state.transcations]
    const deletTrans = tempData.find(t => t === transaction)
    await axios.delete("http://localhost:3005/transactions", { data: deletTrans })
    this.getDataFromDb()
  }

  getTransactionByGroupWithAmount = () => {
    let result = {}
    let transactions = this.state.transcations
    for (let key in transactions) {
      if (result[transactions[key].category]) {
        result[transactions[key].category] = result[transactions[key].category] + transactions[key].amount
      }
      else {
        result[transactions[key].category] = transactions[key].amount
      }
    }

    return result
  }


  render() {
    let sumOfAmounts = this.state.transcations.reduce((partial_sum, a) => partial_sum + a.amount, 0);


    return (
      <Router>
        <div>
          <h1>
            Your Balance : {sumOfAmounts > 500 ? <Badge variant="success">{sumOfAmounts}</Badge>: <Badge variant="danger">{sumOfAmounts}</Badge>}
          </h1>
          <Nav fill variant="tabs" >
            <Nav.Item>
              <Nav.Link href="/Transcations">Transcations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Operations">Operations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/group">group</Nav.Link>
            </Nav.Item>
          </Nav>

          <Route path="/Transcations" render={() => <Transcations transcations={this.state.transcations} deleteItem={this.deleteItem} />} />
          <Route exact path="/Operations" render={() => <Operations depositOrWithdrawMoney={this.depositOrWithdrawMoney} />} />
          <Route exact path="/group" render={() => <Breakdown transcations={this.getTransactionByGroupWithAmount()} />} />



        </div>
      </Router >
    );

  }
}

export default App;
