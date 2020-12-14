import React from "react";
import { useEffect } from 'react'

function Infopanel() {

    useEffect(() => {
        fetch('https://thevirustracker.com/timeline/map-data.json')
        .then(response => response.json())
        .then(apidata => console.log(apidata))
        .catch(error => console.log(error));
    }, [])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-primary shadow-lg"></div></div>
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-primary shadow-lg"></div></div>
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-primary shadow-lg"></div></div>
        </div>
      </div>
    </div>
  );
}

export default Infopanel;
