import React from "react";
import Footerr from "./Footerr";
import Mainn from "./Mainn";
// import Main from "./main";
// import Footer from "./footer";

class Homee extends React.Component {
  render() {
    return (
      <div className="container-fluid no-gutters m-0 p-0">
        <Mainn />
        <Footerr />
        
      </div>
    );
  }
}

export default Homee;