import React from "react";
import { useEffect, useState } from "react";
import "./Global.css";
import { Select, Form, Button } from "reacthalfmoon";
import { Col } from "reacthalfmoon";

function CountryData() {
  const [countryData, setCountryData] = useState([{}]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((countrydata) => {
        setCountryData(countrydata);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container text-center">
        <h1>Country Data</h1>

     
        <Form className="form-inline m-10">
          <Col size={12} md={10}>
            <Select>
              <option value=" " defaultValue disabled>
                Select a Country
              </option>
              {countryData.map((country, index) => {
                return (
                  <option value={country["country"]} key={index}>
                    {country["country"]}
                  </option>
                );
              })}
            </Select>
          </Col>
          <Col size={12} md={2} className=" text-center p-10">
              <Button block color="primary" type="submit" >
                Submit
              </Button>
          </Col>
        </Form>

        <h1>{countryData["country"]}</h1>
        <div className="row">
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-primary shadow-lg text-white  p-10 text-center">
              <h3 className="m-5">Active Cases </h3>
              {countryData[0].active}{" "}
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-success shadow-lg text-white  p-10 text-center">
              <h3 className="m-5">Recoverd </h3>
              {countryData[0].recovered}{" "}
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-danger shadow-lg text-white p-10 text-center">
              <h3 className="m-5">Deaths</h3> {countryData[0].deaths}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryData;
