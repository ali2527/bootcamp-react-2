import React from "react";
import { useEffect, useState } from "react";
import "./Global.css";
import { Select, Form } from "reacthalfmoon";
import { Col } from "reacthalfmoon";
import Chart from "react-google-charts";

function CountryData() {
  const [countryData, setCountryData] = useState([{}]);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };

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
        <Chart
          className="align-center bg-dark"
          width={"100%"}
          height={"500px"}
          chartType="GeoChart"
          data={[
            ["Country", "Cases", "deaths"],
            [
              countryData[selectedValue].country,
              countryData[selectedValue].active,
              countryData[selectedValue].deaths,
            ],
          ]}
          options={
            {
              backgroundColor: 'rgba(255,255,255,0.5)',
            }
          }
          rootProps={{ "data-testid": "1" }}
        />

        <Form className="form-inline m-10">
          <Col>
            <Select onChange={handleSelect}>
              <option value=" " defaultValue disabled>
                Select a Country
              </option>
              {countryData.map((country, index) => {
                return (
                  <option value={index} key={index}>
                    {country["country"]}
                  </option>
                );
              })}
            </Select>
          </Col>
        </Form>

        <h1>{countryData["country"]}</h1>
        <div className="row">
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-primary shadow-lg text-white  p-10 text-center">
              <h3 className="m-5">Active Cases </h3>
              {countryData[selectedValue].active}{" "}
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-success shadow-lg text-white  p-10 text-center">
              <h3 className="m-5">Recoverd </h3>
              {countryData[selectedValue].recovered}{" "}
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-danger shadow-lg text-white p-10 text-center">
              <h3 className="m-5">Deaths</h3>{" "}
              {countryData[selectedValue].deaths}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryData;
