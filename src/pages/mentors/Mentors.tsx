import MentorSlider from "../../components/common/MentorSlider.tsx";
import { Mentor, monthlyMentors } from "../../data/overview/monthly-mentors.tsx";
import Navbar from "../../components/common/Navbar.tsx";
import MentorsCard from "../../components/common/MentorsCard.tsx";

const Mentors = () => {
    return (
        <div className={`flex flex-col max-h-[100vh] overflow-y-auto gap-[2rem]`}>
            <Navbar name={"Explore Mentors"} isActive={true} />

            <div className={`w-full grow  px-[2rem] `}>
                <div className={`flex flex-col gap-[2rem]`}>
                    <MentorSlider title={"Recent Mentors"} mentors={monthlyMentors} />

                    <div className={`flex flex-col gap-[1.5rem] `}>
                        <div className="flex ">
                            <h2 className="text-[1.5rem] font-bold">Mentor</h2>
                        </div>
                        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[2rem]  items-center ">
                            {monthlyMentors.map((m: Mentor, index: number) => (
                                <MentorsCard
                                    key={index}
                                    name={m.name}
                                    role={m.role}
                                    tasks={m.tasks}
                                    rating={m.rating}
                                    reviews={m.reviews}
                                    imageUrl={m.imageUrl}
                                    isActive={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentors;
