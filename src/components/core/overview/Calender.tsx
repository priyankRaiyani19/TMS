import {useState} from "react";
import {
    format,
    addWeeks,
    subWeeks,
    eachDayOfInterval,
    startOfWeek,
    endOfWeek,
} from "date-fns";
import {DAYS_OF_WEEK} from "../../../data/overview/day-of-week.tsx";
import {ArrowLeft2, ArrowRight2} from "iconsax-react";


const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState(new Date());

    const weekDays = eachDayOfInterval({
        start: startOfWeek(currentWeek, {weekStartsOn: 0}),
        end: endOfWeek(currentWeek, {weekStartsOn: 0}),
    });

    return (
        <div className="bg-white rounded-lg shadow-md w-full min-w-[22.25rem] min-h-[10rem]  overflow-hidden px-3 py-3 ">
            {/* Header */}
            <div className="flex justify-between items-center">
                <button onClick={() => setCurrentWeek(subWeeks(currentWeek, 1))}>

                    <ArrowLeft2 size="20" color="#54577A"/>
                </button>
                <h2 className=" text-[0.875rem]">{format(currentWeek, "MMMM yyyy")}</h2>
                <button onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}>
                    <ArrowRight2 size="20" color="#54577A"/>
                    {/*<ChevronRight className="text-gray-600 "/>*/}
                </button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7  py-3 relative text-xs sm:text-sm">
                {DAYS_OF_WEEK.map((day, index) => {
                    const isSelected =
                        format(weekDays[index], "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

                    return (
                        <div
                            key={day.key}
                            className={`font-semibold relative flex justify-center items-center h-6  sm:h-8 ${
                                isSelected ? "text-white z-10" : "text-gray-500"
                            }`}
                        >
                            {day.label}
                            {isSelected && (
                                <div
                                    className="absolute top-5 sm:top-8 left-1/2 transform -translate-x-1/2 w-2 sm:w-3  sm:h-[1rem] bg-gray-900 rounded-full "></div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Current Week Days */}
            <div className="grid grid-cols-7 gap-2 relative">
                {weekDays.map((day) => {
                    const isSelected = format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

                    return (
                        <button
                            key={day.toString()}
                            className="relative flex items-center justify-center h-6 sm:h-8 w-full py-1"
                            onClick={() => setSelectedDate(day)}
                        >
                            {isSelected && (
                                <div
                                    className="absolute -top-9 sm:-top-11 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-17 sm:h-20 bg-gray-900 rounded-full"></div>
                            )}
                            <span
                                className={`relative z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full transition text-xs sm:text-sm ${
                                    isSelected ? "bg-blue-600 text-white" : "bg-secondary-100"
                                }`}
                            >
                {format(day, "d")}
              </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;