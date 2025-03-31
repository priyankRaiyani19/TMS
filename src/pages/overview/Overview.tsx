import { HambergerMenu, Notification } from 'iconsax-react';
import Calendar from './components/Calender.tsx';
import ChartTooltip from './components/ChartTooltip.tsx';
import RunningTask from './components/RunningTask.tsx';
import { UpcomingTask } from '../../data/overview/upcoming-tasks.tsx';
import TaskSlider from '../../components/common/TaskSlider.tsx';
import MentorSlider from '../../components/common/MentorSlider.tsx';
import { monthlyMentors } from '../../data/overview/monthly-mentors.tsx';
import TodayTask from './components/TodayTask.tsx';
import { useSidebar } from '../../hooks/UseSidebar.tsx';

const Overview = () => {

  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex flex-col ">


      <div className="flex-1 flex flex-col lg:flex-row bg-white/50 max-h-[100vh] overflow-y-auto ">
        <div className="flex-1 p-4 md:p-[2rem] w-full flex flex-col gap-[2rem] ">
          {/* Desktop Header */}


          <div className="flex justify-between md:items-center items-start py-[2rem] md:py-0 ">
            <div className={`flex flex-col gap-[2rem]    `}>
               <div className={`h-[2.75rem] w-[2.75rem] border-2 flex items-center justify-center rounded-full border-[#F5F5F7]  md:hidden`}>
                   <HambergerMenu size={24} color="#8E92BC" onClick={toggleSidebar} />
               </div>
                <div className={`flex flex-col gap-[0.5rem] w-[11.5rem] h-[3.75rem]   md:w-[14.75rem] md:h-[4.5rem] `}>
                    <h1 className="text-[1.5rem] lg:text-2xl font-semibold tracking-[0.01rem]">Hi, Dennis Nzioki</h1>
                    <p className="text-[0.875rem] text-secondary-400">
                        Let's finish your task today!
                    </p>
                </div>
            </div>

          <div className="flex items-center gap-4">
            <div className="p-[0.775rem] border-2 border-secondary-100 rounded-full">
              <Notification size={24} color="#8E92BC" />
            </div>
            <div
              className="w-[3.25rem] h-[3.25rem] bg-[#8E92BC] rounded-full text-white flex items-center justify-center font-bold">
              P
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem]">

          {/* Chart and activity */}

          <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem] py-[1rem] lg:py-[2rem]">
            <RunningTask />
            <ChartTooltip />
          </div>

          {/* Monthly mentors */}

          <MentorSlider title="Monthly Mentors" mentors={monthlyMentors} />

          {/* Upcoming tasks */}

          <TaskSlider
            title={'Upcoming Task'}
            tasks={UpcomingTask}
            maxCards={2}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[2rem] w-full lg:w-[27.25rem] bg-[#F5F5F7] p-4 md:p-[2rem]">
        <Calendar />
        <TodayTask />
      </div>
    </div>
</div>
)
  ;
};

export default Overview;