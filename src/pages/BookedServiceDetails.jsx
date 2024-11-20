import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const BookedServiceDetails = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const job = useLoaderData()
    const { _id, service_title, price, photo, provider,} = job || {}



    const handleFormSubmission = async e => {
        e.preventDefault()
        if (user?.email === provider?.email)
            return toast.error('Action not permitted!')
        const form = e.target
        const jobId = _id
        const price = parseFloat(form.price.value)

        const comment = form.comment.value
        const email = user?.email
        const status = 'Pending'
        const service_title = form.service_title.value
        const date = form.date.value


        const bidData = {
            jobId, price, comment, email,
            buyer_email: user?.email,
            status,
            provider,
            service_title,
            date,
        }
        console.log(bidData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bid`, bidData)
            console.log(data)
            if (data.insertedId) {
                toast.success("data added successfully")
            }
        }
        catch (err) {
            console.log(err)
            console.log('Hi, i am error', err.message)
        }
    }
    return (
             <section className='p-6 w-full   rounded-md shadow-md flex-1 md:min-h-[350px] bg-[#a3a4ac]'>

                <h2 className='text-lg font-semibold   capitalize '> Get this service </h2>
               <img className='w-full h-96' src={photo} alt="" />
                <form onSubmit={handleFormSubmission}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='  ' htmlFor='price'> Service title </label>
                            <input id='service_title' type='text' name='service_title' defaultValue={service_title} className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        <div>
                            <label className='  ' htmlFor='price'> Service Id</label>
                            <input id='service_title' type='text' name='service_title' defaultValue={_id} className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        <div>
                            <label className='  ' htmlFor='price'> Price </label>
                            <input id='price' type='text' name='price' readOnly defaultValue={price} value={price} className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        <div>
                            <label className='  ' htmlFor='price'> Provider Name  </label>
                            <input id='price' type='text' name='price'  className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        

                        <div>
                            <label className='  ' htmlFor='emailAddress'> My Email Address </label>
                            <input id='emailAddress' type='email' name='email' disabled defaultValue={user?.email} readOnly className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        <div>
                            <label className='  ' htmlFor='emailAddress'> My Name  </label>
                            <input id='emailAddress' type='email' name='email' disabled  defaultValue={user?.displayName} readOnly className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>

                        <div>
                            <label className='  ' htmlFor='comment'> Instruction </label>
                            <input id='comment' name='comment' type='text'  className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                        <div>
                            <label className='  ' htmlFor='comment'> Service Taking Date </label>
                            <input id='comment' name='date' type='date' className='block w-full px-4 py-2 mt-2   bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button type='submit' className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' > Purchase </button>
                    </div>
                </form>
            </section> 
    )
};

export default BookedServiceDetails;