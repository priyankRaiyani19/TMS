import {ArrowLeft2, ArrowRight2, More, Notification} from "iconsax-react";
import Calendar from "../components/core/overview/Calender.tsx";
import TaskCard from "../components/common/TaskCard.tsx";
import CTAButton from "../components/common/CTAButton.tsx";
import {TaskDetails} from "../data/task-details.tsx";
import ChartTooltip from "../components/core/overview/ChartTooltip.tsx";
import RunningTask from "../components/core/overview/RunningTask.tsx";
import MonthlyMentors from "../components/core/overview/MonthlyMentors.tsx";
import {monthlyMentors} from "../data/monthly-mentors.tsx";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {Tasks, UpcomingTask} from "../data/upcoming-tasks.tsx";
import todayTask from "../assets/overview/task-Today.png"
// import SidebarToggle from "../hooks/SidebarToggle.tsx";

const Overview = () => {
    // const {isOpen, setIsOpen} = SidebarToggle();

    // Separate states for Monthly Mentors carousel
    const [mentorIndex, setMentorIndex] = useState(0);
    const [mentorDirection, setMentorDirection] = useState(1);
    const [mentorsPerPage, setMentorsPerPage] = useState(window.innerWidth < 640 ? 1 : 2);
    const totalMentors = monthlyMentors.length;

    // New states for Upcoming Tasks carousel
    const [taskIndex, setTaskIndex] = useState(0);
    const [taskDirection, setTaskDirection] = useState(1);
    const [tasksPerPage, setTasksPerPage] = useState(window.innerWidth < 640 ? 1 : 2);
    const totalTasks = UpcomingTask.length;

    useEffect(() => {
        const handleResize = () => {
            setMentorsPerPage(window.innerWidth < 640 ? 1 : 2);
            setTasksPerPage(window.innerWidth < 640 ? 1 : 2);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handlers for Monthly Mentors
    const handleMentorNext = () => {
        setMentorDirection(1);
        setMentorIndex((prevIndex) => (prevIndex + mentorsPerPage) % totalMentors);
    };

    const handleMentorPrev = () => {
        setMentorDirection(-1);
        setMentorIndex((prevIndex) => (prevIndex - mentorsPerPage + totalMentors) % totalMentors);
    };

    // Handlers for Upcoming Tasks
    const handleTaskNext = () => {
        setTaskDirection(1);
        setTaskIndex((prevIndex) => (prevIndex + tasksPerPage) % totalTasks);
    };

    const handleTaskPrev = () => {
        setTaskDirection(-1);
        setTaskIndex((prevIndex) => (prevIndex - tasksPerPage + totalTasks) % totalTasks);
    };

    const slideVariants = {
        hidden: (direction: number) => ({x: direction > 0 ? "100%" : "-100%", opacity: 0}),
        visible: {x: 0, opacity: 1, transition: {duration: 0.5, ease: "easeInOut"}},
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: {duration: 0.5, ease: "easeInOut"}
        }),
    };

    return (
        <div className="flex flex-col lg:flex-row h-full bg-white/50 overflow-auto">
            <div className="w-full lg:w-[52rem] p-4 flex flex-col">

                {/* ? Navbar*/}
                <div className="p-4 flex justify-between items-center">
                    {/* Menu icon placeholder - you'd need to import an icon component */}
                    {/*<div className="block lg:hidden">*/}
                    {/*    /!* Replace with your menu icon component *!/*/}
                    {/*    <button*/}
                    {/*        className={`md:hidden  z-50 py-3 px-3 text-white p-2 rounded  */}
                    {/*          ${isOpen ? "hidden" : "block"}`}*/}
                    {/*        onClick={() => setIsOpen(true)}*/}
                    {/*    >*/}
                    {/*        <HambergerMenu size="32" color="#8E92BC"/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    <div>
                        {/* Change name to match the image */}
                        <h1 className="text-lg lg:text-2xl font-bold">Hi, Dennis Nzioki</h1>
                        <p className="text-sm text-secondary-400">Let's finish your task today!</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Notification size={24} color="#8E92BC" className="p-2 border rounded-full"/>
                        <div
                            className="w-10 h-10 bg-[#8E92BC] rounded-full text-white flex items-center justify-center font-bold">P
                        </div>
                    </div>
                </div>

                {/*? chart and activity*/}
                <div className="flex flex-col lg:flex-row gap-4 p-4">
                    <div className="lg:w-1/3 w-full">
                        <RunningTask/>
                    </div>
                    <div className="w-full">
                        <ChartTooltip/>
                    </div>
                </div>

                {/* ? monthly mentors*/}
                <div className="flex flex-col  px-4 gap-[1.25rem]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[1rem] font-bold ">Monthly Mentors</h2>
                        <div className="flex gap-2">
                            <button onClick={handleMentorPrev}>
                                <ArrowLeft2 size="32" color="#000"/>
                            </button>
                            <button onClick={handleMentorNext}>
                                <ArrowRight2 size="32" color="#000"/>
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full h-52 overflow-hidden">
                        <motion.div
                            key={mentorIndex}
                            className="absolute flex gap-[2rem] w-full"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                            custom={mentorDirection}
                        >
                            {monthlyMentors.slice(mentorIndex, mentorIndex + mentorsPerPage).map((mentor) => (
                                <MonthlyMentors key={mentor.id} {...mentor} />
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* ? Upcoming tasks */}
                <div className="flex flex-col px-4 gap-[1.25rem]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[1rem] font-bold ">Upcoming Tasks</h2>
                        <div className="flex gap-2">
                            <button onClick={handleTaskPrev}>
                                <ArrowLeft2 size="32" color="#000"/>
                            </button>
                            <button onClick={handleTaskNext}>
                                <ArrowRight2 size="32" color="#000"/>
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full h-[22.5rem] overflow-hidden gap-[2rem]">
                        <motion.div
                            key={taskIndex}
                            className="absolute flex gap-[5rem] w-full"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                            custom={taskDirection}
                        >
                            {
                                UpcomingTask.slice(taskIndex, taskIndex + tasksPerPage).map((_task: Tasks, index) => (
                                    <div key={index} className="min-w-[20.5rem]">
                                        <TaskCard
                                            time={_task.time}
                                            percentage={_task.percentage}
                                            title={_task.title}
                                            role={_task.role}
                                            imageUrl={_task.imageUrl}/>

                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[2rem] w-full lg:w-[26rem] bg-[#F5F5F7] p-[2rem]">
                <Calendar/>
                <div className="min-h-[48rem] bg-white rounded-xl shadow-md p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-base font-bold">Task Today</h2>
                        <More size="20"/>
                    </div>

                    <TaskCard time="1 Hour" title="Creating Awesome Mobile Apps" role="UI /UX Designer"
                              percentage={20} imageUrl={todayTask}/>

                    <div className="border-b border-gray-300"/>

                    <div>
                        <h2 className="text-lg font-bold">Detail Task</h2>
                        <div className={`h-full justify-between flex flex-col pt-8`}>
                            <div className="flex flex-col gap-2">
                                {TaskDetails.map((item, id) => (
                                    <div className="flex items-center gap-2" key={id}>
                                        <div
                                            className="bg-[#8E92BC] text-white font-bold flex items-center justify-center h-9 w-9 rounded-lg">{id}</div>
                                        <div className="text-sm font-medium">{item.task}</div>
                                    </div>
                                ))}
                            </div>
                            <CTAButton text="Go To Detail"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;