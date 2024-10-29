import PropTypes from 'prop-types'
const  ContestsDataRow = ({ user, refetch }) => {

 return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
     
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>comments</span>
        </span>
        {/* comments User Modal */}
       
      </td>
    </tr>
  )   
}

ContestsDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default ContestsDataRow