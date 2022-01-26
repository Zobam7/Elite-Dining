import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
    styles = {
        list: {
            display: "inline-block",
            margin: "5px"
        }
    }
  render() {
    return (
      <React.Fragment>
        <img src="../logo192.png" alt=""  width = "60px" height = "60px"/>
        <ul style = {{listStyle: "none", float:"right"}}>
          <li style = {this.styles.list}><FontAwesomeIcon icon = {faUser}/>SignUp</li>
          <li style = {this.styles.list}>SignIn</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
