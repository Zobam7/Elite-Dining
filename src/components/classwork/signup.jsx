import React from "react";
import axios from "axios"
import Swal from "sweetalert2"
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    errors: ""
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) })
  }
  formValidation = () => {
    const { username, password, email, confirmPassword } = this.state
    let isValid = true
    const errors = {}
    if (!username) {
      errors.usernameLength = "Username is Required"
      isValid = false
    }else if(username.trim().length < 6) {
      errors.usernameLength = " Username must be 6 or more characters"
      isValid = false
    }
    if (!email) {
      errors.email = "Email is Required"
      isValid = false
    }else if(!email.trim().includes("@")) {
      errors.email = "Email address is invalid "
      isValid = false
    }
    if (!password) {
      errors.passwordLength = "Password is Required"
      isValid = false
    }else if(password.trim().length < 6) {
      errors.passwordLength = "Password must be 6 or more characters"
      isValid = false
    }
    if (!confirmPassword) {
      errors.passwordLength2 = "Password is Required"
      isValid = false
    }else if(confirmPassword  !== password) {
      errors.passwordLength2 = "Password do not match"
      isValid = false
    }
    this.setState({ errors })
    return isValid
  }
  onSubmit = (e) => {
    e.preventDefault()
    const isValid = this.formValidation()
    console.log("onSumbit event being fired")
    if(isValid==true){

      const { username, password, email, confirmPassword, errors } = this.state
      const post = { username, password, email, confirmPassword }
      axios.post("https://reqres.in/api/users", post).then((response) => {
        console.log("Server Response loading...", response.data)
        if (response.data !== 0) {
          Swal.fire({
            title: "Success",
            text: "Signup was successful",
            icon: "success",
            confirmButtonText: "ok"
          })
          this.props.history.push("/signin")
        }
      })
    }
  }
  render() {
    const { username, password, email, confirmPassword, errors } = this.state
    return (
      <React.Fragment>
        <div className="container">
          <div className="col-12 col-md-6 mx-auto">
            <h2
              className="text-center mb-4 mt-4"
              style={{
                fontWeight: "bolder",
                fontFamily: "Verdana, Geneva, Tahoma, sanSerif"
              }}
            >
              ZOBAM
            </h2>
            <div className="row justify-content-center">
              <form className="w-75 border p-3 mb-4" style={{ fontWeight: 600, boxShadow : "0 0 3px rgba(0, 0, 0, 0.5)", backgroundImage : "images/background.jpeg" }} onSubmit={this.onSubmit}>
                <h4 className="mb-3 mt-3 text-center">CREATE ACCOUNT</h4>
                <div className="form-group">

                  <label>Username</label>
                  <input type="text" className="form-control" value={username}
                    onChange={this.onChange}
                    name="username" />
                    {errors.usernameLength && <p style={{color : "red"}}>{errors.usernameLength}</p>}

                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputpassword"
                    placeholder="password"
                    value={password}
                    onChange={this.onChange}
                    name="password"
                  />
                  {errors.passwordLength && <p style={{color : "red"}}>{errors.passwordLength}</p>}

                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" id="inputpassword" placeholder="Confirm-Password"
                    value={confirmPassword}
                    onChange={this.onChange}
                    name="confirmPassword" />
                    {errors.passwordLength2 && <p style={{color : "red"}}>{errors.passwordLength2}</p>}

                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={this.onChange}
                    name="email"
                  />
                  {errors.email && <p style={{color : "red"}}>{errors.email}</p>}

                </div>
                <button type="submit" className="btn btn-primary border-dark w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SignUp);
