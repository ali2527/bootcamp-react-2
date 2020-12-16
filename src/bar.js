import React from 'react'
import {Line} from 'react-chartjs-2';
import { useEffect } from "react";





function BarChart() {

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((countrydata) => {
        console.log(countrydata);
      })
      .catch((error) => console.log(error));
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 45]
      },{
        label: 'My Second dataset',
        backgroundColor: 'rgba(80,99,132,0.2)',
        borderColor: 'rgba(80,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(80,99,132,0.4)',
        hoverBorderColor: 'rgba(80,99,132,1)',
        data: [30, 24, 60, 85, 85, 33, 88]
      }
    ]
  };

    return (
        <div>
          <h2>Bar Chart</h2>
          <Line data={data} 
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}/>
          
        </div>
      );
}

export default BarChart




