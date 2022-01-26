import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    backgroundcolor: "",
  };

  getRandomColors = () => {
    let colors = [
      "primary",
      "light",
      "danger",
      "secondary",
      "info",
      "success",
      "warning",
    ];
    let randnum = Math.floor(Math.random() * colors.length);
    console.log(randnum);
    let classes = "container-fluid w-100 h-100 bg-";
    classes += colors[randnum];
    this.setState({ backgroundcolor: classes });
  };

  componentDidMount() {
    this.getRandomColors();
  }
  styles = {
    fontSize: "18px",
    fontWeight: "bold",
    imageUrl: "logo192.png",
    imageWidth: "100px",
    imageHeight: "100px",
  };

  formatCount = () => {
    const cnt = this.state.count;
    return cnt === 0 ? "Zero" : cnt;
  };
  getBadgeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  isDisabled = () => {
    if (this.state.count <= 0) {
      return "disabled";
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  handleIncrement2 = () => {
    this.setState({ count: this.state.count + 2 });
  };
  handleDecrement2 = () => {
    this.setState({ count: this.state.count - 2 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <img
            alt="React"
            src={this.styles.imageUrl}
            width={this.styles.imageWidth}
            height={this.styles.imageHeight}
          />
          <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
          <button className="btn btn-danger" onClick={this.handleIncrement}>
            +
          </button>
          <button
            className="btn btn-primary"
            onClick={this.handleDecrement}
            disabled={this.isDisabled()}
          >
            -
          </button>
          <button className="btn btn-danger" onClick={this.handleIncrement2}>
            +2
          </button>
          <button
            className="btn btn-primary"
            onClick={this.handleDecrement2}
            disabled={this.isDisabled()}
          >
            -2
          </button>
          <button onClick={this.reset}>reset</button>
        </div>
        <button>Delete</button>
      </React.Fragment>
    );
  }
}

export default Counter;
