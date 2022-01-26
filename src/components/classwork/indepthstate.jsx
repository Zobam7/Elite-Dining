import React from 'react'

class Indepth extends React.Component {
    state = {
        counter : 0,
        name : "Doe",
        person : {firstname : "Peter", lastName : "Bob"},
        people : ["bob", "billy", "mick"]
    }
    updateSate = () =>{
        const {person, people, counter} = this.state
        // this.setState ({name : "peter"})
        // this.setState({person: {firstname : "billy"}})
        // this.setState({...person,firstname : "billy"})
        // this.setState({people : [...people, "olisa"]})
        this.setState((state, props)=>{
            return {counter : state.counter + 1}
        })
        this.setState((state, props)=>{
            return {counter : state.counter + 1}
        })
        this.setState((state, props)=>{
            return {counter : state.counter + 1}
        })
        this.setState((state, props)=>{
            return {counter : state.counter + 1}
        })
        
    }
    render() { 
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick = {this.updateSate}>Click</button>
            </div>
        )
    }
}
 
export default Indepth;