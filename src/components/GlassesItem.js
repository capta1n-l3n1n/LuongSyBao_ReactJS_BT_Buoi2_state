import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    return (
      <div className="item">
        <button
          onClick={() => {
            this.props.selectedItem(this.props.glasses);
          }}
        >
          {" "}
          <img src={this.props.glasses.url} alt="" className="img-fluid" />
        </button>
      </div>
    );
  }
}
