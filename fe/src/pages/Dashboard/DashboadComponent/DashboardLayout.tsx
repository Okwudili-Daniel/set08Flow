import DashboardHeader from './DashboardHeader'
import DashboardSider from '../DashboardSider'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <DashboardHeader/>
      <div className='flex'>
      <DashboardSider/>
        <div className='w-full flex justify-end'>
        <div className='w-[calc(100%-200px)] '>
        <Outlet/> 
        </div> 
        </div>  
      </div>
    </div>
  )
}

export default DashboardLayout
