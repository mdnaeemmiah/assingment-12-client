import PropTypes from 'prop-types'
import Button from '../Shared/Button/Button'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import useAuth from '../../hooks/useAuth'
import BookingModal from '../Dashboard/modal/BookingModal'
const RoomReservation = ({ room, refetch }) => {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(room.from),
      endDate: new Date(room.to),
      key: 'selection',
    },
  ])

  const closeModal = () => {
    setIsOpen(false)
  }

  
  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
   
      <hr />
      <hr />
      <div className='p-4 '>
        <Button 
          disabled={room?.booked}
          onClick={() => setIsOpen(true)}
          label={room?.booked ? 'Booked' : 'Continue'}
        />
      </div>

      {/* Modal */}
      <BookingModal
        isOpen={isOpen}
        refetch={refetch}
        closeModal={closeModal}
        bookingInfo={{
          ...room,
          guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      />
      <hr />
    </div>
  )
}

RoomReservation.propTypes = {
  room: PropTypes.object,
  refetch: PropTypes.func,
}

export default RoomReservation
