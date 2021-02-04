import React from "react";
import PropTypes from "prop-types";

function SubtitleNText({ title, text, buttonText, variant }) {
  return (
    <div>
      {variant === "h1" ? <h1> {title} </h1> : <h2> {title} </h2>}
      <p> {text} </p>
      {buttonText && <button> {buttonText} </button>}
    </div>
  );
}

SubtitleNText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  variant: PropTypes.string,
};

export default SubtitleNText;
