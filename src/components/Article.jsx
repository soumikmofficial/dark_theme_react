import React from "react";
import moment from "moment";

function Article({ title, date, length, snippet }) {
  return (
    <article className="article">
      <h2>{title}</h2>
      <div className="info">
        <span>{moment(date).format("MMMM Do, dddd, YYYY")}</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
}

export default Article;
