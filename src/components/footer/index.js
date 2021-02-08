import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const sections = [
  {
    id: 0,
    title: "Products",
    links: ["About us", "Comments", "Feature Tour"],
  },
  {
    id: 1,
    title: "Developer",
    links: ["Presentation", "Knowledge", "Docs", "Video guides"],
  },
  {
    id: 2,
    title: "Company",
    links: ["Video Guides", "Report a Bug", "Terms of Use"],
  },
];
function Footer() {
  return (
    <div className="footer">
      {sections.map(({ id, title, links }) => (
        <React.Fragment key={id}>
          <FooterSection title={title} links={links} />
        </React.Fragment>
      ))}
      <div className="footer-section">
        <b sclassName="newsletter-title"> Newsletter </b>
        <div className="newsletter-input">
          <input></input>
          <button> -{">"} </button>
        </div>
      </div>
    </div>
  );
}

function FooterSection({ title, links }) {
  return (
    <div className="footer-section">
      <b> {title}</b>
      {links.map((link, i) => (
        <a href="." key={title + i}>
          {link}
        </a>
      ))}
    </div>
  );
}

FooterSection.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default Footer;
