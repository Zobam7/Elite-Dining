import React from "react";
import axios from "axios"
import Swal from "sweetalert2"
import { withRouter } from 'react-router-dom'





class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    email : "",
    errors: {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) })

  }
  formvalid = () => {
    const { username, password,email } = this.state
    let isValid = true
    const errors = {}
    if (!username) {
      errors.usernameLength = "Username is Required"
      isValid = false
    } else if (username.trim().length < 6) {
      errors.usernameLength = "Username must be 6 or more characters"
      isValid = false
    }
    if (!password) {
      errors.passwordLength = "Password is Required"
      isValid = false
    } else if (password.trim().length < 6) {
      errors.passwordLength = "Password must be 6 or more characters"
      isValid = false
    }
    if (!email) {
      errors.email = "Email is Required"
      isValid = false
    }else if(!email.trim().includes("@")) {
      errors.email = "Email address is invalid "
      isValid = false
    }
    this.setState({ errors })
    return isValid
  }


  onSubmit = (e) => {
    e.preventDefault()
    const isValid = this.formvalid()
    if(isValid==true){

      const { username, password, email,errors } = this.state
      const post = { email, password }
      axios.post("https://reqres.in/api/login", post).then((response) => {
        console.log("Server Response loading...", response.data)
        if (response.data !== 0) {
          Swal.fire({
            title: "Success",
            text: "Signin was successful",
            icon: "success",
            confirmButtonText: "ok"
          })
          const token = response.data.token
          sessionStorage.setItem("token", token)
          sessionStorage.setItem("username", username)
          sessionStorage.setItem("email", email)
          this.props.history.push("/dashboard")
        }
      })
    }
    
  }
  render() {
    const { username, password, errors,email } = this.state
    console.log("Props", this.state)
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <h2
                className="text-center mb-4 mt-4"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Verdana, Geneva, Tahoma, sanSerif",
                }}
              >
                ShopSS
              </h2>
              <form onSubmit={this.onSubmit} className="w-75 border p-3 mb-4 justify-content-center mx-auto" style={{ fontWeight: 600, boxShadow : "0 0 3px rgba(0, 0, 0, 0.5)" }}>
                <h4 className="mb-3 mt-3 text-center">LOGIN</h4>
                <div className="form-group">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    type="text"
                    className="form-control"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                  />
                {errors.usernameLength && <p style={{color : "red"}}>{errors.usernameLength}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    type="text"
                    className="form-control"
                    placeholder="username"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                {errors.email && <p style={{color : "red"}}>{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    type="password"
                    id="inputpassword"
                    placeholder="password"
                    value={password}
                    name="password"
                    onChange={this.onChange}
                  />
                {errors.passwordLength && <p style={{color : "red"}}>{errors.passwordLength}</p>}
                </div>
                <button className="btn btn-primary w-100">SIGN-IN</button>
                {/* {Object.keys(errors).map((key) => {
                  return <div key={key}>{errors[key]}</div>
                })} */}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SignIn);
