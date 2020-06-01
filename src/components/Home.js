import React from "react"


function Home(props) {

    return (
        <form>
            <div className="form-group px-3">
                <h3>Seach for Employees</h3>
                <h1>{props.name}</h1>
                <input onChange={props.handleInputChange} name="employeename" placeholder="enter name" type="text"></input>
                <button type="submit" className="btn btn-info mx-1" onClick={props.handleFormSubmit}>Submit</button>
            </div>

        </form>
    )
}


export default Home;