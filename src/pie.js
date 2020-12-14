import React from 'react'
import {Pie} from 'react-chartjs-2';


const data = {
	labels: [
		'pink',
		'Blue',
		'Yellow','red','green','purple'
	],
	datasets: [{
		data: [300, 50, 100,80,60,150],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        'red',
        'green',
        'purple'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        'red',
        'green',
        'purple'
		]
	}]
};

function pie() {
    return (
        <div>
            <h2>Pie Chart</h2>
        <Pie data={data} height={100}/>
        </div>
    )
}

export default pie
