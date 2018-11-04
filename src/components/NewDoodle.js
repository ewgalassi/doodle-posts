import React, { Component } from "react";
import "./NewDoodle.css";

class NewDoodle extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  componentDidMount() {
    this.doodle();
  }

  doodle() {
    const canvas = document.querySelector('.noodle');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx.strokeStyle = '#000000';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    function draw(e) {
      if (!isDrawing) return;
      // console.log(e);
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
  }

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
      <div className="newDoodle content">
        <canvas className="noodle"></canvas>
        <br></br>
        <button>Save</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default NewDoodle;