import taskToday from "../../assets/overview/task-Today.png";
import { Clock } from "lucide-react";
import * as React from "react";

type TaskCardProps = {
    title: string;
    role: string;
    time: string;
    percentage: number;
};

const TaskCard: React.FC<TaskCardProps> = ({ title, role, time, percentage }) => {
    return (
        <div className="flex flex-col gap-4 ">
            {/* Task Image */}
            <div className="w-full">
                <img src={taskToday} alt="Task" className="w-full rounded-md" />
            </div>

            {/* Task Details */}
            <div>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-500">{role}</p>
            </div>

            {/* Progress Section */}
            <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <p className="text-md font-semibold">Progress</p>
                    <p className="text-sm font-medium">{percentage}%</p>
                </div>

                {/* Progress Bar with Circle Indicator */}
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                    {/* Filled Progress */}
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>

                    {/* Circle Indicator */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md"
                        style={{ left: `calc(${percentage}% - 8px)` }} // Adjusting for circle's width
                    ></div>
                </div>
            </div>

            {/* Time & Avatar Section */}
            <div className="flex justify-between items-center mt-2">
                <div className="text-md font-medium flex items-center gap-2">
                    <Clock size="24" color="#54577A" />
                    <p>{time}</p>
                </div>
                <div className="flex -space-x-3">
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={`https://i.pravatar.cc/40?img=${index + 1}`}
                            className="rounded-full w-8 h-8 border-2 border-white"
                            alt="Avatar not found"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
