import { useContext } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const AddJob = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleFormSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const service_title = form.job_title.value
        const email = form.email.value
        const price = parseFloat(form.price.value)
        const description = form.description.value
        const photo = form.photo.value
        const area = form.area.value
        const jobData = { service_title, price, description, photo, area,
             buyer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }, 
        }
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/job`,
                jobData
            )
            console.log(data)
            toast.success('Job Data Added Successfully!')
            navigate('/my_posted_jobs')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12 '>
            <section className=' p-2 md:p-6 mx-auto rounded-md shadow-2xl border bg-[#c4c4cc]'>
                <h2 className='text-lg font-semibold  capitalize '>Post a Service</h2>
                    <Helmet><title>Add Service</title></Helmet>
                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className=' ' htmlFor='job_title'>Service Name </label>
                            <input id='job_title' name='job_title' type='text' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        <div>
                            <label className=' ' htmlFor='emailAddress'> Email Address </label>
                            <input id='emailAddress' type='email' name='email' disabled defaultValue={user?.email} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'/>
                        </div>
                        <div className='flex flex-col  '>
                            <h1>Service Area</h1>
                            <input name='area' type="text" className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'  />
                        </div>
                        <div>
                            <label className='' htmlFor='min_price'>Price</label>
                            <input id='price' name='price' type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'/>
                        </div>
                        <div className=''>
                            <h1>Photo URL</h1>
                            <input type="text" id='photo' name='photo' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-4'  />
                        </div>                        
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='' htmlFor='description'> Description  </label>
                        <textarea className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' name='description' id='description' ></textarea>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='px-8 py-2.5 leading-5 shadow-2xl border  bg-[#56bcd1bc]  transition-colors duration-300 transhtmlForm  rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'> Add Services </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddJob
