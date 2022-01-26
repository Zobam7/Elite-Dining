import React from 'react'

class Radio extends React.Component {
    state = {
        value : "odin",
        value2 : "Zeus"
    }
    onChange = e => {
        this.setState({[e.target.name]:e.target.value})

    }
    render() { 
        const {value,value2} = this.state
        return (
            <form>
                <h1>Current Value is {value}</h1>
                <h1>Current Value2 is {value2}</h1>
                <label>
                    odin
                    <input type="radio" value = "odin" name = "value" checked = {value === "odin"} onChange = {this.onChange}/>

                </label>
                <label>
                    Thor
                    <input type="radio" value = "thor" name = "value" checked = {value === "thor"} onChange = {this.onChange}/>

                </label>
                <br />
                <br />
                <label>
                    Zeus
                    <input type="radio" value = "Zeus"name = "value2" checked = {value2 === "Zeus"} onChange = {this.onChange}/>

                </label>
                <label>
                    Hercules
                    <input type="radio" value = "Hercules" name = "value2" checked = {value2 === "Hercules"} onChange = {this.onChange}/>

                </label>
            </form>
        )
    }
}
 
export default Radio;