/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  const { _id, description, service_title, price, photo, provider } = job || {}

  return (
    <div className='w-full  p-5 relative border rounded-md shadow-md hover:scale-[1.05] transition-all bg-[#a3a4ac]'>
      <img className='w-full h-48 rounded-t-xl' src={photo} alt="" />
      <div>
        <h1 className='mt-2 text-lg font-semibold  '> {service_title} </h1>
        <p title={description} className='mt-2 text-sm '> {description.substring(0, 100)}... </p>
        <p>Price : {price}</p>
      </div>
      <div className='flex justify-between '>
        <div className=' shadow-lg p-5 ab bottom-0 border'>
      <h1 className='text-center'>Provider</h1>
          <img className='rounded-full' src={provider?.photo} alt="" />
          <h1> {provider?.name}</h1>
        </div>
        <Link to={`/job/${_id}`} className='absolute bottom-3 right-3   btn btn-lg mt-7  bg-[#56bcd1bc]'>View Details</Link>
      </div>
    </div>
  )
}

export default JobCard