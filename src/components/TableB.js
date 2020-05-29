import React from "react"
import employees from "../employee.json"



function TableB(props) {
  console.log(props.find)
  var employees1;

  if (props.find == "book"){

   employees1 = employees.map(employee => {
    return (
      <tbody>
        <tr>
          <th scope="row">{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.occupation}</td>
          <td>{employee.location}</td>
        </tr>
      </tbody>
    )
  }
  )} else{
    return (
      <tbody>
        <tr>
          <th scope="row">{props.find.id}</th>
          <td>{props.find.name}</td>
          <td>{props.find.occupation}</td>
          <td>{props.find.location}</td>
        </tr>
      </tbody>
    )
  
  }

  return(
    [employees1]
  )
}

export default TableB

