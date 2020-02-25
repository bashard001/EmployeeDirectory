import React from "react"


function Home(props) {
    return(
        <div>
            <h3>Seach for Employees</h3>
            <input onChange={props.handleInputChange} name="employeename" placeholder="enter name" type="text"></input>
            <button type="submit" onClick={props.handleFormSubmit}>Submit</button>
        </div>
    )
}


export default Home;