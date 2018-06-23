import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    {props.children}
    <button class="saveArticleBtn">Save Article</button>
  </li>
  
);