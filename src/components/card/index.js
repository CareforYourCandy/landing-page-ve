import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
function Card({ title, text, icon }) {
  return (
    <div className="card">
      <img src={icon} alt="Placeholder" className="card-icon" />
      <b> {title} </b>
      <p> {text} </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

export default Card;
