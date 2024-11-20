import { useContext } from 'react';
import logo from './../../assets/images/logo.png';
import { AuthContext } from './../../provider/AuthProvider';
import { Link,NavLink } from "react-router-dom"
import './../../App.css';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='navbar  shadow-sm container mx-auto '>

            <div className='flex-1'>
                
                <Link className='flex lg:gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='lg:font-bold '> Seba Corner</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul id='nav' className=' lg:flex '>
                    <li className='lg:mx-10'><NavLink to='/'>Home</NavLink></li>
                    <li className='lg:mx-10'><NavLink to='/productPage'>Product</NavLink></li>
                    <li className='lg:mx-10'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    {
                        !user ? <li><NavLink to="/login">Login</NavLink></li> :
                            <div className='lg:flex'>
                                <div className='flex'>
                                    <div className='dropdown dropdown-end z-50'>
                                        <div tabIndex={0} role='button' className=' '><li className='lg:mx-10'><NavLink>D</NavLink></li></div>
                                        <ul  tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52'>
                                            <li><NavLink to="add_job" className='justify-between'>Add Service</NavLink></li>
                                            <li><NavLink to='my_posted_jobs'>Manage Service</NavLink></li>
                                            <li><NavLink to="booked_section">Booked Service</NavLink></li>
                                            <li><NavLink to='/productPage'>Product</NavLink></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='lg:flex'>
                                    <img className='w-10 rounded-full ' title={user?.displayName} referrerPolicy='no-referrer' alt='User Profile Photo' src={user?.photoURL} />
                                    <div className='lg:mx-10'><button onClick={() => logOut()} className=' text-center'>Logout</button></div>
                                </div>
                            </div>
                    }

                </ul>
            </div>
        </div>
    )
}

export default Navbar