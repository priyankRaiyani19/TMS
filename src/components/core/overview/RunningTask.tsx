const RunningTask = () => {
    const totalTasks = 100;
    const completedTasks = 65;
    const progressPercentage = 45;

    return (
        <div className="bg-[#0c0c1d] text-white p-4 sm:p-6 rounded-lg shadow-md w-full">
            <h2 className="text-sm sm:text-base font-medium">Running Task</h2>
            <p className="text-4xl font-bold mt-1">{completedTasks}</p>

            {/* Main Layout Container */}
            <div className="flex items-center justify-between mt-2 sm:mt-4">

                {/* Progress Circle & Percentage */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="gray"
                            strokeWidth="5"
                            fill="none"
                        />
                        {/* Progress Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
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
                    <p className="text-3xl font-bold">{totalTasks}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Task</p>
                </div>
            </div>
        </div>
    );
};

export default RunningTask;
