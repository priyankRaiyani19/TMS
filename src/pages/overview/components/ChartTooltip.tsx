import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import {ArrowDown2} from "iconsax-react";

const data = [
    {day: "S", tasks: 1},
    {day: "M", tasks: 2},
    {day: "T", tasks: 1.2},
    {day: "W", tasks: 2.7},
    {day: "T", tasks: 1.8},
    {day: "F", tasks: 2},
    {day: "S", tasks: 1.9},
];

const CustomTooltip = ({active, payload}: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black text-white px-2 py-1 rounded-md shadow-md">
                {`${payload[0].value} Task`}
            </div>
        );
    }
    return null;
};

const ActivityChart: React.FC = () => {
    return (
        <div
            className=" shadow-md rounded-lg h-[13.375rem] md:max-w-[28.875rem] p-[1.25rem] flex  flex-col gap-[1.25rem] bg-[#F5F5F7]">
            <div className="flex justify-between items-center ">
                <h3 className="text-[1rem] font-semibold">Activity</h3>
                <div className={`flex items-center justify-center gap-[0.5rem]`}>
                    <p className={`text-[0.75rem]`}>
                        This Week
                    </p>
                    <ArrowDown2 size="12" color="#54577a"/>

                </div>
            </div>

            {/* Mobile-friendly width */}
            <div className="w-full h-[8.125rem]  lg:min-w-[26.375rem] bg-white p-4 rounded-[0.625rem] ">
                <ResponsiveContainer width="100%" height={103}>
                    <LineChart data={data}>
                        {/* Vertical Grid Lines at Days */}
                        <CartesianGrid vertical={true} horizontal={false} stroke="#E5E7EB" strokeDasharray="3 3"/>

                        <XAxis dataKey="day" axisLine={false} tickLine={false}/>
                        <YAxis
                            domain={[1, 3]}
                            tick={{fill: "#6B7280", fontSize: 12}}
                            tickCount={3}
                            allowDecimals={false}
                        />
                        <Tooltip content={<CustomTooltip/>} cursor={false}/>

                        {/* Gray Line Underneath */}
                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="#D1D5DB"
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* Black Line on Top */}
                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="#000"
                            strokeWidth={3}
                            dot={({cx, cy}) => (
                                <circle cx={cx} cy={cy} r={6} fill="white" stroke="#3B82F6" strokeWidth={2}/>
                            )}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActivityChart;
