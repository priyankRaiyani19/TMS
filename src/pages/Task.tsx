import TaskSlider from "../components/common/TaskSlider.tsx";
import {LimitedTasks} from "../data/timelimit.ts";
import {UpcomingTask} from "../data/upcoming-tasks.tsx";
import Navbar from "../components/common/Navbar.tsx";

const Task = () => {



  return (

          <div className={`grow`}>
              <Navbar name={"Explore tasks"} isActive={true} />
              <div className={`w-full grow  flex-col items-center justify-center p-[2rem]  `}>
                  <TaskSlider title="New Tasks" tasks={UpcomingTask} />

                  <TaskSlider title="Time Limit" tasks={LimitedTasks} />



              </div>
          </div>

  );
};

export default Task;