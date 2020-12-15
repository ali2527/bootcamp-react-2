import React from "react";
import { useEffect } from 'react'

function Infopanel() {

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(apidata => console.log(apidata))
        .catch(error => console.log(error));

        //https://disease.sh/v3/covid-19/countries
    }, [])


    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(apidata => console.log(apidata))
      .catch(error => console.log(error));

      //https://disease.sh/v3/covid-19/countries
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
