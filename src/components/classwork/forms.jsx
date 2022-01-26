import React from 'react'

class Forms extends React.Component {
    state = {
        username : "",
        password : "",
        errors : ""
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({[e.target.name] : e.target.value})
    }
    formValidation=() =>{
        const {username, password} = this.state
        let isValid = true
        const errors = {}
        if(username.trim().length < 6){
            errors.usernameLength = "Username must be 6 or more characters"
            isValid = false
          }
        if(password.trim().length < 6){
            errors.passwordLength = "Password must be 6 or more characters"
            isValid = false
        }
        this.setState({errors})
        return isValid
        
    }
    onSubmit = (e) =>{
        e.preventDefault()
        const isValid = this.formValidation()
        console.log("onSumbit event being fired")
        if(isValid){

            this.setState ({username : "", password : ""})
        }
    }

    
    render() { 
        const {username, password,errors} = this.state
        return (
            <div>
                <h1>User Input : {username}</h1>
                <h1>Password : {password}</h1>
                <form onSubmit = {this.onSubmit}>
                    <input type="text"
                    value = {username} 
                    onChange = {this.onChange}
                    name = "username"/>
                    <input type="password"
                    value = {password} 
                    onChange = {this.onChange}
                    name = "password"/>
                    <button type="submit">Sumbit</button>
                    {Object.keys(errors).map((key)=>{
                        return <div key = {key}>{errors[key]}</div>
                    })}
                </form>
            </div>
        )
    }
}
 
export default Forms;