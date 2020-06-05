import React from "react"
import employees from "../employee.json"



function TableB(props) {
  console.log(props.find)
  var employees1;

  if (props.find.length < 1) {

    employees1 = employees.map(employee => {

      return (
        <tbody key={employee.id} >
          <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.occupation}</td>
            <td>{employee.location}</td>
          </tr>
        </tbody>
      )
    })
  } else if (props.find.length <= 100) {

    employees1 = employees.filter(employee => props.find.length >= 2 ? (employee.name[0].toLowerCase() == props.find[0].toLowerCase() && employee.name[1].toLowerCase() == props.find[1].toLowerCase()) : (employee.name[0].toLowerCase() == props.find[0].toLowerCase()))
    console.log(employees1)

    return (
      employees1.map(employee => {
        return (
          <tbody key={employee.id} >
            <tr>
              <th scope="row">{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.occupation}</td>
              <td>{employee.location}</td>
            </tr>
          </tbody>
        )
      }))




  } else {
    return (
      <tbody>
        <tr>
          <th scope="row">{props.find.id}</th>
          <td>{props.find.name}</td>
          <td>{props.find.occupation}</td>
          <td>{props.find.location}</td>
        </tr>
      </tbody>)
  }



  return (
    [employees1]
  )
}

export default TableB

