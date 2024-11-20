import { useContext, useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'

const UpdateJob = () => {
  const navigate = useNavigate()
  const job = useLoaderData()
  console.log(job)
  const {   _id,service_title, price, description } = job || {}
  const { user } = useContext(AuthContext)
  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
        const service_title = form.job_title.value
        const email = form.email.value
        const price = parseFloat(form.price.value)
        const description = form.description.value
        const photo = form.photo.value
        const jobData = {
            service_title,
            price,
            description,
            photo,
            
             buyer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }, 
        }
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/job/${_id}`,
        jobData
      )
      console.log(data)
      toast.success('Job Data Updated Successfully!')
      navigate('/my_posted_jobs')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>Post a Service</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>Service Name </label>
                            <input id='job_title' name='job_title' type='text' defaultValue={service_title} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'> Email Address </label>
                            <input id='emailAddress' type='email' name='email' disabled defaultValue={user?.email} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'/>
                        </div>
                        <div className='flex flex-col  '>
                            <h1>Service Area</h1>
                            <input type="text" defaultValue='' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'  />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='min_price'>Price</label>
                            <input id='price' name='price' type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'/>
                        </div>
                        <div className='  '>
                            <h1>Photo URL</h1>
                            <input type="text"name='photo' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-4'  />
                        </div>

                        
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'> Description  </label>
                        <textarea className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' name='description' id='description' ></textarea>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'> Update Services </button>
                    </div>
                </form>
            </section>
        </div>
  )
}

export default UpdateJob
