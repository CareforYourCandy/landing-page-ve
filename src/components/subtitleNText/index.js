import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
function SubtitleNText({
  title,
  text,
  buttonText,
  buttonVariant,
  variant,
  maxWidth,
}) {
  return (
    <div>
      {variant === "h1" ? <h1> {title} </h1> : <h2> {title} </h2>}
      <p style={maxWidth && { maxWidth: maxWidth }}> {text} </p>
      {buttonText && (
        <button className={`subtitle-button button-${buttonVariant}`}>
          {" "}
          {buttonText}{" "}
        </button>
      )}
    </div>
  );
}

SubtitleNText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  variant: PropTypes.string,
  maxWidth: PropTypes.string,
  buttonVariant: PropTypes.string,
};

export default SubtitleNText;
