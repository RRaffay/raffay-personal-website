import React from "react";
import axios from "axios";
import "./styles/dogcat.css";

class DogCatClassification extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      time: "",
      prediction: "",
      filler: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Prediction = this.handlePrediction.bind(this);
  }

  handleInputChange(event) {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        selectedFile: e.target.result,
      });
    };
  }

  handlePrediction(event) {
    this.setState({
      prediction: event.target.value,
    });
  }

  submit() {
    const formData = { data: [this.state.selectedFile] };
    const url = "https://hf.space/embed/RR14/PersonalMLIntro/+/api/predict";
    axios.post(url, formData).then((res) => {
      // then print response status
      console.warn(res.data);
      console.log(res.data.duration);
      console.log(res.data.data[0].label);
      this.setState({
        prediction: res.data.data[0].label,
        filler: "According to my calculations, this is a ",
      });
    });
  }

  render() {
    return (
      <div className="DogCatClass">
        <br></br>
        <br></br>
        <div className="DogCatClass-header">
          <p>Dog or Cat?</p>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-row">
              <div className="form-group col-md-6">
                <br></br>
                <label>
                  Upload a picture of a dog or a cat and see how my model
                  performs! Get the model{" "}
                  <a href="https://huggingface.co/spaces/RR14/PersonalMLIntro">
                    here
                  </a>
                </label>
                <br></br>
                <br></br>
                <input
                  type="file"
                  className="form-control"
                  name="upload_file"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br></br>
            <div className="form-row">
              <div className="col-md-6">
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={() => this.submit()}
                >
                  {" "}
                  Let's Check!
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="prediction">
          <p>
            {this.state.filler}
            <b>{this.state.prediction}</b>
          </p>
        </div>
        <br></br>
      </div>
    );
  }
}
export default DogCatClassification;
