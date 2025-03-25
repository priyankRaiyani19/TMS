import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import MentorsCard from "../common/MentorsCard";

const MentorSlider = ({ title, mentors = [] }) => {
    const containerRef = useRef(null);
    const [mentorIndex, setMentorIndex] = useState(0);
    const [mentorDirection, setMentorDirection] = useState(1);
    const [mentorsPerPage, setMentorsPerPage] = useState(1);
    
    // Create a circular array for infinite scrolling
    const circularMentors = [...mentors, ...mentors];

    useEffect(() => {        
        const calculateMentorsPerPage = () => {
            console.log(containerRef);
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const sidebarWidth = document.querySelector(".sidebar")?.offsetWidth || 250;
                const availableWidth = containerWidth - sidebarWidth;
                const mentorCardWidth = 250;
                const count = Math.max(1, Math.floor(availableWidth / mentorCardWidth));
                setMentorsPerPage(count);
            }
        };

        calculateMentorsPerPage();
        window.addEventListener("resize", calculateMentorsPerPage);
        return () => window.removeEventListener("resize", calculateMentorsPerPage);
    }, []);

    const totalMentors = mentors.length;

    const handleNext = () => {
        setMentorDirection(1);
        setMentorIndex((prevIndex) => (prevIndex + 1) % totalMentors);
    };

    const handlePrev = () => {
        setMentorDirection(-1);
        setMentorIndex((prevIndex) =>
            prevIndex <= 0 ? totalMentors - 1 : prevIndex - 1
        );
    };

    return (
        <div ref={containerRef} className="mentor-slider flex flex-col  gap-[1rem]">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="flex gap-2">
                    <button onClick={handlePrev} className="p-2 ">
                        <ArrowLeft2 size="32" color="#000" />
                    </button>
                    <button onClick={handleNext} className="p-2  ">
                        <ArrowRight2 size="32" color="#000" />
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden p-4">
                <AnimatePresence initial={false} custom={mentorDirection} mode="wait">
                    <motion.div
                        key={mentorIndex}
                        className="flex gap-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25, ease: "easeIn" } }}
                    >
                        {Array.from({ length: mentorsPerPage }).map((_, i) => {
                            const currentIndex = (mentorIndex + i) % totalMentors;
                            const mentor = circularMentors[currentIndex];
                            return (
                                <div 
                                    key={`${mentor.id}-${i}`}
                                    style={{
                                        flex: `0 0 calc(${100 / mentorsPerPage}% - ${(mentorsPerPage - 1) * 32 / mentorsPerPage}px)`,
                                    }}
                                >
                                    <MentorsCard {...mentor} />
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MentorSlider;
