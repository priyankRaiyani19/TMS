import { sidebar, SidebarItem } from '../../data/sidebar.tsx';
import { NavLink } from 'react-router-dom';
import { CloseCircle } from 'iconsax-react';
import { useSidebar } from '../../hooks/UseSidebar.tsx';
import BookSquare from '../../assets/sidebar/BookSquare.tsx';
import clsx from 'clsx';

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div>
      {isOpen && (
        <div
          className="z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="min-h-[64rem] h-full lg:min-w-[15.75rem]">
        {/* Sidebar Container */}
        <div
          className={clsx(
            `fixed md:relative top-0 left-0 min-h-[64rem] h-full w-[15.75rem] bg-white px-6 py-8 flex flex-col justify-between 
          transition-transform duration-300 ease-in-out z-40`,
            {
              '-translate-x-full md:translate-x-0': !isOpen,
              'translate-x-0': isOpen
            }
          )}
        >

          {/* Close Button for Mobile */}
          <button
            className="md:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            <CloseCircle size="32" color="#000" />
          </button>

          {/* Logo */}
          <div className="flex flex-col gap-[3.75rem]">
            <div className="flex items-center  gap-[0.75rem] font-semibold  w-[11.75rem] h-[2.5rem]  ">
              <BookSquare/>
              <h1 className={`text-[2rem]`}>DNX</h1>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-[1.5rem] w-[11.75rem] h-[19.75rem]">
              {sidebar.map((item: SidebarItem) => (
                <NavLink
                  to={item.path}
                  key={item.id}
                  className={({ isActive }) =>
                    clsx(
                      `py-2.5 max-w-[11.75rem] px-4 flex gap-4 rounded-lg font-semibold transition-all max-h-[2.75rem] group/parent`,
                      {
                        'bg-gray-300 text-black': isActive,
                        'hover:bg-secondary-100 hover:text-secondary-500 text-secondary-300': !isActive
                      }
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive}) => (
                    <div className="flex items-center gap-[0.75rem]">
                      <item.icon
                        size={24}
                        color={isActive ? "#141522" : "#8E92BC"
                        }
                      />

                      <p className="text-[0.875rem] tracking-[0.009rem] font-semibold">
                        {item.title}
                      </p>
                    </div>)}
                </NavLink>
              ))}

            </div>
          </div>

          {/* Help Center Section */}
          <div className={`relative w-[11.75rem] h-[15.5rem] bg-secondary-500 rounded-[0.625rem]  `}>
            <div
              className={`absolute ml-[37%] -mt-[15%] bg-secondary-500  h-[3rem] w-[3rem] rounded-full border-[0.3rem] border-white text-center text-white text-[1.75rem]
                     shadow-[0_0px_24px] shadow-secondary-400`}>
              ?
            </div>

            <div className={`h-[10rem] w-[10rem] rounded-full absolute -mt-[6.25rem] -ml-[5.875rem] bg-white/8 `} ></div>

            <div className={`h-[5rem] w-[5rem] rounded-tl-full rounded-none  absolute mt-[10.5rem]  ml-[6.8rem] bg-white/8 `} ></div>

            <div className={`text-center mt-[4.438rem] h-[10rem] flex flex-col items-center justify-between`} >

             <div className={`flex flex-col gap-[0.75rem]`}>
               <div className={`text-[1rem] text-white font-semibold tracking-[0.009rem]`}>
                 Help Center
               </div>
               <div className={`text-[0.75rem] w-[9.5rem] text-white`}>
                 Having Trouble in Learning.
                 Please contact us for more questions.
               </div>
             </div>

              <div className={`text-[0.75rem]  p-[1.5rem] w-[9.75rem] h-[2.5rem] bg-white text-secondary-500 font-semibold text-center flex items-center justify-center rounded-[0.625rem]`}>
                Go To Help Center
              </div>
            </div>


          </div>
        </div>


        {/* Overlay on Mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-xl z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>


  );
};

export default Sidebar;
