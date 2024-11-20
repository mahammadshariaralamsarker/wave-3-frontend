

const ContactUs = () => {
    return (
        <div className='border shadow-2xl w-full mx-auto p-5 space-y-4'>
        <h1 className='font-bold text-6xl text-center '>Contact Us</h1>
        <p className='text-2xl font-medium '>Please Provide your information we will contact you....</p>
        <h1 className='text-3xl '>Name</h1>
        <input type="text" className='input shadow-sm w-full border-2 border-black ' placeholder="Name "/>
        <h1 className='text-3xl '>Email</h1>
        <input type="text" className='input shadow-sm border-2 w-full border-black ' placeholder="Email "/>
        <h1 className='text-3xl '>Phone Number</h1>
        <input type="text" className='input shadow-sm border-2 w-full border-black ' placeholder="Number "/>
        <button className='btn w-full bg-red-400 text-white text-3xl '>Subscribe</button>
        </div>
    );
};

export default ContactUs;