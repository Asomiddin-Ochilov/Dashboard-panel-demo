import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,

    ResponsiveContainer,
} from 'recharts';
import {useSelector} from "react-redux";
function LineCharts() {

    const data = useSelector(state => state.DashboardReducer.week)

    return(
        <ResponsiveContainer width="100%" height={' 75%'}>
            <LineChart
                width={450}
                height={270}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    left: 6,
                    right:10,
                    bottom: -4,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />

                <Line type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )

}
export default LineCharts