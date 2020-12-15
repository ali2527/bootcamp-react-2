import React from "react";
import { toggleDarkmode } from "reacthalfmoon";
import { Button } from "reacthalfmoon";

function login() {
  return (
    <div>
      <div className="card w-400 mw-full m-auto position-relative">
        <div className="position-absolute top-0 right-0 z-10 p-10">
          <Button onClick={toggleDarkmode}> &#127769;</Button>
        </div>
        <br></br>
        <h1 className="card-title mr-auto">login</h1>

        <form>
          <div className="form-group">
            <label htmlFor="full-name" className="required">
              Username / Email
            </label>
            <input
              type="text"
              id="full-name"
              className="form-control"
              placeholder="Your full name"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession" className="required">
              password
            </label>
            <input
              type="password"
              id="profession"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <input className="btn btn-primary btn-block" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default login;
