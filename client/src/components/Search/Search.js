import React from "react";

const Search = (props) => (


<p>
  <div className="form-group">
    <label for="exampleInputEmail1">Topic</label>
    <input type="text" className="form-control" id="topic" aria-describedby="emailHelp" placeholder="Topic"></input>
  </div>
  <p>OR</p>
  <div className="form-group">
    <label for="exampleInputPassword1">Date</label>
    <input type="text" className="form-control" id="date" placeholder="Date"></input>
  </div>
  

  <button  className="btn btn-primary" onClick={() => props.loadArticles()}>Search Articles</button>

<div className="container">
<div className="articleResults" id={props.id}>
<h3 className="articleHeadline">{props.title}</h3>
<h4> Date: {props.date}</h4>
<button type="button" className="btn btn-warning">Save Article</button>
</div>
</div>
</p>



)

export default Search;

//handleinputchange pass the topic and date into the load article function.



<Search loadArticles={this.loadArticles}/> 