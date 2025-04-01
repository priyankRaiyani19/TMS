import Sidebar from "../components/common/Sidebar.tsx";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/common/Navbar.tsx";

const Layout = () => {
  return (
    <div className={`flex `}>

      <Sidebar />

      {/*<Navbar/>*/}
      <div className={`grow w-[74.25rem] `}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;