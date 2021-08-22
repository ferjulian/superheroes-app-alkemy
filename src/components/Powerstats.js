import React from 'react';

const Powerstats = ({team}) =>{

const powerstats = [];

const toInt = (arg) =>{
    const split = arg.split(' ');
    const number = parseInt(split[0]);
    return number
    }

let height=0;
let weight=0;

team.forEach((hero)=>{

powerstats.push(hero.powerstats)

// Height & Weight

height += toInt(hero.appearance.height[1]);
weight += toInt(hero.appearance.weight[1]);

});

const totalHeight = height / team.length;
const totalWeight = weight / team.length;



const totalStats = powerstats.reduce((totalStats, stats) => {
    for(const [name, value] of Object.entries(stats) ){
        
        if(!totalStats[name]){
            totalStats[name] = 0
        }

        totalStats[name] += parseInt(value);
    }
    return totalStats
},{});


// Max Stat

let flag = 0;
let maxValue;
let nameStat;

for(const [name, value] of Object.entries(totalStats)){
    
    if(flag === 0){
        maxValue = value;
        nameStat= name
        flag = 1;
    }else if(maxValue < value){
            maxValue = value;
            nameStat = name;
        }
}




    return(
        <div>
            <h2>Mis powerstats</h2>
            <h2>{'Atributo Maximo: '+ nameStat}</h2>
            <h2>{'Peso promedio: '+ totalWeight}</h2>
            <h2>{'Altura promedio: '+ totalHeight}</h2>
            <h3>{'Combat '+ totalStats.combat}</h3>
            <h3>{'Intelligence '+ totalStats.intelligence}</h3>
            <h3>{'power '+ totalStats.power}</h3>
            <h3> {'speed '+ totalStats.speed}</h3>
            <h3>{'strength '+ totalStats.strength}</h3>
            <h3>{'durability '+ totalStats.durability}</h3>
            
            
           
            
            
        </div>
    );
}

export default Powerstats;