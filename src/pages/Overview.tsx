import {Notification} from "iconsax-react";
import Calendar from "../components/core/overview/Calender.tsx";
import ChartTooltip from "../components/core/overview/ChartTooltip.tsx";
import RunningTask from "../components/core/overview/RunningTask.tsx";

import {UpcomingTask} from "../data/overview/upcoming-tasks.tsx";

import TaskSlider from "../components/common/TaskSlider.tsx";

import MentorSlider from "../components/common/MentorSlider.tsx";
import {monthlyMentors} from "../data/overview/monthly-mentors.tsx";
import TodayTask from "../components/core/overview/TodayTask.tsx";
import Navbar from "../components/common/Navbar.tsx";
import { useSidebar } from "../hooks/UseSidebar";
// import SidebarToggle from "../hooks/SidebarToggle.tsx";
// import SidebarToggle from "../hooks/SidebarToggle.tsx";

const Overview = () => {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Mobile Navbar */}
            <div className="md:hidden">
                <Navbar name="Dashboard" isActive={false} />
            </div>
            
            <div className="flex-1 flex flex-col lg:flex-row bg-white/50">
                <div className="flex-1 p-4 md:p-[2rem] w-full flex flex-col gap-[2rem] overflow-y-auto">
                    {/* Desktop Header */}
                    <div className="hidden md:flex justify-between items-center">
                        <div>
                            <h1 className="text-lg lg:text-2xl font-bold">Hi, Dennis Nzioki</h1>
                            <p className="text-[1rem] text-secondary-400">
                                Let's finish your task today!
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-[0.775rem] border-2 border-secondary-100 rounded-full">
                                <Notification size={24} color="#8E92BC"/>
                            </div>
                            <div className="w-[3.25rem] h-[3.25rem] bg-[#8E92BC] rounded-full text-white flex items-center justify-center font-bold">
                                P
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[2rem]">
                        {/* Chart and activity */}
                        <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem] py-[1rem] lg:py-[2rem]">
                            <RunningTask/>
                            <ChartTooltip/>
                        </div>

                        {/* Monthly mentors */}
                        <MentorSlider title="Monthly Mentors" mentors={monthlyMentors}/>

                        {/* Upcoming tasks */}
                        <TaskSlider
                            title={"Upcoming Task"}
                            tasks={UpcomingTask}
                            maxCards={2}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[2rem] w-full lg:w-[27.25rem] bg-[#F5F5F7] p-4 md:p-[2rem]">
                    <Calendar/>
                    <TodayTask/>
                </div>
            </div>
        </div>
    );
};

export default Overview;
