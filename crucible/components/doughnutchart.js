import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
    const data = {
        labels: ["Full Time", "Part Time", "Intern", "Contract"],
        datasets: [
            {
                label: '# of Votes',
                data: [props.useFullTime, props.usePartTime, props.useIntern, props.useContract],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                ],
                borderColor: [
                    'rgba(220,220,220,0)',
                    'rgba(220,220,220,0)',
                    'rgba(220,220,220,0)',
                    'rgba(220,220,220,0)',
                    'rgba(220,220,220,0)',
                    'rgba(220,220,220,0)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Job Description Distributions',
            },
        },
    };
    return (
        <div data-testid="doughnutchart-1">
        <div className='w-2/5 p-5'>
            <Doughnut data={data} options={options} />
        </div>
        </div>
        )
}

export default DoughnutChart