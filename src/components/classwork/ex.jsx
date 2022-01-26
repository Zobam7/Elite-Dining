import React from 'react'

class Example extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { counter : 0 }
    //     this.increaseCounter = this.increaseCounter.bind(this)
    // }

    state = {counter : 0}

    increaseCounter  = (num,e) =>{
        console.log(e)
        this.setState({counter : this.state.counter + num})
    }
    decreaseCounter  = () =>{
        this.setState({counter : this.state.counter -1})
        
    }
    isDisabled = () => {
        if(this.state.counter <= 0){
            return "disabled"
        }
    }
    render() { 
        return ( 
            <div>
                <h1> Counter</h1>
                <h2>{this.state.counter}</h2>
                {/* <button onClick = {this.increaseCounter}>Click Me</button> */}
                <Child  increaseCounter = {this.increaseCounter}/>
                <button onClick = {this.decreaseCounter} disabled = {this.isDisabled()}>Click Me</button>
            </div>
         )
    }
}

const Child = ({increaseCounter}) => {
    return (
        <div>
            <h1>Child Component</h1>
            <button onClick = {(e)=>{increaseCounter(10,e)}}>Click Me</button>
        </div>
    )
}
 
export default Example;
