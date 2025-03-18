import {More, Notification} from "iconsax-react";
import Calendar from "../components/core/overview/Calender.tsx"
import TaskCard from "../components/common/TaskCard.tsx";
import CTAButton from "../components/common/CTAButton.tsx";
import {Taskdetails} from "../data/taskdetails.tsx"
import ChartTooltip from "../components/core/overview/ChartTooltip.tsx";
import RunningTask from "../components/core/overview/RunningTask.tsx";

const Overview = () => {

    return (
        <div className={`flex flex-col lg:flex-row h-full bg-white/50`}>
            <div className={`w-full flex flex-col `}>
                <div className="p-[2rem] flex justify-between ">
                    <div className={`flex flex-col `}>
                        <h1 className={`text-[1.5rem] font-bold font-jakarta`}>
                            Hi,Priyank Raiyani
                        </h1>
                        <p className={`text-[1rem] text-secondary-400`}>
                            Let's finish your task today!
                        </p>
                    </div>
                    <div className={`flex items-center gap-[1rem] w-[8rem] h-[3.25rem]`}>
                        <div className={`p-2 border-[1px] border-secondary-300 rounded-full`}>
                            <Notification size={24} color="#8E92BC"/>
                        </div>
                        <div
                            className={`w-[3.25rem] h-[3.25rem] bg-[#8E92BC] rounded-[100%] text-[#fff] flex justify-center items-center font-bold`}>
                            P
                        </div>
                    </div>
                </div>

                <div className={` flex lg:justify-between px-5 lg:flex-row flex-col  gap-[2rem] `}>
                    <div className={`lg:w-[15.125rem] lg:h-[13.375rem] `}>
                        <RunningTask/>
                    </div>

                    <div className={`w-full h-[13.375rem] `}>
                        <ChartTooltip/>
                    </div>
                </div>
            </div>

            {/*second part*/}
            <div
                className={`flex flex-col gap-5 lg:min-w-[27.25rem] lg:w-[26rem] w-full h-full bg-[#F5F5F7] py-[2rem] px-[1rem] `}>

                <div>
                    <Calendar/>
                </div>

                <div
                    className={`min-h-[48rem] w-full p-[1.5rem] bg-[#fff] rounded-[1rem] shadow-md flex flex-col gap-[2rem]`}>

                    <div className={`flex justify-between items-center gap-[1rem] `}>
                        <h1 className={`text-[0.875rem] font-bold `}>Task Today</h1>
                        <More size="20" color="#000"/>
                    </div>

                    <TaskCard time={"1 Hour"} title={"Creating Awesome Mobile Apps"} role={"UI /UX Designer"}
                              percentage={20}/>

                    <div className={`w-full h-[1px] bg-secondary-300/30`}></div>

                    <div className={`w-full flex flex-col gap-[1rem] `}>
                        <div className={`flex w-full  justify-between`}>
                            <h1 className={`text-[1rem] font-bold `}>
                                Detail Task
                            </h1>
                            <p className={`text-[0.875rem] text-secondary-400 `}>
                                UI / UX Designer
                            </p>
                        </div>
                        <div className={`flex flex-col gap-[2rem]`}>
                            {
                                Taskdetails.map((item: { id: number, task: string }, id: number) => (
                                    <div className={`flex  items-center gap-[1rem]`} key={id}>
                                        <div
                                            className={` bg-[#8E92BC] rounded-lg text-[#fff] font-bold flex items-center justify-center h-[2.25rem] w-[2.25rem] text-center`}>
                                            {id}
                                        </div>
                                        <div className={`text-[0.875rem] font-medium`}>{item.task}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <CTAButton text={"Go To Detail"}/>


                </div>
            </div>
        </div>
    );
};

export default Overview;