import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";

function Charts() {
    const data = useSelector(state => state.DashboardReducer.sort)

    return(
        <ResponsiveContainer width="100%" height="90%">

            <BarChart
                width={500}
                height={300}

                data={data}

                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={10}

            >
                <XAxis dataKey="date" scale="point" padding={{ left: 10, right: 10 ,bottom:3}} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar  radius={10} className={'Bar'} style={{margin:'10px !important'}} dataKey="price" fill="#4BA5FA" background={{ fill: '#fffefe' }} />
            </BarChart>
        </ResponsiveContainer>
    )

}
export default Charts