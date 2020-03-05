
import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"
import employees from "./employee.json"
import Table from "./components/Table"
import TableB from "./components/TableB"


const App = () => {
 
    

  

  const handleInputChange = evt => {
    console.log(evt.target.value)

  setName(evt.target.value)  
  };

  const [emf, setEmf] = useState(1111)

  const [name, setName] = useState()
 
  const handleFormSubmit = evt => {
    evt.preventDefault()
    console.log(evt)
    
    
    var employeef = employees.find(employee => employee.name === name)
    
    setEmf("employeef")


  }

  
    return (
      <div>
        <Nav />
        <Home emf={emf} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />

    
          <Table>
            {employees.map(employee => (
            <TableB id={employee.id}
            name={employee.name}
            key={employee.id}
            occupation={employee.occupation}
            location={employee.location}
            />))}
            
          </Table>
      </div>



    )
  

}

export default App;
