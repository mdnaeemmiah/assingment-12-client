/* eslint-disable react/prop-types */

import { DateRange } from 'react-date-range'
import { categories } from '../../Categories/CategoriesData'
const UpdateContestForm = ({
  handleSubmit,
  handleImage,
  setRoomData,
  roomData,
  handleDates,
  dates,
}) => {
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='location' className='block text-gray-600'>
            Contest Name
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='location'
              id='location'
              type='text'
              value={roomData?.location}
              onChange={e =>
                setRoomData({ ...roomData, location: e.target.value })
              }
              placeholder='Location'
              required
            />
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Location
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='location'
              id='location'
              type='text'
              value={roomData?.location}
              onChange={e =>
                setRoomData({ ...roomData, location: e.target.value })
              }
              placeholder='location'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Category
            </label>
            <select
              required
              value={roomData?.category}
              onChange={e =>
                setRoomData({ ...roomData, category: e.target.value })
              }
              className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
              name='category'
            >
              {categories.map(category => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className='space-y-1'>
            <label htmlFor='location' className='block text-gray-600'>
              Select Availability Range
            </label>
            <div className='flex justify-center pt-2'>
              {/* Calender */}
              <DateRange
                rangeColors={['#F43F5E']}
                editableDateInputs={true}
                onChange={item => handleDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
              />
            </div>
          </div>

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    className='text-sm cursor-pointer w-36 hidden'
                    type='file'
                    name='image'
                    onChange={e => handleImage(e.target.files[0])}
                    id='image'
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    Upload Image
                  </div>
                  
                </label>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='space-y-1 text-sm'>
              <label htmlFor='price' className='block text-gray-600'>
              Contest Price
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='price'
                id='price'
                value={roomData?.price}
                onChange={e =>
                  setRoomData({ ...roomData, price: e.target.value })
                }
                type='number'
                placeholder='Price'
                required
              />
            </div>
          </div>

          <div className=''>
            <div className='space-y-1 text-sm'>
              <label htmlFor='money' className='block text-gray-600'>
                Bathrooms
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='money'
                id='money'
                value={roomData?.money}
                onChange={e =>
                  setRoomData({ ...roomData, money: e.target.value })
                }
                type='number'
                placeholder='money'
                required
              />
            </div>
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
              Description
            </label>

            <textarea
              id='description'
              value={roomData?.description}
              onChange={e =>
                setRoomData({ ...roomData, description: e.target.value })
              }
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
              name='description'
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateContestForm
