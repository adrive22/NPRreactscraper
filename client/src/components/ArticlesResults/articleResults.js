import React from "react";

const ArticleResults = (props) => (
<div className="container">
<div className="articleResults" id={props.id}>
<h3 className="articleHeadline">{props.title}</h3>
<h4> Date: {props.date}</h4>
<button type="button" className="btn btn-warning">Save Article</button>
</div>
</div>
);

export default ArticleResults;

