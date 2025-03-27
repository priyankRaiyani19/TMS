import Sidebar from "../components/common/Sidebar.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={`flex`}>
            <Sidebar />

            <div className={`grow w-full md:w-[74.25rem] flex flex-col`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;