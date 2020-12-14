import React from "react";

function navbar() {
  return (
    <div>
      <nav className="navbar bg-primary bg-dark-dm">
        <a href="#" className="navbar-brand text-light">Covid-19 Tracker</a>

        <form className="form-inline ml-auto" >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search docs"
              required="required"
            />
            <div className="input-group-append">
              <button className="btn" type="submit">
              &#x1F50D;
                <span className="sr-only">Search docs</span>
              </button>
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
}

export default navbar;
