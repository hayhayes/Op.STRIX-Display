import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './componets.css';
import './colors.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
);
  

export default function Graph(){
    const [dataState, setDataState] = useState([20, 19, 47, 83, 65, 31]);

    useEffect(() => {
        const interval = setInterval(() => {
           
          setDataState(prev => {
            const next = [...prev.slice(1), Math.random()*100]
            return next;
          });
        }, 2500); // Update every half-second
    
        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: ['', '', '', '', '', ''], // Empty labels for no X-axis text
        datasets: [
          {
            data: dataState,
            borderColor: '#38fbdb',
            backgroundColor: '#38fbdb50',
            fill: true,
            tension: 0.25,
          }
        ]
    };
      
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0,
            easing: 'ease'
        },
        plugins: {
          legend: { display: false },
          title: { display: false },
          tooltip: { enabled: false } // optional: removes tooltips too
        },
        scales: {
            x: {
              ticks: {
                display: false // ← hide x-axis label text
              },
              grid: {
                drawTicks: false,
                color: '#8e52f5'
              }
            },
            y: {
                min: 0,
                max: 100,
              ticks: {
                display: false // ← hide y-axis label text
              },
              grid: {
                drawTicks: false,
                color: '#8e52f5'
                
              }
            }
        }
    };
    return(
        <div className="cyber-ui window small graph">
            <div className="bar">Current <span>- X</span></div>
            <div className="main"><Line data={data} options={options} /></div>
            
        </div>
    )
}