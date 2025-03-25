import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskCard from "../common/TaskCard.tsx";

interface Task {
    id: string;
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
    sidebarWidth?: number;
    maxCards?: number;
}

const TaskSlider: ({ title, tasks, cardWidth, sidebarWidth, maxCards }: TaskSliderProps) => JSX.Element = ({
                                                                                                               title,
                                                                                                               tasks = [],
                                                                                                               cardWidth = 250,
                                                                                                               sidebarWidth = 252,
                                                                                                               maxCards
                                                                                                           }: TaskSliderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const [cardsToShow, setCardsToShow] = useState(3);

    const circularTasks = [...tasks, ...tasks];

    useEffect(() => {
        const updateVisibleCards = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const isMobile = window.innerWidth <= 640;

                const isOverflowing = containerWidth < cardWidth * 3;
                const possibleCards = isOverflowing ? 3 : Math.floor(containerWidth / cardWidth);

                const optimalCardCount = maxCards ? Math.min(possibleCards, maxCards) : possibleCards;
                const finalCardCount = isMobile ? 1 : Math.max(1, Math.min(3, optimalCardCount));
                setCardsToShow(finalCardCount);
                console.log(cardsToShow )

                const indices = Array.from(
                    { length: Math.min(finalCardCount, tasks.length) },
                    (_, i) => (currentIndex + i) % tasks.length
                );

                setVisibleCards(indices);
            }
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, [currentIndex, tasks.length, cardWidth, maxCards, sidebarWidth]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tasks.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? tasks.length - 1 : prevIndex - 1
        );
    };

    return (
        <div ref={containerRef} className="task-slider flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="flex gap-2">
                    <button onClick={handlePrev} className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft2 size="32" color="#000" />
                    </button>
                    <button onClick={handleNext} className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowRight2 size="32" color="#000" />
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="flex gap-4"
                        custom={direction}
                        initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                        exit={{ x: direction > 0 ? -100 : 100, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
                    >
                        {visibleCards.map((taskIndex, index) => {
                            const task = circularTasks[taskIndex];
                            return (
                                <div
                                    key={`${task.id}-${index}`}
                                    className="flex-1 gap-[2rem]"
                                >
                                    <TaskCard {...task} />
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TaskSlider;