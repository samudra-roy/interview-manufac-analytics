import React from 'react'
import ReactEcharts from "echarts-for-react";
import WineData from "../Wine-Data.json"

function ScatterPlot() {

    const finalArray = []
    const dataMap = new Map();

    //Getting the wine data and storing them in a map
    WineData.forEach(singleData => {
        dataMap.set(Number(singleData['Color intensity']), singleData.Hue)
    })

    //Pushing the data from map to the final array
    dataMap.forEach((value, key) =>{
        finalArray.push([key, value])
    })
    
    const option = {
        xAxis: {type: 'value', name: 'Color intensity'},
        yAxis: {type: 'value', name: 'Hue'},
        grid: {right:100},
        series: [
            {
                symbolSize: 20,
                data: finalArray,
                type: 'scatter'
            }
        ]
    }; 

  return (
    <div className='ScatterPlot'>
        <ReactEcharts option={option} className="reactchart" />
    </div>
  )
}

export default ScatterPlot
