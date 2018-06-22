import React from "react";

const Search = () => (

<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Topic</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Topic"></input>
  </div>
  <p>OR</p>
  <div className="form-group">
    <label for="exampleInputPassword1">Date</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Date"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

)

export default Search;

