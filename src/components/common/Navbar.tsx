import {Notification, HambergerMenu, SearchNormal1, Element, Sort, Setting4} from "iconsax-react";
import { useSidebar } from "../../hooks/UseSidebar";
import {useState} from "react";

const Navbar = ({name, isActive = false}: { name: string, isActive: boolean }) => {
    const { isOpen, toggleSidebar } = useSidebar();
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

    const handleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    return (
        <div className="bg-white shadow-md rounded-lg">
            <div className="p-4 flex flex-col grow justify-between items-center gap-[2rem]">
                <div className={`flex w-full justify-between items-center`}>
                    <div className={`flex items-center gap-[2rem]`}>
                        {/* Hamburger Menu for Mobile */}
                        <button 
                            className="block md:hidden p-2 hover:bg-gray-100 rounded-lg" 
                            onClick={toggleSidebar}
                            aria-label="Toggle menu"
                        >
                            <HambergerMenu size={24} color="#8E92BC"/>
                        </button>

                        <div>
                            <h1 className="text-2xl font-medium">{name}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                        <Notification size={32} color="#8E92BC" className="p-2 border rounded-full"/>
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>

                <div
                    className={`flex w-full gap-[1rem] md:gap-0 md:justify-between items-center ${isActive ? "block" : "hidden"}`}>
                    <div
                        className="flex items-center border-2 border-[#E3E1E1] rounded-lg min-h-[35px] px-3 relative max-w-[300px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent text-gray-700 ml-3 focus:outline-none w-full placeholder-gray-400"
                            aria-placeholder="Search input"
                        />
                        <SearchNormal1 size="24" color="#8E92BC"/>
                    </div>

                    <div className="relative">
                        <div className="hidden md:flex gap-[2rem]">
                            <div className="text-black font-medium flex gap-2 hover:cursor-pointer">
                                <Element size="24" color="#8e92bc"/> Categories
                            </div>
                            <div className="text-black font-medium flex gap-2 hover:cursor-pointer">
                                <Sort size="24" color="#8e92bc"/> Sort By : Popular
                            </div>
                        </div>

                        <div
                            className="md:hidden flex items-center gap-2 cursor-pointer border-2 border-[#E3E1E1] rounded-[0.8rem] p-2"
                            onClick={handleDropDown}>
                            <Setting4 size="24" color="#8e92bc"/>
                        </div>

                        {isDropDownOpen && (
                            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-[70]">
                                <div className="text-black font-medium flex gap-2 py-2 border-b cursor-pointer">
                                    <Element size="24" color="#8e92bc"/> Categories
                                </div>
                                <div className="text-black font-medium flex gap-2 py-2 cursor-pointer">
                                    <Sort size="24" color="#8e92bc"/> Sort By : Popular
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;