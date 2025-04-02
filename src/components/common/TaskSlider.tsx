import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskCard from "../common/TaskCard.tsx";

interface Task {
    id: number;
    time: string;
    percentage: number;
    title: string;
    role: string;
    imageUrl: string;
}

interface TaskSliderProps {
    title: string;
    tasks: Task[];
    cardWidth?: number;
    maxCards?: number;
}

const TaskSlider = ({ title, tasks = [], cardWidth = 250, maxCards }: TaskSliderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const updateVisibleCards = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const windowWidth = window.innerWidth;
                let newCardsToShow = 3;

                if (windowWidth <= 640) {
                    newCardsToShow = 1;
                } else if (windowWidth <= 1024) {
                    newCardsToShow = 2;
                } else {
                    newCardsToShow = Math.max(3, Math.floor(containerWidth / cardWidth));
                }

                if (maxCards) {
                    newCardsToShow = Math.min(newCardsToShow, maxCards);
                }

                setCardsToShow(newCardsToShow);
                setVisibleCards(tasks.slice(currentIndex, currentIndex + newCardsToShow).map((_, i) => currentIndex + i));
            }
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, [currentIndex, tasks.length, cardWidth, maxCards]);

    const handleNext = () => {
        if (currentIndex + cardsToShow < tasks.length) {
            setDirection(1);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div ref={containerRef} className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[1.5rem] font-bold">{title}</h2>
                <div className="flex gap-2">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50">
                        <ArrowLeft2 size="24" color="#000" />
                    </button>
                    <button onClick={handleNext} disabled={currentIndex + cardsToShow >= tasks.length} className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50">
                        <ArrowRight2 size="24" color="#000" />
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="flex items-center  gap-[2rem]"
                        custom={direction}
                        initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ x: direction > 0 ? -100 : 100, opacity: 0, transition: { duration: 0.2 } }}
                    >
                        {visibleCards.map((taskIndex) => (
                            <div key={taskIndex} className="flex-1">
                                <TaskCard {...tasks[taskIndex]} />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TaskSlider;
