import Carousel from './../Components/Carousel.jsx';
// import TabCategories from '../Components/TabCategories.jsx';
import { useLoaderData } from 'react-router-dom';
import OurGuides from '../Components/OurGuide.jsx';
import { Helmet } from 'react-helmet-async';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';

const Home = () => {
    const jobs = useLoaderData()
    return (
            <div className='container mx-auto'>
            <Helmet><title>Home</title></Helmet>
                <Carousel></Carousel>
                <OurGuides></OurGuides>
                <AboutUs></AboutUs>
                <ContactUs></ContactUs>
            </div>
    );
};

export default Home;