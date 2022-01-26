import React from "react";
import "./navbarr.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, fa, faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink, withRouter, Redirect } from "react-router-dom"


class Navbarr extends React.Component {
  signout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("email")
    // <Redirect  to="/signin" />
    // this.props.history.push("/")
    
  }
 
  auth = () => {
    const token = sessionStorage.getItem("token")
    let menu = (
       <ul
        className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll"
      >
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup"><FontAwesomeIcon icon={faUser} className="mr-1" />
            Sign-Up
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Sign-In</NavLink>
        </li>
      </ul>
    )
    if (token !== null) {
      menu = <ul
        className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll"
      >
        <li className="nav-item">
          <NavLink className="nav-link" to="/account"><img src="images/profilepic.jpeg" alt="" className="profilepic"/>
            {sessionStorage.getItem("username")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin" onClick={this.signout}>Sign-Out</NavLink>
        </li>
      </ul >

    }
    return menu
  }
  render() {
    console.log("Props", this.props)
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <span style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>ZOBAM</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex  col-md-6 p-0 ml-md-5 ">
          <div className="input-group col-12 p-0">
            <input
              className="form-control "
              type="text"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-danger text-dark" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
        <div className="collapse navbar-collapse" id="navbarScroll">
          {this.auth()}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbarr);
