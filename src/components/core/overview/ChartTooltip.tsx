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

const data = [
    { day: "S", tasks: 1 },
    { day: "M", tasks: 2 },
    { day: "T", tasks: 1.2 },
    { day: "W", tasks: 2.7 },
    { day: "T", tasks: 1.8 },
    { day: "F", tasks: 2 },
    { day: "S", tasks: 1.9 },
];

const CustomTooltip = ({ active, payload }: any) => {
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
        <div className="bg-white shadow-md rounded-lg  w-full">
            <div className="flex justify-between items-center p-4">
                <h3 className="text-lg font-semibold">Activity</h3>
                <span className="text-black hover:cursor-pointer text-sm">This Week ▼</span>
            </div>

            {/* Mobile-friendly width */}
            <div className="w-full -ml-5 pr-5  ">
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={data}>
                        {/* Vertical Grid Lines at Days */}
                        <CartesianGrid vertical={true} horizontal={false} stroke="#E5E7EB" strokeDasharray="3 3" />

                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis
                            domain={[1, 3]}
                            tick={{ fill: "#6B7280", fontSize: 12 }}
                            tickCount={3}
                            allowDecimals={false}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={false} />

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
                            dot={({ cx, cy }) => (
                                <circle cx={cx} cy={cy} r={6} fill="white" stroke="#3B82F6" strokeWidth={2} />
                            )}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActivityChart;
