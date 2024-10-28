import { Link } from "react-router-dom"

const Slider = ({image, text,pos}) => {
    return (
      <div
        className='w-full bg-center bg-cover h-[38rem]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
          <div className='text-center'>
            <h1 className="text-5xl text-red-600 font-bold">{pos}</h1>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
             {text}
            </h1>
            <br />
          </div>
        </div>
      </div>
    )
  }
  
  export default Slider