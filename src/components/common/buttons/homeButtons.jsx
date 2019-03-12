import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeButtons extends Component {
  render() {
    return (
      <div id="buttons-wrapper">
        <Link to="/play">
          <button type="button" className="btn btn-warning btn-lg m-4">
            Start
          </button>
        </Link>
        <Link to="/how-to-play">
          <button type="button" className="btn btn-warning btn-lg m-4">
            How to play?
          </button>
        </Link>
      </div>
    );
  }
}

export default HomeButtons;
