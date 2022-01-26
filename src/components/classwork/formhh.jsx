import React, {useState} from 'react'

const Formhh = () => {
    const [dropdown, setDropdown] = useState("apple")
    const [ischeck, setIscheck] = useState (false)
    const [radio, setRadio] = useState("apple")
    return (
        <form>
            <h1>Dropdown value is : {dropdown}</h1>
            <h1>Checkbox is {ischeck ? "true" : "false"}</h1>
            <h1>Radio button is {radio}</h1>
            <select value = {dropdown} onChange = {(e) => {setDropdown(e.target.value)}}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
                <option value="banana">Banana</option>
            </select>
            <br />
            <label>
                Checkbox : 
            </label>
            <input type="checkbox" checked = {ischeck} onChange = {(e)=>{setIscheck(e.target.checked)}} />
            <br />
            <label>Apple :</label>
            <input type="radio"
            checked = {radio === "apple"} 
            value = "apple"
            onChange = {(e)=>{setRadio(e.target.value)}}/>
            <label>Orange :</label>
            <input type="radio"
            checked = {radio === "orange"} 
            value = "orange"
            onChange = {(e)=>{setRadio(e.target.value)}}/>
            <label>Banana :</label>
            <input type="radio"
            checked = {radio === "banana"} 
            value = "banana"
            onChange = {(e)=>{setRadio(e.target.value)}}/>
        </form>
    )
}

export default Formhh