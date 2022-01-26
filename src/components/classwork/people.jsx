import React from 'react'

class People extends React.Component {
    state = {
        people : [
            {id : 1, firstName : "Peter", lastName : "John"},
            {id : 2, firstName : "Paul", lastName : "James"},
            {id : 3, firstName : "David", lastName : "Jane"},
        ]
    }
    render() { 
        const { people } = this.state
        return (
            <ul>
                {people.map((person) => {
                    return (
                        <li key = {person.id}>Person name is {`${person.firstName} ${person.lastName}`}</li>
                    ) 
                })}
            </ul>
        )
    }
}
 
export default People;