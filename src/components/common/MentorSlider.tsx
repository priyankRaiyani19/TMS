import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import MentorsCard from '../common/MentorsCard';
import { Mentor } from '../../data/overview/monthly-mentors.tsx';


type MentorSliderProps = {
  title: string;
  mentors?: Mentor[];
};
const MentorSlider : React.FC<MentorSliderProps> = ({ title , mentors = [] }) => {
  const containerRef = useRef(null);
  const [mentorIndex, setMentorIndex] = useState(0);
  const [mentorDirection, setMentorDirection] = useState(1);
  const [mentorsPerPage, setMentorsPerPage] = useState(1);

  useEffect(() => {
    const calculateMentorsPerPage = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current. clientWidth;
        const sidebarWidth = document.querySelector('.sidebar')?.offsetWidth || 250;
        const availableWidth = containerWidth - sidebarWidth;
        const mentorCardWidth = 250;
        const count = Math.max(1, Math.floor(availableWidth / mentorCardWidth));
        setMentorsPerPage(count);
      }
    };

    calculateMentorsPerPage();
    window.addEventListener('resize', calculateMentorsPerPage);
    return () => window.removeEventListener('resize', calculateMentorsPerPage);
  }, []);

  const totalMentors = mentors.length;

  const handleNext = () => {
    if (mentorIndex + mentorsPerPage < totalMentors) {
      setMentorDirection(1);
      setMentorIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (mentorIndex > 0) {
      setMentorDirection(-1);
      setMentorIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-[1rem]">
      <div className="flex justify-between items-center">
        <h2 className="text-[1.5rem] font-bold">{title}</h2>
        <div className="flex gap-2">
          <button onClick={handlePrev} disabled={mentorIndex === 0} className="p-2 disabled:opacity-50">
            <ArrowLeft2 size="24" color="#000" />
          </button>
          <button onClick={handleNext} disabled={mentorIndex + mentorsPerPage >= totalMentors}
                  className="p-2 disabled:opacity-50">
            <ArrowRight2 size="24" color="#000" />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <AnimatePresence initial={false} custom={mentorDirection} mode="wait">
          <motion.div
            key={mentorIndex}
            className="flex gap-[2rem] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25, ease: 'easeIn' } }}
          >
            {mentors.slice(mentorIndex, mentorIndex + mentorsPerPage).map((mentor, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 calc(${100 / mentorsPerPage}% - ${(mentorsPerPage - 1) * 70 / mentorsPerPage}px)`
                }}
              >
                <MentorsCard {...mentor} isActive={false}/>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MentorSlider;