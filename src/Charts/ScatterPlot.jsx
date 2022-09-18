import React from 'react'
import ReactEcharts from "echarts-for-react";
import WineData from "../Wine-Data.json"

function ScatterPlot() {

    const colorIntensityArray = []
    const hueArray = []
    const finalArray = []

    // Adding data to colorIntensityArray and hueArray respectively
    WineData.map(singleData => {
        colorIntensityArray.push(Number(singleData['Color intensity']))
        hueArray.push(singleData.Hue)
    })

    // Adding the values from those two arrays to the final one
    for(let i=0;i<hueArray.length;i++){
        const tempArray = [colorIntensityArray[i], hueArray[i]]
        finalArray.push(tempArray)
    }
    
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