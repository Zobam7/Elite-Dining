import React from "react";


class API extends React.Component {
  state = {
    data: [],
    isLoaded: false,
  };

  componentDidMount() {
    const { data } = this.state;
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // this.setState({ data: data.splice(0, 10), isLoaded: true });
  }
  render() {
    console.log("render method called");
    const { data, isLoaded } = this.state;
    return (
      <div>
          <h1>hii</h1>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.map((userId) => {
              return <li key={userId.id}>{userId.title}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default API;
