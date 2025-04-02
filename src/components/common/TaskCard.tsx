import { Clock } from "lucide-react";
import * as React from "react";
import {useNavigate} from "react-router";

type TaskCardProps = {
    title: string;
    role: string;
    time: string;
    percentage: number;
    imageUrl: string;
};

const TaskCard: React.FC<TaskCardProps> = ({ title, role, time, percentage,imageUrl }) => {

    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/details');
    }

    return (

        <div className="flex  flex-col  gap-4 p-[1.5rem] w-[20.5rem] h-[19.625rem] bg-white rounded-[0.875rem]"
            onClick={handleClick}>

            {/* Task Image */}


                <img src={imageUrl} alt="Task" className="w-full rounded-md" />


            {/* Task Details */}
            <div>
                <h2 className="text-[1rem] font-bold">{title}</h2>
                <p className="text-[0.75rem] text-gray-500">{role}</p>
            </div>

            {/* Progress Section */}
            <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <p className="text-[1rem] font-medium">Progress</p>
                    <p className="text-[1rem] font-medium">{percentage}%</p>
                </div>

                {/* Progress Bar with Circle Indicator */}
                <div className="relative w-full h-[0.5rem] bg-gray-300 rounded-full">
                    {/* Filled Progress */}
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>

                    {/* Circle Indicator */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md"
                        style={{ left: `calc(${percentage}% - 8px)` }}
                    ></div>
                </div>
            </div>

            {/* Time & Avatar Section */}
            <div className="flex justify-between items-center mt-2">
                <div className="text-md font-medium flex items-center gap-2">
                    <Clock size="24" color="#54577A" />
                    <p className={`text-[1rem]`}>{time}</p>
                </div>
                <div className="flex -space-x-3">
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={`https://i.pravatar.cc/40?img=${index + 1}`}
                            className="rounded-full w-[1.5rem] h-[1.5rem] border-2 border-white"
                            alt="Avatar not found"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
