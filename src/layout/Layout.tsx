import Sidebar from "../components/common/Sidebar.tsx";
import Navbar from "../components/common/Navbar.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={`flex`}>
            <Sidebar />

            <div className={`grow w-full md:w-[74.25rem] flex flex-col`}>
                <Navbar name="Dashboard" isActive={true} />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;