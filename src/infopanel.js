import React from "react";
import { useEffect,useState } from 'react'

function Infopanel() {

  const [globalData,setGlobalData] = useState({});

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(apidata => {setGlobalData(apidata); console.log(apidata)})
        .catch(error => console.log(error));

        //https://disease.sh/v3/covid-19/countries
    }, [])


    /*useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(apidata => console.log(apidata))
      .catch(error => console.log(error));

      //https://disease.sh/v3/covid-19/countries
  }, [])*/
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-primary shadow-lg text-white  p-10 text-center"><h3 className="m-5">Active Cases</h3> {globalData["active"]}</div></div>
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-success shadow-lg text-white  p-10 text-center"><h3 className="m-5">Recoverd </h3> {globalData["recovered"]}</div></div>
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-danger shadow-lg text-white p-10 text-center"><h3 className="m-5">Deaths</h3> {globalData["deaths"]}</div></div>
        </div>
      </div>
    </div>
  );
}

export default Infopanel;
