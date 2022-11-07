import React, { Component } from "react";
import ModelImg from "./img/model.jpg";
import styleModel from "./Model.module.css";

export default class Modal extends Component {
  render() {
    const { name, url, desc } = this.props.selectedItem;
    return (
      <div className={styleModel.item}>
        <img className="rounded mx-auto d-block" src={ModelImg} alt="" />

        <div>
          <img className={styleModel.itemImg} src={url} alt="" />
        </div>
        <div className={styleModel.title}>
          <h3 style={{ color: "blueviolet" }}>{name}</h3>
          <p className="fw-bolder text-white">{desc}</p>
        </div>
      </div>
    );
  }
}
