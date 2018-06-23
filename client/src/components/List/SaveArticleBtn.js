import React from "react";

export const SaveArticleBtn = props => (
  <button {...props} className="btn btn-success">
    {props.children} Save Article
  </button>
);