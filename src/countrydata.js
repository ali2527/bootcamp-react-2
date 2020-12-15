import React from "react";
import { useEffect,useState } from 'react'
import './Global.css'

function CountryData() {

  const [countryData,setCountryData] = useState([{}]);




    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(countrydata => {setCountryData(countrydata[150]); })
      .catch(error => console.log(error));
  }, [])
  return (
    <div>
      <div className="container text-center">
        <h1 >Country Data</h1>

        <h1 >{countryData["country"]}</h1>
        <div className="row">
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-primary shadow-lg text-white  p-10 text-center"><h3 className="m-5">Active Cases</h3> {countryData["active"]}</div></div>
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-success shadow-lg text-white  p-10 text-center"><h3 className="m-5">Recoverd </h3> {countryData["recovered"]}</div></div>
          <div className="col-sm p-5"><div className="card h-100 border-0 bg-danger shadow-lg text-white p-10 text-center"><h3 className="m-5">Deaths</h3> {countryData["deaths"]}</div></div>
        </div>
      </div>
    </div>
  );
}

export default CountryData;
