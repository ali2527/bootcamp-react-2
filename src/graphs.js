import React ,{ useState } from "react";
import {Line} from 'react-chartjs-2';
import { useEffect } from "react";   
import { Select, Form } from "reacthalfmoon";
import { Col } from "reacthalfmoon"; 
import "./graphs.css"




function Graphs() {

    const [chartData, setChartData] = useState({cases:{},deaths:{},recovered:{}})
    const [countrychartData, setCountryChartData] = useState({})
    const [selectedValue, setSelectedValue] = useState(0);

    const handleSelect = (e) => {
      setSelectedValue(e.target.value);
    };
  

useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((countrydata) => {
        setChartData(countrydata);
       
         })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical?lastdays=all")
      .then((response) => response.json())
      .then((countrydata) => {
        setCountryChartData(countrydata);
         })
      .catch((error) => console.log(error));
  }, []);

    console.log(countrychartData[0]["timeline"]["cases"]);


  const data = {
    labels: Object.keys(chartData["cases"]).map((cases)=> {return (cases)}),
    datasets: [
      {
        label: 'Cases',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(chartData["cases"]).map((cases)=> {return (cases)})
      },      {
        label: 'Deaths',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(chartData["deaths"]).map((cases)=> {return (cases)})
      }, {
        label: 'Recoverd',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'green',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(chartData["recovered"]).map((cases)=> {return (cases)})
      }
    ]
  };

  const data2 = {
    labels: Object.keys(countrychartData[0]["timeline"]["cases"]).map((cases)=> {return (cases)}),
    datasets: [
      {
        label: 'Cases',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(countrychartData[selectedValue]["timeline"]["cases"]).map((cases)=> {return (cases)})
      },      {
        label: 'Deaths',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(countrychartData[selectedValue]["timeline"]["deaths"]).map((cases)=> {return (cases)})
      }, {
        label: 'Recoverd',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'green',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(countrychartData[selectedValue]["timeline"]["recovered"]).map((cases)=> {return (cases)})
      }
    ]
  };


    return (
        <div className="container-fluid graph text-center overflow-scroll" >
            <h1>Graphs</h1>
            <Line data={data}  />

            <Form className="form-inline m-10">
          <Col>
            <Select onChange={handleSelect}>
              <option value=" " defaultValue disabled>
                Select a Country
              </option>
              {countrychartData.map((country, index) => {
                return (
                  <option value={index} key={index}>
                    {country["country"]}
                  </option>
                );
                
              })}
            </Select>
          </Col>
        </Form>

        <Line data={data2}  />


        </div>
    )
}

export default Graphs;



