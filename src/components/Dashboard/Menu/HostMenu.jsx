import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add Contest' address='add-contest' />
      <MenuItem icon={MdHomeWork} label='My Created Contest' address='my-created' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Contest '
        address='manage-contest'
      />
    </>
  )
}

export default HostMenu
