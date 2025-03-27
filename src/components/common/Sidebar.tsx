import { sidebar, SidebarItem } from "../../data/sidebar.tsx";
import { NavLink } from "react-router-dom";
import { CloseCircle} from 'iconsax-react';
import { useSidebar } from '../../hooks/UseSidebar.tsx';
import BookSquare from "../../assets/sidebar/BookSquare.tsx"

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      {/* Overlay on Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed md:relative top-0 left-0 min-h-screen h-full w-[15.75rem] bg-white px-[1.5rem] py-[2rem] flex flex-col justify-between
        transition-transform duration-300 ease-in-out z-[65] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <CloseCircle size="24" color="#000"/>
        </button>

        {/* Logo */}
        <div className="flex flex-col gap-[2rem]">
          <div className="flex items-center text-[2rem] gap-[1rem] font-semibold">
            <BookSquare />
            <h1>DNX</h1>
          </div>

          {/* Sidebar Links */}
          <div className="w-full flex flex-col gap-[1rem]">
            {sidebar.map((item: SidebarItem) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={({ isActive }) =>
                  `py-[0.55rem] max-w-[11.75rem] px-[1rem] flex gap-[1.5rem] rounded-[0.625rem] ${
                    isActive ? "bg-gray-300 text-black" : "hover:bg-secondary-100 text-secondary-300"
                  } font-semibold`
                }
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <div>{item.icon}</div>
                  <p className="text-[1.1rem]">{item.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Help Center Section */}
        <div className="w-full bg-secondary-500 rounded-[0.625rem] hidden lg:flex flex-col text-white items-center relative p-4 mt-3">
          <div
            className="border-8 h-[4.5rem] w-[4.5rem] rounded-full text-center font-semibold text-[3rem] flex items-center justify-center
            absolute -top-[2.5rem] bg-secondary-500 shadow-[0px_-1px_49px_0px] shadow-primary-900"
          >
            ?
          </div>

          <div className="flex flex-col items-center gap-5 pt-[4rem]">
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <div className="text-[1.5rem] font-semibold">Help Center</div>
              <div className="text-[0.75rem] px-2 text-center">
                Having trouble in learning? Please contact us for more questions.
              </div>
            </div>
            <button className="bg-white text-black font-bold text-[0.75rem] rounded-[0.625rem] px-[1rem] py-[0.5rem]">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;