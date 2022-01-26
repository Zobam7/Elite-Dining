import React, {useState} from 'react'

const Hook = (props) => {
    const [name, setName] = useState("bob")
    const [counter, setCounter] = useState(0)
    const [person, setPerson] = useState ({name : "Pablo", age : 500})
    const [people, setPeople] = useState(["izu", "offor", "chi"])
    const [math, setMath] = useState(()=>{
        console.log("being intialed")
        return 1+1
    })
    const updateState = () =>{
        setName(name == "bob" ? "Peter" : "bob")
        setCounter(state => state + 1)
        setCounter(state => state + 1)
        setCounter(state => state + 1)
        setCounter(state => state + 1)
        
        setPerson({...person, name : "Olisa"})
        setPeople([...people, "Pablo"])
    }
    return (
        <div>
            <h1>{name}</h1>
            <h1>{counter}</h1>
            {/* <ul>
                {people.map((person, index) => {
                    return <li key = {index}>{person}</li>
                })}
            </ul>
            <h1>{person.name + " is" + " " + person.age + " " + "years old"}</h1> */}
            <button onClick ={updateState}>Update</button>
        </div>
    )
}

export default Hook
