
import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"
import employees from "./employee.json"
import Table from "./components/Table"
import TableB from "./components/TableB"


var employeef;


const App = () => {
 
    

  

  const handleInputChange = evt => {
    console.log(evt.target.value)

  setName(evt.target.value)  
  };

  const [emf, setEmf] = useState("book")

  const [name, setName] = useState()
 
  const handleFormSubmit = evt => {
    evt.preventDefault()
    console.log(evt)
    
    
   employeef = employees.find(employee => employee.name === name)
    
    
    setEmf(employeef)


  }

  
    return (
      <div>
        <Nav />
        <Home name={name} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />

    
          <Table>
            <TableB find={emf}/>
            
          </Table>
      </div>



    )
  

}

export default App;
