import {useLocation} from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    console.log("this is path ", location.pathname)

    return (
        <div>
            {
                location.pathname === "/task" || "/mentors" ? (<div></div>) : (<div></div>)


            }


        </div>


    )
};

export default Navbar;
