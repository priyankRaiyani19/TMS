import Sidebar from '../components/common/Sidebar.tsx';

import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className={`flex`}>

            <Sidebar/>
          <div className={`flex flex-col w-full`}>

         <div className={`bg-gray-600`}>
           <Outlet/>
         </div>
          </div>




        </div>
    );
};

export default Layout;