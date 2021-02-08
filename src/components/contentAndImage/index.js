import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
function ContentAndImage({ title, text, buttonText, image }) {
  return (
    <div className="cai-wrapper">
      <div className="container-content">
        <h2> {title}</h2>
        <p> {text}</p>
        {buttonText && (
          <button className="button-cai button-primary"> {buttonText} </button>
        )}
      </div>
      {image && <img className="cai-image" src={image} alt="placeholder" />}
    </div>
  );
}

ContentAndImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string,
};

export default ContentAndImage;
