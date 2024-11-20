import name1 from './../assets/images/New folder/1.jpg';
import name2 from './../assets/images/New folder/2.jpg';
import name3 from './../assets/images/New folder/3.jpg';


const OurGuides = () => {
    return (
        <div>
            <h1 className="text-center font-bold lg:text-6xl text-3xl m-4 hover:scale-[1.05] transition-all">Meet Our Team Leader</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8  p-8 ">
                <div className="card border-2 shadow-2xl border-slate-950 text-center hover:scale-[1.05] transition-all border-white  ">
                    <div className="">
                    <img className='w-full h-[300px] rounded-t-2xl' src={name1} alt="" />
                        <h2 className="font-bold lg:text-3xl text-2xl  text-center">Kumar Vattacharjee</h2>
                        <p className='lg:text-2xl text-xl font-medium'>Senior Engineer Of Automobile</p>
                        
                    </div>
                </div>
                <div className="card shadow-2xl text-center border-2 border-white  hover:scale-[1.05] transition-all">
                    <div className="">
                    <img className='w-full h-[300px] rounded-t-2xl' src={name3} alt="" />
                        <h2 className="font-bold lg:text-3xl text-2xl  text-center">Alexa Victor </h2>
                        <p className='lg:text-2xl text-xl font-medium'>Head of Motor Department</p>
                        
                    </div>
                </div>
                <div className="card shadow-2xl text-center border-2 border-white hover:scale-[1.05] transition-all ">
                    <div className="">
                    <img className='w-full h-[300px] rounded-t-2xl' src={name2} alt="" />
                        <h2 className="font-bold lg:text-3xl text-2xl  text-center">Rahul Mondol</h2>
                        <p className='lg:text-2xl text-xl font-medium'>Mechanical Engineer  </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default OurGuides;