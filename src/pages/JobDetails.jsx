import { useContext,  } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../provider/AuthProvider'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const job = useLoaderData()
    const { _id, service_title, description, price, photo, provider, } = job || {}
    const [jobs, setJobs] = useState([])
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/job`)
        setJobs(data)
      }
      getData()
    }, [])
    return (
        <div className=' border rounded-lg  p-5'>
            <img className='w-full lg:h-96 h-32 rounded-lg mb-5' src={photo} alt="" />
            <div className=' grid md:grid-cols-2 grid-cols-1 rounded-md gap-8 '>
              {/* service information */}
                <div className='w-full shadow-lg lg:p-5 justify-between p-2  bg-[#e2e3e8]  border rounded-lg '>
                    <div className=''>
                        <h1 className=' lg:text-3xl text-xl font-semibold '>Service Name: {service_title} </h1>
                        <p className='lg:text-lg '>{description}</p>
                        <p className=' text-lg font-bold  '>Price : {price}  </p>
                    </div>
                </div>
                {/* Service provider details  */}
                <section className=' w-full shadow-lg border rounded-lg  bg-[#e2e3e8]  p-6 '>
                    <h1 className=' lg:text-3xl font-semibold '>Service Provider Information</h1>
                    <div className='flex items-center gap-5'>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14 m-2'>
                            <img src={provider?.photo} alt='' />
                        </div>
                        <div>
                            <p className=' text-sm   '> Name: {provider?.name} </p>
                            <p className=' text-sm  '> Area: {provider?.area} </p>
                        </div>
                    </div>
                </section>
        
            </div>
            <div className=' flex justify-center my-6'>
            <Link  to={`/booked/${_id}`} className='btn min-w-full  bg-[#56bcd1bc]'>Book Now</Link>
            </div>
        
        </div>
    )
}

export default JobDetails
