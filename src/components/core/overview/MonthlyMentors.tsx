import React, {useState} from "react";
import {ClipboardTick, Notepad2} from "iconsax-react";
import {IoStar} from "react-icons/io5";

// Define Type for Props
interface MentorProps {
    name: string;
    role: string;
    tasks: number;
    rating: number;
    reviews: number;
    imageUrl: string;
}

const MonthlyMentors: React.FC<MentorProps> = ({
                                                   name,
                                                   role,
                                                   tasks,
                                                   rating,
                                                   reviews,
                                                   imageUrl,
                                               }) => {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <div
            className="bg-white min-w-[20.5rem] lg:max-w-[22.5rem] min-h-[8.75rem] shadow-md rounded-[0.625rem] p-4 flex items-center space-x-4 w-96">


            {/* User Info */}
            <div className="flex-1">
                <div className="flex justify-between items-center">

                    <div className={`flex items-center justify-center gap-[0.5rem] `}>
                        <img
                            src={imageUrl || "Not Found"}
                            alt={name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className={`flex flex-col justify-center `}>
                            <h3 className="font-semibold text-lg">{name}</h3>
                            <p className="text-gray-500 text-sm">{role}</p>
                        </div>
                    </div>

                    {/* Follow Button */}
                    <button
                        onClick={() => setIsFollowed(!isFollowed)}
                        className={`text-sm font-medium transition ${
                            isFollowed ? "text-gray-500" : "text-blue-500"
                        }`}
                    >
                        {isFollowed ? "Followed" : "+ Follow"}
                    </button>
                </div>


                {/* Task Count & Rating */}
                <div className="flex items-center space-x-4 mt-2 text-gray-700 text-sm">


                    <div className={` flex  justify-between w-full`}>
                        <div className="flex items-center">

                            <Notepad2 size="32" color="#54577a"/>

                            <ClipboardTick size="18" className=" text-secondary-500 font-medium"/>
                            {tasks} Task

                        </div>

                        <div className="flex items-center font-medium">
                            <div>
                                <IoStar/>
                            </div>
                            <div>
                                {rating}
                            </div>
                            <div>
                                ({reviews} Reviews)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyMentors;
