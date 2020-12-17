import React ,{ useState } from "react";
import {Line} from 'react-chartjs-2';
import { useEffect } from "react";    




function Graphs() {

    const [chartData, setChartData] = useState({cases:{},deaths:{},recovered:{}})

useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((countrydata) => {
        setChartData(countrydata);
        console.log(countrydata)
         })
      .catch((error) => console.log(error));
  }, []);

  const values = Object.values(chartData["cases"]).map((cases)=> {return (cases)});
  console.log(values);
  const keys = Object.keys(chartData["cases"]).map((cases)=> {return (cases)});
  console.log(keys);

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


    return (
        <div className="container h-600 text-center text-white-dm" >
            <h1>Graphs</h1>
            <Line data={data}  />
        </div>
    )
}

export default Graphs;



