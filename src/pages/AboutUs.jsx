import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center my-8'>About Us</h1>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border"><div className='flex justify-between'><h1>We guarantee the highest quality of
                    the products we sell. Click to more details......</h1><h1> >>>> </h1></div></summary>
                <div className="collapse-content">
                    <p className='text-3xl ' >Welcome to our online marketplace, where shopping is simplified and satisfaction is guaranteed. Browse, click, and enjoy the effortless way to shop for everything you need, right from the comfort of your home</p>
                </div>
            </details>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border"><div className='flex justify-between'><h1>Our Shopping policy. Click to more details......</h1><h1> >>>> </h1></div></summary>
                <div className="collapse-content">
                    <p className='text-3xl ' >Welcome to our online marketplace, where shopping is simplified and satisfaction is guaranteed. Browse, click, and enjoy the effortless way to shop for everything you need, right from the comfort of your home</p>
                </div>
            </details>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border"><div className='flex justify-between'><h1>Our higher policy . Click to more details......</h1><h1> >>>> </h1></div></summary>
                <div className="collapse-content">
                    <p className='text-3xl ' >Welcome to our online marketplace, where shopping is simplified and satisfaction is guaranteed. Browse, click, and enjoy the effortless way to shop for everything you need, right from the comfort of your home</p>
                </div>
            </details>
        </div>
    );
};

export default AboutUs;