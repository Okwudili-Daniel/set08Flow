import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col w-full h-[100vh] bg-gray-300">
        <div className="text-[45px] font-[600] w-[490px] text-center">
          Choose a Monthly Plan For your Task
        </div>
        <div className="flex w-[90%] justify-center">
          <div className="w-[30%] h-[300px] border flex justify-center bg-gradient-to-l from-green-500 via-green-600 to-green-400">
              <div className="w-[90%]">
                <div className="font-bold text-[30px] pt-[20px]">FreeMo</div>
                <p className="mb-[30px] text-[15px]">Connect to your 3 staff and 5 projects</p>
                <div className="font-bold text-[30px] ">₦0</div>
                <p className="mb-[30px]">Per company/month, billed annually</p>
                <Link to="/freemo">
                <button className="rounded-md bg-gray-700 font-[600] text-white border-none w-full h-[40px] ">Click here</button>
                </Link>
              </div>
          </div>

          <div className="w-[30%] h-[300px] border flex justify-center bg-gradient-to-l from-red-600 via-red-500 to-red-700">
              <div className="w-[90%]">
                <div className="font-bold text-[30px] pt-[20px]">BroMo</div>
                <p className="mb-[30px] text-[15px]">Connect to your 7 staff and 15 projects</p>
                <div className="font-bold text-[30px] ">₦2000</div>
                <p className="mb-[30px]">Per company/month, billed annually</p>
                <Link to="/bromo">
                <button className="rounded-md bg-gray-700 font-[600] text-white border-none w-full h-[40px] ">Click here</button>
                </Link>
              </div>
          </div>

          <div className="w-[30%] h-[300px] border flex justify-center bg-gradient-to-l from-amber-500 via-amber-400 to-amber-400">
              <div className="w-[90%]">
                <div className="font-bold text-[30px] pt-[20px]">PreMo</div>
                <p className="mb-[30px] text-[14px]">Connect to your unlimited staff and unlimited projects</p>
                <div className="font-bold text-[30px] ">₦3000</div>
                <p className="mb-[30px]">Per company/month, billed annually</p>
                <Link to="/premo">
                <button className="rounded-md bg-gray-700 font-[600] text-white border-none w-full h-[40px] ">Click here</button>
                </Link>
              </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
