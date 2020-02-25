import React from "react"



function TableB (props){
    return(
        <tbody>
    <tr>
    <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
    </tr>
  </tbody>
    )
}

export default TableB