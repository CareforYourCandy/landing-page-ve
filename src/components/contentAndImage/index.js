import React from "react";
import PropTypes from "prop-types";

function ContentAndImage({ title, text, buttonText, image }) {
  return (
    <div>
      <div className="container-content">
        <b> {title}</b>
        <p> {text}</p>
        {buttonText && <button> {buttonText} </button>}
      </div>
      {image && <img src="https://via.placeholder.com/80" />}
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
