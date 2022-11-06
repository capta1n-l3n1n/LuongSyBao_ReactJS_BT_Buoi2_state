import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
import Model from "./Model";
import ModelImg from "./img/model.jpg";
import styleList from "./GlassesList.module.css";
export default class GlassesList extends Component {
  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    selectedItem: null,
  };
  selectedItem = (data) => {
    this.setState({
      selectedItem: data,
    });
  };
  // renderModel(e) {
  //   e.preventDefault();

  //   return (
  //     <div className="col">
  //       <div className="item">
  //         <img src={ModelImg} alt="" />
  //       </div>
  //     </div>
  //   );
  // }

  //   renderGlasses() {
  //     const html = this.glasses.map((item) => {
  //       return (
  //         <div key={item.id} className="model">
  //           <Model glasses={item} />
  //         </div>
  //       );
  //     });
  //     return html;
  //   }
  renderItem() {
    const html = this.glasses.map((item) => {
      return (
        <div key={item.id} className="col-2">
          <GlassesItem glasses={item} selectedItem={this.selectedItem} />
        </div>
      );
    });
    return html;
  }
  render() {
    return (
      <div className={styleList.project}>
        <div className="bg-dark bg-opacity-50 pb-5">
          <div className="text-center bg-dark text-light bg-opacity-75 py-4">
            <h3>TRY GLASSES APP ONLINE</h3>
          </div>
          <div className="container">
            <div className="model py-5">
              {this.state.selectedItem ? (
                <Model selectedItem={this.state.selectedItem} />
              ) : (
                <img
                  className="rounded mx-auto d-block"
                  src={ModelImg}
                  alt=""
                />
              )}
            </div>
            <div className="row bg-white py-3 mb-"> {this.renderItem()}</div>
          </div>
        </div>
      </div>
    );
  }
}
