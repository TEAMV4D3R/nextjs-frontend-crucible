import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = (props) => {


    const label = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Monthly Jobs Application Productivity',
            },
        },
    };

    const data = {
        labels: label,
        datasets: [
            {
                label: '# of Daily Applications',
                data: [
                    props.useOne,
                    props.useTwo,
                    props.useThree,
                    props.useFour,
                    props.useFive,
                    props.useSix,
                    props.useSeven,
                    props.useEight,
                    props.useNine,
                    props.useTen,
                    props.useEleven,
                    props.useTwelve,
                    props.useThirteen,
                    props.useFourteen,
                    props.useFifteen,
                    props.useSixteen,
                    props.useSeventeen,
                    props.useEighteen,
                    props.useNineteen,
                    props.useTwenty,
                    props.useTwentyOne,
                    props.useTwentyTwo,
                    props.useTwentyThree,
                    props.useTwentyFive,
                    props.useTwentySix,
                    props.useTwentySeven,
                    props.useTwentyNine,
                    props.useTwentyThirty,
                    props.useThirtyOne,
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                textColor: 'rgba(255, 132, 0.5)'
            },
        ],
    };


    return (
        <div className="flex items-center content-center bg-violet-200 dark:bg-neutral-100 text-slate-50 rounded drop-shadow-md mt-10 w-3/5 mx-auto m-4 p-5 ">
            <Bar options={options} data={data} className="m-5" />;
        </div>

    )
}