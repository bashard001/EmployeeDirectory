import React, { Component } from 'react';
// import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"
import employees from "./employee.json"
import Table from "./components/Table"
import TableB from "./components/TableB"


class App extends Component {
  state = {
    name: "",
    employees

  }

  handleInputChange = evt => {
    console.log(evt)

    this.setState({ name: evt.target.value });
  }

  handleFormSubmit = evt => {
    evt.preventDefault()
    console.log(this.state.employees)


  }

  render() {
    return (
      <div>
        <Nav />
        <Home handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />

        <h1>
          {this.state.name}</h1>
          <Table>
            {this.state.employees.map(employee => (
            <TableB id={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            location={employee.location}/>))}
            
          </Table>
      </div>



    )
  }

}

export default App;
