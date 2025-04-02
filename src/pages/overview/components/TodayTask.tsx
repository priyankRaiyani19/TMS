import {More} from "iconsax-react";
import todayTask from "../../../assets/overview/task-Today.png";
import {TaskDetails} from "../../../data/overview/task-details.tsx";
import CTAButton from "../../../components/common/CTAButton.tsx";
import {useNavigate} from "react-router";
import {Clock} from "lucide-react";


const TodayTask = () => {
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate("/details");
    }
    return (
        <div className="h-[48rem] bg-white min-w-[23.25rem] rounded-xl shadow-md p-[1.5rem] flex flex-col gap-[1.5rem]">
            <div className="flex justify-between items-center ">
                <h2 className="text-[0.875rem] font-bold">Task Today</h2>
                <More size="20" color={"#141522"}/>
            </div>

            <div className={`flex flex-col gap-[1.5rem]`}>
                <img src={todayTask} alt=""/>

                <div>
                    <h2 className="text-[1rem] font-bold">Creating Awesome Mobile Apps</h2>
                    <p className="text-[0.75rem] text-gray-500">UI /UX Designer``</p>
                </div>

                <div className="w-full flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <p className="text-md font-semibold">Progress</p>
                        <p className="text-sm font-medium">80%</p>
                    </div>

                    {/* Progress Bar with Circle Indicator */}
                    <div className="relative w-full h-[0.5rem] bg-gray-300 rounded-full">
                        {/* Filled Progress */}
                        <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{width: `${80}%`}}
                        ></div>

                        {/* Circle Indicator */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md"
                            style={{left: `calc(${80}% - 8px)`}}
                        ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="text-md font-medium flex items-center gap-2">
                            <Clock size="24" color="#54577A"/>
                            <p className={`text-[1rem]`}>1 Hour</p>
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
            </div>

            <div className="border-b border-gray-300"></div>
            <div className={`flex  `}>
                <div className={`h-full`}>
                    <div className={`h-[1.25rem] flex  justify-between`}>
                        <h2 className="text-lg font-bold">Detail Task</h2>
                        <p className={`text-secondary-400 text-[0.75rem]`}>UI / UX Designer</p>
                    </div>
                    <div className={`h-full flex flex-col justify-between  py-8 `}>
                        <div className="flex flex-col gap-[1rem]">
                            {TaskDetails.map((item, id: number) => (
                                <div  className="flex items-center gap-[0.75rem] text-[0.875rem] " key={id}>
                                    <div
                                        className="bg-[#F5F5F7] text-black font-bold flex items-center justify-center h-9 w-9 rounded-lg">{id + 1}</div>
                                    <div className=" font-medium">{item.task}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleDetails}>
                <CTAButton text="Go To Detail"/>
            </button>
        </div>
    );
};

export default TodayTask;