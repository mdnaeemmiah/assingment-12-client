import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'


const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex '>
      {/* Sidebar */}
      <div className='bg-orange-400'>
      <Sidebar />
      </div>
      {/* Outlet --> Dynamic content */}
      <div className='flex-1 md:ml-64 p-5 '>
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
