import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayImage, { getImages } from "./common/images/displayImage";
import ImageButton from "./common/buttons/imageButton";

class HowToPlay extends Component {
  state = { classes: this.props.onClick, imageId: 0 };

  handleClasses = () => {
    console.log(this.props);
    this.state.classes === "howToPlayWrapperHide"
      ? this.setState({ classes: "howToPlayWrapperShow" })
      : this.setState({ classes: "howToPlayWrapperHide" });
  };

  handleImageId = input => {
    let imageId = this.state.imageId;
    input === "Next" ? imageId++ : imageId--;
    this.setState({ imageId });
    console.log(this.state.imageId);
  };

  render() {
    console.log(getImages().length);
    const { imageId } = this.state;
    return (
      <div>
        <div id="fade" />
        <div id="background">
          <Link to="/">
            <ImageButton input="Back" imageId={imageId} lastIndex={false} />
          </Link>

          <ImageButton
            input="Next"
            imageId={imageId}
            lastIndex={getImages().length - 1}
            onClick={() => this.handleImageId("Next")}
          />
          <ImageButton
            input="Previous"
            imageId={imageId}
            lastIndex={0}
            onClick={() => this.handleImageId("Previous")}
          />
          <DisplayImage onClick={() => this.handleImageId()} id={imageId} />
        </div>
      </div>
    );
  }
}

export default HowToPlay;
