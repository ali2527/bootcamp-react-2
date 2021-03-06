import React from "react";
import icon from "./corona.png"
import { toggleDarkmode } from "reacthalfmoon";
import { Button } from "reacthalfmoon";




function Navbar() {

  return (
    <div>
      <nav className="navbar bg-primary bg-dark-dm">
        <a href="https://github.com/ali2527/bootcamp-react-2" className="navbar-brand text-light"><img src={icon} alt="logo"/>Covid-19 Tracker</a>

        <form className="form-inline ml-auto" >

          <Button onClick={toggleDarkmode}> &#127769;</Button>
        </form>
      </nav>


      
    </div>
  );
}

export default Navbar;


/*<div className="input-group">
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

</div>*/