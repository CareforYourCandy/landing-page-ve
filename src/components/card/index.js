import React from "react";
import PropTypes from "prop-types";

function Card({ title, text }) {
  return (
    <div>
      <b> {title} </b>
      <p> {text} </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
