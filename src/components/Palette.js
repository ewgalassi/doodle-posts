import React, { Component } from "react";
import "./Palette.css";

class Palette extends Component {

  render() {
    return (
      <div className="palette content">
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