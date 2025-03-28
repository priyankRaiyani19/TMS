import { Notification, HambergerMenu, SearchNormal1, Element, Sort, Setting4 } from 'iconsax-react';
import { useSidebar } from '../../hooks/UseSidebar';
import { useState } from 'react';

const Navbar = ({ name, isActive = false }: { name: string, isActive: boolean }) => {
  const { toggleSidebar } = useSidebar();
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className="bg-white ">
      <div className="p-[1.5rem] flex flex-col grow justify-between items-center gap-[2rem]">
        <div className={`flex  w-full justify-between items-start`}>
          <div className={`flex gap-[2rem]  flex-col`}>
              <div className={`h-[2.75rem] w-[2.75rem] border-2 flex items-center justify-center rounded-full border-[#F5F5F7]  md:hidden`}>
                  <HambergerMenu size={24} color="#8E92BC" onClick={toggleSidebar} />
              </div>
              <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-[0.775rem] border-2 border-secondary-100 rounded-full">
              <Notification size={24} color="#8E92BC" />
            </div>
            <div
              className="w-[3.25rem] h-[3.25rem] bg-[#8E92BC] rounded-full text-white flex items-center justify-center font-bold">
              P
            </div>
          </div>
        </div>

        <div
          className={`flex w-full gap-[1rem] md:gap-0 md:justify-between items-center ${isActive ? 'block' : 'hidden'}`}>
          <div
            className="flex items-center border-2 border-[#E3E1E1] rounded-lg min-h-[35px] px-3 relative max-w-[300px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-gray-700 ml-3 focus:outline-none w-full placeholder-gray-400"
              aria-placeholder="Search input"
            />
            <SearchNormal1 size="24" color="#8E92BC" />
          </div>

          <div className="relative">
            <div className="hidden md:flex gap-[2rem]">
              <div className="text-black font-medium flex gap-2 hover:cursor-pointer">
                <Element size="24" color="#8e92bc" /> Categories
              </div>
              <div className="text-black font-medium flex gap-2 hover:cursor-pointer">
                <Sort size="24" color="#8e92bc" /> Sort By : Popular
              </div>
            </div>

            <div
              className="md:hidden flex items-center gap-2 cursor-pointer border-2 border-[#E3E1E1] rounded-[0.8rem] p-2"
              onClick={handleDropDown}>
              <Setting4 size="24" color="#8e92bc" />
            </div>

            {isDropDownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-[70]">
                <div className="text-black font-medium flex gap-2 py-2 border-b cursor-pointer">
                  <Element size="24" color="#8e92bc" /> Categories
                </div>
                <div className="text-black font-medium flex gap-2 py-2 cursor-pointer">
                  <Sort size="24" color="#8e92bc" /> Sort By : Popular
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;