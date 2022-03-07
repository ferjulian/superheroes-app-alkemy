import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Barchart.css';

const Powerstats = () => {

    const powerstats = [];
    const data = localStorage.getItem('team');
    const team = JSON.parse(data);



    const toInt = (arg) => {
        const split = arg.split(' ');
        const number = parseInt(split[0]);
        return number
    }

    let height = 0;
    let weight = 0;

    team.forEach((hero) => {

        powerstats.push(hero.powerstats)

        // Height & Weight

        height += toInt(hero.appearance.height[1]);
        weight += toInt(hero.appearance.weight[1]);

    });

    const totalHeight = height / team.length;
    const totalWeight = weight / team.length;



    const totalStats = powerstats.reduce((totalStats, stats) => {
        for (const [name, value] of Object.entries(stats)) {

            if (!totalStats[name]) {
                totalStats[name] = 0
            }

            totalStats[name] += parseInt(value);
        }
        return totalStats
    }, {});


    // Max Stat

    let flag = 0;
    let maxValue;
    let nameStat;

    for (const [name, value] of Object.entries(totalStats)) {

        if (flag === 0) {
            maxValue = value;
            nameStat = name
            flag = 1;
        } else if (maxValue < value) {
            maxValue = value;
            nameStat = name;
        }
    }




    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
            <div className="left_powerstats_panel">
                <h2>Team Stats</h2>
                <h4>{nameStat ? 'High spot: ' + nameStat : ''}</h4>
                <h5>{totalWeight ? 'Average team weight: ' + Math.round(totalWeight) + ' kg' : ''}</h5>
                <h5>{totalHeight ? 'Average team height: ' + Math.round(totalHeight) + ' cm' : 'You don\'t have any superheroes yet!'}</h5>
            </div>

            <div className="barChart_container">
                <Bar
                    plugins={[ChartDataLabels]}
                    data={{
                        labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
                        datasets: [{
                            label: 'value',
                            data: [totalStats.intelligence, totalStats.strength, totalStats.speed, totalStats.durability, totalStats.power, totalStats.combat]
                            ,
                            barPercentage: 0.8,
                            categoryPercentage: 0.8,
                            backgroundColor: ['rgba(255, 75, 127,0.3)'],
                            borderWidth: '2',
                            borderColor: ['rgb(255, 75, 127)'],
                        },
                        ]

                    }}
                    width={150}
                    height={300}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            datalabels: {
                                color: 'white'
                            },
                            legend: {
                                display: false
                            },
                        },
                        indexAxis: 'y',
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { display: false }
                            },
                            y: {
                                grid: { display: false },
                                ticks: {
                                    color: 'white',
                                    font: {
                                        size: 16,
                                    }
                                }
                            }
                        },
                    }}

                />
            </div>



        </div>
    );
}

export default Powerstats;