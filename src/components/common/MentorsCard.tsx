import React, { useState } from "react";
import { ClipboardTick, Notepad2 } from "iconsax-react";
import { IoStar } from "react-icons/io5";
import { toast } from "react-hot-toast";

interface MentorProps {
    name: string;
    role: string;
    tasks: number;
    rating: number;
    reviews: number;
    imageUrl: string;
    isActive: boolean;
}

const MentorsCard: React.FC<MentorProps> = ({
                                                name,
                                                role,
                                                tasks,
                                                rating,
                                                reviews,
                                                imageUrl,
                                                isActive = false,
                                            }) => {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {
        setIsFollowed(!isFollowed);
        {
            isFollowed
                ? toast.error("Unfollowed successfully")
                : toast.success("Followed successfully");
        }
    };

    return (
        <div className="bg-white max-w-[20.5rem] lg:max-w-[20.5rem] min-h-[8.75rem] shadow-md rounded-[0.625rem] p-[1.5rem] flex items-center  flex-col gap-[2rem]">
            {/* User Info */}
            <div className="flex flex-col justify-between gap-[0.71rem] h-full min-w-full">

                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-center gap-[0.5rem]">
                        <img
                            src={imageUrl || "Not Found"}
                            alt={name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="font-semibold text-[1rem]">{name}</h3>
                            <p className="text-gray-500 text-[0.75rem]">{role}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleFollow}
                        className={`text-sm font-medium transition ${
                            isFollowed ? "text-gray-500" : "text-blue-500"
                        }`}
                    >
                        {isFollowed ? "Followed" : "+ Follow"}
                    </button>
                </div>

                <div className={`${isActive ? "block" : "hidden"} text-[0.875rem] text-secondary-300 py-[1rem]`}>
                    Hi, I'm {name}. I am a doctoral student at Harvard University majoring in Web . . .
                </div>

                {/* Task Count & Rating */}

                <div className="flex items-center space-x-4 mt-2 text-gray-700 text-sm">
                    <div className="flex justify-between w-full text-[0.875rem] text-secondary-500">
                        <div className="flex items-center">
                            <Notepad2 size="24" color="#54577a" />
                            <ClipboardTick size="18" className="text-secondary-500 font-medium" />
                            {tasks} Task
                        </div>
                        <div className="flex items-center font-medium gap-[0.5rem] w-[9.5rem]">
                            <IoStar size={24} color="#FFB054" />
                            <div className="flex gap-[0.2rem]">
                                <div>{rating}</div>
                                <div className={`text-[0.875rem]`}>({reviews} Reviews)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorsCard;
