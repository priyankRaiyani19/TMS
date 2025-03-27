const RunningTask = () => {
    const totalTasks = 100;
    const completedTasks = 65;
    const progressPercentage = 45;

    return (
        <div className="bg-[#0c0c1d] text-white p-[1.25rem] flex justify-between lg:flex-col rounded-[0.625rem] shadow-md lg:min-w-[12.125rem] lg:min-h-[13.375rem] ">
           <div className={`flex flex-col gap-[1rem]`}>
               <h2 className="text-sm sm:text-base font-medium">Running Task</h2>
               <p className="text-4xl font-bold mt-1">{completedTasks}</p>
           </div>

            {/* Main Layout Container */}
            <div className="flex items-center gap-[1rem] mt-2 sm:mt-4">

                {/* Progress Circle & Percentage */}
                <div className="relative w-[4.25rem] h-[4.25rem  flex items-center ">
                    <svg className="w-[4.25rem] h-[4.25rem]" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="47"
                            stroke="gray"
                            strokeWidth="5"
                            fill="none"
                        />
                        {/* Progress Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="47"
                            stroke="blue"
                            strokeWidth="5"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset={(251.2 * (100 - progressPercentage)) / 100}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                        />
                        {/* Percentage Text */}
                        <text
                            x="50"
                            y="55"
                            textAnchor="middle"
                            fontSize="18"
                            fontWeight="bold"
                            fill="white"
                        >
                            {progressPercentage}%
                        </text>
                    </svg>
                </div>

                {/* Total Task Count (SVG + Text in Same Div) */}
                <div className="flex flex-col items-center">
                    <p className="text-[1.25rem] font-bold">{totalTasks}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Task</p>
                </div>
            </div>
        </div>
    );
};

export default RunningTask;
