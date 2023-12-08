import {GiFallingStar} from "react-icons/gi"

const DashboardSider = () => {
  return (
    <div>
      <div className='w-[200px] border-x-2 border-x-purple-300  h-[calc(100vh-75px)]  mt-[75px] fixed '>
        <div className='px-[20px] mt-50px'>
            <div className='flex mb-50px mt-4'>
                <image className='w-[40px] h-[40px] rounded-sm bg-purple-600'/>
                <div className='ml-[10px]'>
                    <div className='font-[600] leading-[1.2]'>Dashboard</div>
                    <div className='text-[14px]'>Softwarer</div>
                </div>
            </div>

                <div className='text-[14px] font-semibold mt-4'>You are on <span className="text-purple-700 font-extrabold">FREE</span> plan</div>

                <div className="mt-[30px] border-2 border-purple-700 flex items-center justify-center rounded-[50px] py-[10px] px-[5px]">
                    <div className="text-[30px] mr-[10px] text-[#5c0080]"><GiFallingStar/></div>
                   <div className="font-semibold text-[13px]"> upgrade to <span className="text-purple-700 font-extrabold">BroMo plan</span></div>
                </div>

                <br />
                <hr />
                <br />

                <div className='font-[600] text-[17px] mb-[10px] uppercase'>Project</div>

                <div className='p-[10px] my-[6px] rounded-sm transition duration-[450ms] hover:cursor-pointer hover:bg-[#cc00ff68]'>ProjectTask</div>
                <div  className='p-[10px] my-[6px] rounded-sm transition duration-[450ms] hover:cursor-pointer hover:bg-[#cc00ff68]'>ProjectTask</div>
                <div  className='p-[10px] my-[6px] rounded-sm transition duration-[450ms] hover:cursor-pointer hover:bg-[#cc00ff68]'>ProjectTask</div>

                <br />
                <hr />
                <br />

                <div className='w-full justify-center'>
                <button className='uppercase font-light text-white bg-[#7700ff] transition-all duration-[450ms] outline-none border-none'>Add Project</button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSider;
