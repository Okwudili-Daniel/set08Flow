import { NavLink } from "react-router-dom";
import img from "../assets/CodeLab Best Logo.png"
import {AiOutlineSearch} from "react-icons/ai"
import { IoDesktopOutline, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";

const DashboardHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);


  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="w-full h-[75px] flex items-center justify-center border-b-gray-400 bg-gradient-to-l from-purple-400 via-purple-600 to-purple-500 fixed">
        <div className="w-[95%] h-full flex items-center justify-between relative">
        <div className="flex items-center">
                <img className="h-[40px] mr-[40px]" src="Logo"/>

        <div className="border-gray-400 flex items-center pl-[10px] overflow-hidden">
          <div className="text-[40px]"><AiOutlineSearch/></div>
          <input className="flex-1 h-full outline-none border-none placeholder:font-Poppins" placeholder='Search here'/>
        </div>
        </div>

        <div className="flex">
          <div className="flex items-center">
          <button className="py-[15px] px-[38px] bg-purple-700 text-white rounded-[5px] mr-[10px] font-Poppins">Create</button>
          <div className="flex items-center justify-center bg-orange-700 py-[10px] px-[19px] rounded-[50px] text-white font-Poppins hover:cursor-pointer"
          onClick={onToggle}
          >P</div>
        </div>

<div className="flex items-center bg-gray-200 px-3 py-1 border rounded-md ml-6">
              <NavLink
                to="/dashboardDark"
                className={({ isActive }: any) =>
                  isActive
                    ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm"
                    : "mx-1 text-[35px] rounded-[4px] py-1 px-2 "
                }
              >
                <IoSunnyOutline size={25} />
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }: any) =>
                  isActive
                    ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm "
                    : "mx-1 text-[35px]  rounded-[4px] py-1 px-2 "
                }
              >
                <MdOutlineNightsStay size={25} />
              </NavLink>

              <IoDesktopOutline className="mx-1 text-[35px] rounded-[4px] py-1 px-2 " />
            </div>

            {toggle && (
        <div className="w-[400px] h-[200px] bg-white shadow-md border rounded-md absolute right-[15%] top-[100%]">
          <div className="flex mt-6 ">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-red-500 text-white font-bold text-[20px] mx-3">
              P
            </div>
            <div>
              <div className="text-[20px] font-bold  ">Name</div>
              <div className="leading-3">email</div>
            </div>
          </div>

          <div className="mt-6 pl-4 py-3 flex items-center  text-[gray] hover:bg-[lightgray] transition-all duration-200 hover:cursor-pointer ">
            <LuLogOut />
            <span
              className="ml-8"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
                onToggle();
              }}
            >
              Log Out
            </span>
          </div>
        </div>
      )}
        </div>

        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;
