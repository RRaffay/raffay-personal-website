import axios from "axios";
import React from "react";
import DogCatClassification from "./ML/DogCatClassification";

export default class ML extends React.Component {
  state = {
    data: [],
    duration: 0,
  };

  render() {
    return <DogCatClassification />;
  }
}
