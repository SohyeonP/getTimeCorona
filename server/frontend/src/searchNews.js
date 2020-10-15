import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function SearchNews({id,title,originallink,link,description,pubDate}) {
  return (
    <div className="news">
    <a href={id} target="_blank">
      <div alt={title} title={title}></div>
    <div className="news__data">
      <h3 className="news__title">{
          title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
        }</h3>
      <p className="news__originallink">
        <span></span> {originallink}
      </p>
      <p className="news__link">
        <span></span> {link}
      </p>
    <p className="news__description">
      <span></span> {description}
    </p>
    <p className="news__pubDate">
      <span></span> {pubDate}
    </p>
    </div>
  </a>
  </div>
  )
};

SearchNews.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  originallink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired

};

export default SearchNews;