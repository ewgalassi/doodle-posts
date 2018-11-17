import React, { Component } from "react";
import "./Palette.css";

class Palette extends Component {

  handleClick = (e) => {
    console.log(e.target.style.backgroundColor);
  };

  render() {
    return (
      <div className="palette content" onClick={this.handleClick}>
        <div className="shades"></div>
        <div className="colors1"></div>
        <div className="colors2"></div>
        <div className="colors3"></div>
        <div className="colors4"></div>
        <div className="selected"></div>
      </div>
    );
  }
}

export default Palette;