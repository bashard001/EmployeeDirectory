import React from "react"


function Table (props){

    return(
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Occupation</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  {props.children}
</table>

    )

}

export default Table