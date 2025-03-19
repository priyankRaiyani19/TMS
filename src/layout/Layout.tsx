import Sidebar from '../components/common/Sidebar.tsx';
import {Outlet} from 'react-router-dom';
import Navbar from "../components/common/Navbar.tsx";


const Layout = () => {

    return (
        <div className={`flex overflow-x-hidden`}>
            <Sidebar/>
            <div className={`flex flex-col w-full`}>
                <Navbar/>
                <div className={`w-full`}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;