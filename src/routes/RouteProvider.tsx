import { Route, Routes, Navigate } from "react-router-dom";
import { SidebarProvider } from "../hooks/UseSidebar.tsx";
import Layout from "../layout/Layout.tsx";
import Overview from "../pages/overview/Overview.tsx";
import Task from "../pages/task/Task.tsx";
import Mentors from "../pages/mentors/Mentors.tsx";
import Message from "../pages/message/components/Message.tsx";
import Settings from "../pages/settings/Settings.tsx";
import TaskDetail from "../pages/TaskDetail.tsx";

const RouteProvider = () => {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="task" element={<Task />} />
          <Route path="/details" element={<TaskDetail />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="messages" element={<Message />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
};

export default RouteProvider;
