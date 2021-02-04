import React from "react";
import PropTypes from "prop-types";
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
    <div>
      {sections.map(({ id, title, links }) => (
        <React.Fragment key={id}>
          <FooterSection title={title} links={links} />
        </React.Fragment>
      ))}
    </div>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
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
