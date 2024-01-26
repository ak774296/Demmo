import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Navbar(){
    return <div className="w-screen min-h-[100px] bg-slate-700">
        <div className="w-9/12 mx-auto flex justify-between text-white">
        <div className="text-3xl text-white pt-6 leading-10">
            <span className="text-4xl font-bold">S</span>tudymitr
        </div>
            <NavLink to={"/regestration-step-1"}>
                <div
                className="text-2xl  mt-6 border-2 border-slate-500 rounded-lg flex gap-2 justify-center
                 items-center p-3 hover:text-slate-400 transtion duration-200 ease-in"
                ><p>Regester Now</p> <FaArrowRight/></div>
            </NavLink>
        </div>
        
    </div>
}
export default Navbar;