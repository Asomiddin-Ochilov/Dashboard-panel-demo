import './PageCss.css'
import * as React from 'react';
import { Chart } from "react-google-charts";
import { useSelector} from "react-redux";
import { useState} from "react";

export default function PieCharts() {
    const data = useSelector(state => state.Reducer.PieCharts)
    const [das,setSate] = useState([
        ['Task', 'Hours per Day'],
        ['wewe', 15],
        ['Task', 15],
        ['Task', 12],
    ])
    console.log(data)
    return (

        <Chart

            className={'PieCharts'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
                options={{

                title: '',

                pieHole: 0.4,

            }}
            rootProps={{ 'data-testid': '3' }}
        />
    );

}


