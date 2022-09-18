import React from 'react'
import ReactEcharts from "echarts-for-react";
import WineData from "../Wine-Data.json"

function BarChart() {

    const alcoholArray = []
    const malicAcidArray = []
    const wine = []

    //Adding alcohol categories in alcohol array
    WineData.map((singleData) => {
        if(!alcoholArray.includes(singleData.Alcohol)){
        alcoholArray.push(singleData.Alcohol)
        wine.push({"alcohol": singleData.Alcohol, "malicAcid":0, "count":0})
        }
    })

    //Adding values in malicAcid array
    WineData.map((WineDataElement) => {
        alcoholArray.map((AlcoholElement) => {
        if (WineDataElement.Alcohol === AlcoholElement){
            wine[alcoholArray.indexOf(AlcoholElement)].malicAcid += WineDataElement['Malic Acid']
            wine[alcoholArray.indexOf(AlcoholElement)].count++
        }
        })
    })
    wine.map((wineElement)=>{
        const avg = wineElement.malicAcid / wineElement.count
        malicAcidArray.push(avg)
    })

    const option = {
        xAxis: {
        type: 'category',
        name: 'Alcohol',
        data: alcoholArray
        },
        yAxis: {
        type: 'value',
        name: 'Malic Acid'
        },
        series: [
        {
            data: malicAcidArray,
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