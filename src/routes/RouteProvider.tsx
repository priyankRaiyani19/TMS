import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout.tsx';
import Overview from '../pages/Overview.tsx';
import Task from '../pages/Task.tsx';
import Mentors from '../pages/Mentors.tsx';
import Message from '../pages/Message.tsx';
import Settings from '../pages/Settings.tsx';
import {Navigate} from "react-router";

const RouteProvider = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/overview"/>}/>
      <Route path="/" element={<Layout />}>
        <Route index  path="overview" element={<Overview />} />
        <Route path="task" element={<Task />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="messages" element={<Message />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>

  );
};

export default RouteProvider;