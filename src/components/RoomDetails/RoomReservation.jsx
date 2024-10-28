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
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {room?.price}</div>
        <div className='font-light text-neutral-600'>/night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        {/* Calender */}
        <DateRange
          showDateDisplay={false}
          rangeColors={['#F6536D']}
          onChange={item => {
            console.log(item)
            setState([
              {
                startDate: new Date(room.from),
                endDate: new Date(room.to),
                key: 'selection',
              },
            ])
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <hr />
      <div className='p-4'>
        <Button
          disabled={room?.booked}
          onClick={() => setIsOpen(true)}
          label={room?.booked ? 'Booked' : 'Reserve'}
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
