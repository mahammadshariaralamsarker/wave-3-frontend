import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
const BookedService = () => {
    const {user} = useContext(AuthContext)

    const [jobs, setJobs] = useState([])
  
    useEffect(() => {
      getData()
    }, [user])
  
    const getData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/bid/${user?.email}`);
      if (!response.ok){
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    return (
      <div>
        {
        jobs.length >0 ? <section className='container px-4 mx-auto pt-12'>
        <Helmet><title>My Booked Services</title></Helmet>
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium  '>My Booked Jobs</h2>
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {jobs.length} Job
          </span>
        </div>
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200 '>
                  <thead className=''>
                    <tr>
                      <th scope='col' className='px-4 text-sm font-normal text-center  text-gray-500'   >
                        <div className='flex items-center mx-auto gap-x-3'>
                          <span>Title</span>
                        </div>
                      </th>
                      <th scope='col'   className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '   >
                        <button className='flex items-center gap-x-2'>
                          <span>Price</span>
                        </button>
                      </th>
                      <th scope='col'   className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>Date  </th>
                    </tr>
                  </thead>
                  <tbody className=' divide-y divide-gray-200 '>
                    {jobs.map(job => (
                      <tr key={job._id}>
                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                          {job._id}
                        </td>
                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                          {job.price || 'null'}
                        </td>                    
                        <td title={job.area}   className='px-4 py-4 text-sm   whitespace-nowrap' >
                          {job.date}
                        </td>
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <h1>{job.comment}</h1>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </section>  : <p className='text-6xl font-bold text-center text-red-700'>You Have No Booked Data</p>
      }
      </div>
      
      
    );
};

export default BookedService;