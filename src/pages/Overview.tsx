import {More, Notification} from "iconsax-react";
import Calendar from "../components/core/overview/Calender.tsx";
import TaskCard from "../components/common/TaskCard.tsx";
import CTAButton from "../components/common/CTAButton.tsx";
import {TaskDetails} from "../data/task-details.tsx";
import ChartTooltip from "../components/core/overview/ChartTooltip.tsx";
import RunningTask from "../components/core/overview/RunningTask.tsx";

import {UpcomingTask} from "../data/upcoming-tasks.tsx";
import todayTask from '../assets/overview/task-Today.png';
import TaskSlider from "../components/common/TaskSlider.tsx";

import MentorSlider from "../components/common/MentorSlider.tsx";
import {monthlyMentors} from "../data/monthly-mentors.tsx";
// import SidebarToggle from "../hooks/SidebarToggle.tsx";
// import SidebarToggle from "../hooks/SidebarToggle.tsx";

const Overview = () => {
    // const {isOpen, setIsOpen} = SidebarToggle();

    // Separate states for Monthly Mentors carousel

    return (
        <div className="flex flex-col lg:flex-row grow h-full bg-white/50 overflow-auto">

            <div className="grow p-[2rem] flex-col gap-[2rem]">

                {/* ? Navbar*/}
                <div className=" flex justify-between items-center">
                    <div>
                        {/* Change name to match the image */}
                        <h1 className="text-lg lg:text-2xl font-bold">Hi, Dennis Nzioki</h1>
                        <p className="text-sm text-secondary-400">Let's finish your task today!</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Notification size={32} color="#8E92BC" className="p-2 border rounded-full"/>
                        <div
                            className="w-10 h-10 bg-[#8E92BC] rounded-full text-white flex items-center justify-center font-bold">P
                        </div>
                    </div>
                </div>

                {/*? chart and activity*/}
                <div className="flex flex-col lg:flex-row mt-[2rem] gap-[2rem] py-[2rem] ">
                    <div className="lg:w-1/3 w-full">
                        <RunningTask/>
                    </div>
                    <div className="w-full">
                        <ChartTooltip/>
                    </div>
                </div>

                {/* ? monthly mentors*/}

                  <MentorSlider title="Monthly Mentors" mentors={monthlyMentors}/>

                {/* ? Upcoming tasks */}
                    <TaskSlider title={"Upcoming"} tasks={UpcomingTask} maxCards={2}/>

            </div>

            <div className="flex flex-col gap-[2rem] w-full max-w-[26rem] bg-[#F5F5F7] p-[2rem]">
                <Calendar/>
                <div className="min-h-[48rem] bg-white rounded-xl shadow-md p-4 flex flex-col gap-[2rem]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-base font-bold">Task Today</h2>
                        <More size="20"/>
                    </div>

                    <div>
                        <TaskCard time="1 Hour" title="Creating Awesome Mobile Apps" role="UI /UX Designer"
                                  percentage={20} imageUrl={todayTask}/>
                    </div>

                    <div className="border-b border-gray-300"/>
                    <div className={`flex  `}>
                        <div className={`h-full`}>
                            <h2 className="text-lg font-bold">Detail Task</h2>
                            <div className={`h-full justify-between flex flex-col pt-8 pb-4`}>
                                <div className="flex flex-col gap-2">
                                    {TaskDetails.map((item, id) => (
                                        <div className="flex items-center gap-2" key={id}>
                                            <div
                                                className="bg-[#8E92BC] text-white font-bold flex items-center justify-center h-9 w-9 rounded-lg">{id}</div>
                                            <div className="text-sm font-medium">{item.task}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`px-[1rem]`}>
                                    <CTAButton text="Go To Detail"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;