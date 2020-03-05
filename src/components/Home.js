import React, {useState} from "react"


function Home(props) {
    
    return(
        <form>
            <h3>Seach for Employees</h3>
            <h1>{props.emf}</h1>
            <input onChange={props.handleInputChange} name="employeename" placeholder="enter name" type="text"></input>
            <button type="submit" onClick={props.handleFormSubmit}>Submit</button>
        </form>
    )
}


export default Home;