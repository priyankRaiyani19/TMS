import {Notification} from "iconsax-react";
import Calendar from "../components/core/overview/Calender.tsx";
import ChartTooltip from "../components/core/overview/ChartTooltip.tsx";
import RunningTask from "../components/core/overview/RunningTask.tsx";

import {UpcomingTask} from "../data/overview/upcoming-tasks.tsx";

import TaskSlider from "../components/common/TaskSlider.tsx";

import MentorSlider from "../components/common/MentorSlider.tsx";
import {monthlyMentors} from "../data/overview/monthly-mentors.tsx";
import TodayTask from "../components/core/overview/TodayTask.tsx";
// import SidebarToggle from "../hooks/SidebarToggle.tsx";
// import SidebarToggle from "../hooks/SidebarToggle.tsx";

const Overview = () => {
    // const {isOpen, setIsOpen} = SidebarToggle();

    return (
        <div className="flex flex-col lg:flex-row grow h-full bg-white/50 overflow-auto ">
            <div className="grow p-[2rem] w-full flex-col gap-[2rem]">
                {/* ? Navbar*/}
                <div className="flex  justify-between items-center">
                    <div>
                        {/* Change name to match the image */}
                        <h1 className="text-lg lg:text-2xl font-bold">Hi, Dennis Nzioki</h1>
                        <p className="text-[1rem] text-secondary-400">
                            Let's finish your task today!
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            className={`p-[0.775rem] border-2 border-secondary-100 rounded-full`}
                        >
                            <Notification size={24} color="#8E92BC"/>
                        </div>
                        <div
                            className="w-[3.25rem] h-[3.25rem] bg-[#8E92BC] rounded-full text-white flex items-center justify-center font-bold">
                            P
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-[2rem]`}>
                    {/*? chart and activity*/}
                    <div className="flex flex-col lg:flex-row mt-[2rem] gap-[4rem] py-[2rem] ">
                        <RunningTask/>

                        <ChartTooltip/>
                    </div>

                    {/* ? monthly mentors*/}

                    <MentorSlider title="Monthly Mentors" mentors={monthlyMentors}/>

                    {/* ? Upcoming tasks */}

                    <TaskSlider
                        title={"Upcoming Task"}
                        tasks={UpcomingTask}
                        maxCards={2}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-[2rem] w-[27.25rem] bg-[#F5F5F7] p-[2rem]">
                <Calendar/>
                <TodayTask/>
            </div>
        </div>
    );
};

export default Overview;
