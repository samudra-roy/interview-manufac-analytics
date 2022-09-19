import React from 'react'
import ReactEcharts from "echarts-for-react";
import WineData from "../Wine-Data.json"

function BarChart() {

    const wineMap = new Map();
    const wineCount = new Map();

    //Getting the wine data and count and storing them in respective maps
    WineData.forEach((WineDataElement) => {
        if(!wineMap.has(WineDataElement.Alcohol)){
            wineMap.set(WineDataElement.Alcohol, WineDataElement['Malic Acid'])
            wineCount.set(WineDataElement.Alcohol, 1)
        }else{
            const temp1 = wineMap.get(WineDataElement.Alcohol)
            wineMap.set(WineDataElement.Alcohol, temp1 + WineDataElement['Malic Acid'])
            wineCount.set(WineDataElement.Alcohol, wineCount.get(WineDataElement.Alcohol) + 1)
        }
    })

    //Calculating average
    wineMap.forEach((value, key) => {
        wineMap.set(key, wineMap.get(key) / wineCount.get(key))
    })

    const option = {
        xAxis: {
        type: 'category',
        name: 'Alcohol',
        data: [ ...wineMap.keys() ],
        },
        yAxis: {
        type: 'value',
        name: 'Malic Acid'
        },
        series: [
        {
            data: [ ...wineMap.values() ],
            type: 'bar'
        }
        ]
    }; 

    return (
        <div className='BarChart'>
            <ReactEcharts option={option} className="reactchart" />
        </div>
    )
}

export default BarChart
