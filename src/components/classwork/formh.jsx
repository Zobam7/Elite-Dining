import React, {useState} from 'react'

const Formh = () => {
    // const [username, setUsername] = useState(" ")
    // const [password, setPassword] = useState(" ")
    const [user, setUser] = useState({username : "", password : ""})
    const onChange = e => {
        setUser ({...user, [e.target.name] : e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        console.log(user)
    }
    return (
        <form onSubmit = {onSubmit}>
            <h1>Username is : {user.username}</h1>
            <h1>Password is : {user.password}</h1>
            <input type="text" value = {user.username} name = "username" onChange = {onChange}/>
            <input type="password" value = {user.password} name = "password" onChange = {onChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Formh