import React from "react";
import icon from "./corona.png"
import { toggleDarkmode } from "reacthalfmoon";
import { Button } from "reacthalfmoon";




function Navbar() {

  return (
    <div>
      <nav className="navbar bg-primary bg-dark-dm">
        <a href="#" className="navbar-brand text-light"><img src={icon} />Covid-19 Tracker</a>

        <form className="form-inline ml-auto" >
          
          <Button onClick={toggleDarkmode}> &#127769;</Button>
        </form>
      </nav>


      
    </div>
  );
}

export default Navbar;
