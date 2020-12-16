import React from "react";
import { useEffect, useState } from "react";
import "./Global.css";
import { Select, Form } from "reacthalfmoon";
import { Col } from "reacthalfmoon";
import Chart from "react-google-charts";
import fever from "./fever.svg"
import mask from "./mask.svg"
import skull from "./skull.svg"


function CountryData() {
  const [countryData, setCountryData] = useState([{}]);
  const [selectedValue, setSelectedValue] = useState(0);
  


  const handleSelect = (e) => {
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
      <div className="container text-center ">
        <h1 className="m-5 font-weight-bold">Country Data</h1>
        <Chart
          className="align-center "
          
          width={"100%"}
          height={"500px"}
          chartType="GeoChart"
          chartVersion="49"
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
              'backgroundColor': 'transparent',
              legend: 'none',
              colorAxis: { colors: ['#8a0e0e'] }
            }
          }
          mapsApiKey="AIzaSyD_TdNUGTFLfTCE8oXTBQCy0wpstGewQLk"
          rootProps={{ 'data-testid': '1' }}
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

         <div className="row">
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-primary shadow-lg text-white  p-10 text-center">
            <div className="row">
            <div className="col-2 p-10"><img src={fever} alt="icon" width="60px"/></div>
            <div className="col-10 text-right"><h4 className="m-0 ">{countryData[selectedValue].active} </h4><h5 className="m-5 ">Active Cases </h5> 
              </div>
                    </div>
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-success shadow-lg text-white  p-10 text-center">
            <div className="row">
            <div className="col-2 p-10"><img src={mask} alt="icon" width="60px"/></div>
            <div className="col-10 text-right"><h4 className="m-0 ">{countryData[selectedValue].recovered}</h4><h5 className="m-5 ">Recovered </h5> 
              </div>
                    </div>
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-danger shadow-lg text-white p-10 text-center">
            <div className="row">
            <div className="col-2 p-10"><img src={skull} alt="icon" width="70px"/></div>
            <div className="col-10 text-right"><h4 className="m-0 ">{countryData[selectedValue].deaths} </h4><h5 className="m-5 ">Deaths </h5></div> 
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryData;
