import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Barchart.css';

const BarChart = () => {

return(
    <div>
        <div className="barChart_container">
        <Bar 
            plugins={[ChartDataLabels]}
            data={{
                labels:['Intelligence','Strength', 'Speed', 'Durability', 'Power','Combat'], 
                datasets: [{label: 'tu vieja', 
                            data: [100,50,40,30,20,66], 
                            barPercentage: 0.8, 
                            categoryPercentage: 0.8},
                            ]
                    }} 
            width={150}
            height={300} 
            options ={{ 
                maintainAspectRatio: false, 
                indexAxis: 'y', 
                scales:{
                    x: { 
                        grid:{ display: false},
                        ticks:{display:false}
                        },
                    y:{
                        grid:{display: false}
                    }
                    }
                        }}
            
        />
        </div>
        

       
    </div>
        
        
    );
}

export default BarChart;