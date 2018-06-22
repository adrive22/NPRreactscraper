import React from "react";


const Saved = (props) => (
<div className="container">
    <li className="list-group-item">
    <h4>
    <span>
    <em>{props.title}</em>
    </span>
    <span>
     <a>
     <button href={props.url} className="btn btn-warning">View Article</button>
     </a>
     <a>
     <button className="btn btn-warning" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
     </a>
     </span>
    </h4>
     <p>Date Published: {props.date}</p>
     </li>
     </div>
);

     export default Saved;







