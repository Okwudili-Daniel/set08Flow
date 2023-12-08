import { Link, NavLink } from "react-router-dom";
import { IoSunnyOutline, IoDesktopOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineNightsStay } from "react-icons/md";
import { useEffect, useState } from "react";
const Header = () => {
  // const [toggle, setToggle] = useState<boolean>(false);

  // useEffect(() => {
  // })

  // const user = JSON.parse(localStorage.getItem("user")!);
  // const onToggle = () => {
  //   setToggle(!toggle);
  // };

  return (
    <div>
       <div className="flex w-full h-[70px] border-b justify-center  ">
        <div className="flex items-center justify-between w-[96%]  ">
          <div>Logo</div>

          <div className="flex items-center">
            <Link
              to="/sign in"
              className="min-w-10 px-5 h-10 flex justify-center items-center rounded-sm bg-purple-500 text-white  text-[20px] mx-3 hover:cursor-pointer "
              onClick={() => {}}
            >
              Log in
            </Link>
            <div className="flex items-center bg-gray-200 px-3 py-1 border rounded-md">
              <NavLink
                to="/dark"
                className={({ isActive }: any) =>
                  isActive
                    ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm"
                    : "mx-1 text-[35px] rounded-[4px] py-1 px-2 "
                }
              >
                <IoSunnyOutline size={25} />
              </NavLink>
              <NavLink
                to="/"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

