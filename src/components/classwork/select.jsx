import React from 'react'

class Sele extends React.Component {
    state = {
        value : "peter",
        options : ["peter", "bob", "billy"]
    }
    onChange = e =>{
        this.setState({value : e.target.value})
    }
    onSubmit = e =>{
        e.preventDefault()
        console.log(this.state.value)
    }
    render() { 
        const {value,options} = this.state
        return (
            <div>
                <form onSubmit = {this.onSubmit}> 
                    <h1>Current Choice now : {value}</h1>
                    <label htmlFor="options">Pick an Option</label>
                    <select id="options" value = {value} onChange = {this.onChange}>
                    {options.map((val,index)=>{
                    return <option key = {index} value = {val}>{val}</option>
                    })}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
 
export default Sele;