import { FaUserCog } from 'react-icons/fa'
import { IoMdContacts } from "react-icons/io";

import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={IoMdContacts} label='Manage Contest Page' address='manage-contest' />
    </>
  )
}

export default AdminMenu
