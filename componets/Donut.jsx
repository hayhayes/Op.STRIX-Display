import {
    Chart as ChartJS,
    ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './componets.css';
import './colors.css';
  
ChartJS.register(ArcElement);

const data = {
    labels: [], // No labels
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#e0fffd', '#7fffcd', '#7af683'],
        borderWidth: 0
      }
    ]
};

const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
};

export default function DonutChart() {
    return (
      <div style={{ width: '25rem', height: '25rem' }} className='donut'>
        <Doughnut data={data} options={options} />
      </div>
    );
}
  