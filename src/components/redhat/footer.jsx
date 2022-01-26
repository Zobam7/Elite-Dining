import React from "react";

class Footer extends React.Component {
    render() {
      const today = new Date();
      const year = today.getFullYear();
    return (
      <div>
        <span>All Rights Reserved. Copyright &copy; {year}</span>
      </div>
    );
  }
}

export default Footer;
