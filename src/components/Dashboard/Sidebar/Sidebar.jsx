import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { MdHomeWork } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import useRole from '../../../hooks/useRole'
import ToggleBtn from '../../Shared/Button/ToggleBtn'
import MenuItem from '../Menu/MenuItem'
import GuestMenu from '../Menu/GuestMenu'
import HostMenu from '../Menu/HostMenu'
import AdminMenu from '../Menu/AdminMenu'
import logo from '../../../assets/images/contest-speech-bubble-banner-business-marketing-advertising-vector-illustration-banner-business-marketing-advertising_602351-1277.avif'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [role, isLoading] = useRole()
  console.log(role, isLoading)
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  return (
    <div className=''>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <div className='flex items-center'>
                <img src={logo} className='h-[40px]' alt="" />
                <h2 className='text-xl font-semibold ml-2'>Contest-Platform</h2>
              </div>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-orange-400 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link to='/'>
                <div className='flex items-center'>
                  <img src={logo} className='h-[40px]' alt="" />
                  <h2 className='text-xl font-semibold ml-2'>Contest-Platform</h2>
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}
            {role === 'creator' && (
              <ToggleBtn toggleHandler={toggleHandler} toggle={toggle} />
            )}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
             
              {role === 'guest' && <GuestMenu />}
              {role === 'creator' ? (
                toggle ? (
                  <HostMenu />
                ) : (
                  <GuestMenu />
                )
              ) : undefined}
              {role === 'admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label='Profile'
            address='/dashboard/profile'
            icon={FcSettings}
          />

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <NavLink to='/login' className='mx-4 font-medium'>Logout</NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
