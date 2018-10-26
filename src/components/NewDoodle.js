import React, { Component } from "react";
import "./NewDoodle.css"

class NewDoodle extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();


    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
          <div className="noodle"></div>
        <button>Save</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default NewDoodle;